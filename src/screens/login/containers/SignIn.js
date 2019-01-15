import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Input, InputGroup, Item, Label, Icon, Toast } from 'native-base';
import styles from '../assets/styles';
import Logo from '../../../../assets/images/octodex.jpg';

class SignIn extends Component {

  state = {
    showPassword: true
  }

  handleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword  
    });
  }

  handleSignIn = () => {
    const { email, password } = this.state
    const { dispatch } = this.props

    if (email && email.length > 0 && password && password.length > 0) {
      dispatch({
        type: 'INIT_SESSION',
        payload: {
          authorize: true
        }
      });
    }else{
      Toast.show({
        text: 'Ingrese email y password',
        buttonText: 'Ok',
        duration: 4000,
        type: 'danger',
        buttonTextStyle: styles.buttonToast
      })
    }
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image
            source={Logo}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <InputGroup 
            style={styles.inputGroup} 
          >
            <Item 
              floatingLabel
              style={styles.noBorderBottom}
            >
              <Label>Email:</Label>
              <Input
                getRef={(email) => { this.email = email}}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                onSubmitEditing={() => {this.password._root.focus()}}
              />         
            </Item>
          </InputGroup>
          <InputGroup 
            iconRight 
            style={styles.inputGroup}
          >
            <Item 
              floatingLabel 
              style={styles.noBorderBottom}
            >
              <Label>Password:</Label>
              <Input
                getRef={(password) => {this.password = password}}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={this.state.showPassword}
                value={this.state.password}
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='go'
              />
              <Icon 
                name='eye'
                onPress={this.handleShowPassword}
              />
            </Item>
          </InputGroup>
          <Button 
            full
            style={styles.buttonSubmit}
            onPress={this.handleSignIn}
            ref={(submitButton) => {this.submitButton = submitButton}}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  authorize: state.authorize
});

export default connect(mapStateToProps)(SignIn);

