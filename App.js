import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import { createStackNavigator } from 'react-navigation';
import BookingsScreen from "./screens/components/BookingsScreen";
import HomeScreen from './screens/components/HomeScreen'
import ConfirmationScreen from './screens/components/ConfirmationScreen';
import PaymentsScreen from  './screens/components/PaymentScreen'

const RootStack = createStackNavigator(
  {
    Details: HomeScreen,
    Bookings: BookingsScreen,
    Confirmation:ConfirmationScreen,
    Payments:PaymentsScreen,
  },
  {
    initialRouteName: 'Details',
  },
  {
    header:null,

  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


export default createBottomTabNavigator({
  
  Saved: {
    screen: RootStack,
    navigationOptions: {
      headerVisible: false,
      header:null,
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'LIVE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        elevation: 5
      }
    },
   
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
