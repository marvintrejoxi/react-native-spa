import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/home/containers/Home';

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },{
    defaultNavigationOptions: {
      header: null
    }
  }
);

const appNavigator = createAppContainer(appStackNavigator);

export default appNavigator;