import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignIn from '../screens/login/containers/SignIn';

const loginStackNavigator = createStackNavigator(
  {
    Login: {
      screen: SignIn
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const loginNavigator = createAppContainer(loginStackNavigator);

export default loginNavigator;