import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator } from 'react-navigation'
import { GameCardScreen } from '../screens/GameCardScreen'

const _GameCardNavigation = createStackNavigator(
  {
    GameCard: {
      screen: GameCardScreen,
      navigationOptions: {
        title: 'Game-1'
      }
    }
  }
)

export const GameCardNavigation = createSwitchNavigator(
  {
    GameCard: _GameCardNavigation
  }
)