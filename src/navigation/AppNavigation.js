import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { GamesScreen } from '../screens/GamesScreen'
import { GameCardScreen } from '../screens/GameCardScreen'
import { COLORS } from '../assets/colors/colors'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { ProfileScreen } from '../screens/ProfileScreen'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const _MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Главное'
      }
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.HEADER_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#000' : '#000'
    }
  }
)

const _GamesNavigator = createStackNavigator(
  {
    Games: {
      screen: GamesScreen,
      navigationOptions: {
        title: 'Турниры'
      }
    },
    GameCard: {
      screen: GameCardScreen,
      navigationOptions: {
        title: 'Детали Турнира'
      }
    }
  }
  ,
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.HEADER_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#000' : '#000'
    }
  }
)

const _ProfileNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Профиль'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.HEADER_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#000' : '#000'
    }
  }
)

const AppNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: _MainNavigator,
      navigationOptions: {
        title: 'Главное',
        tabBarIcon: <AntDesign name="home" size={24} color={Platform.OS === 'android' ? 'black': 'black'} />
      }
    },
    Games: {
      screen: _GamesNavigator,
      navigationOptions: {
        tabBarIcon: <AntDesign name="switcher" size={24} color={Platform.OS === 'android' ? 'black': 'black'} />
      }
    },
    Profle: {
      screen: _ProfileNavigator,
      navigationOptions: {
        tabBarIcon: <MaterialCommunityIcons name="face-profile" size={24} color={Platform.OS === 'android' ? 'black': 'black'} />
      }
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.HEADER_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : COLORS.HEADER_COLOR
    },
    // tabBarOptions: {
    //   style: {
    //       backgroundColor: Platform.OS === 'android' ? COLORS.HEADER_COLOR : '#fff',
    //   },
    // },
  }
)

export const AppNavigation = createAppContainer(AppNavigator)