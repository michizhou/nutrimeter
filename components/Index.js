import React from 'react'
import { Icon} from 'react-native-elements';
import Dashboard from './dashboard';
import Profile from './Profile';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator(
  {
      Home: { screen: Dashboard },
      Profile: { screen: Profile },
  },
  {
      navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = 'home';
            } else if (routeName === 'Profile') {
              iconName = 'user-o';
            }

            return <Icon name={iconName} size={30} color={tintColor} type='font-awesome' />;
          },
      }),
      animationEnabled: true,
      swipeEnabled: true,
  }
);

