import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginNavigator from './navigators/LoginNavigator';
import AppNavigator from './navigators/AppNavigator';
console.disableYellowBox = true;

class AppLayout extends Component{
  render(){
    if (this.props.authorize) {
      return(<AppNavigator />);
    }else{
      return(<LoginNavigator />);
    }
  }
}

const mapStateToProps = (state) => ({
  authorize: state.authorize
});

export default connect(mapStateToProps)(AppLayout);