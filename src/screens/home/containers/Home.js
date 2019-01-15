import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Header, Right, Icon } from 'native-base';
import styles from '../assets/styles';
import Octacat from '../../../../assets/images/black.jpg'

class Home extends Component {

  handleSignOut = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'DESTROY_SESSION',
      payload: {}
    })
  }

  render() {
    return(
      <View>
        <Header style={styles.header}>
          <Right>
            <Icon 
              name='power' 
              style={styles.iconLogout}
              onPress={this.handleSignOut} 
            />
          </Right>
        </Header>
        <View style={styles.octacatContainer}>
          <Image
            source={Octacat}
            style={styles.octacat}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authorize: state.authorize
});

export default connect(mapStateToProps)(Home);
