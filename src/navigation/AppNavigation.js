import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { GamesScreen } from '../screens/GamesScreen'

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Games: {
      screen: GamesScreen
    }
  }, 
  {
    initialRouteName: 'Main'
  }
)

export const AppNavigation = createAppContainer(PostNavigator)