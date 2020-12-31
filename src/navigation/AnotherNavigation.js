import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { RulesScreen } from '../screens/RulesScreen.'
import { InstructionScreen } from '../screens/InstructionScreen'
import { SupportScreen } from '../screens/SupportScreen'
import { MainScreen } from "../screens/MainScreen"
import { ProfileScreen } from '../screens/ProfileScreen'

const _RulesNavigator = createStackNavigator({
  Rules: {
    screen: RulesScreen,
    navigationOptions: {
      title: 'Правила'
    }
  }
})

const _InstructionNavigator = createStackNavigator({
  Instruction: {
    screen: InstructionScreen,
    navigationOptions: {
      title: 'Инструкция'
    }
  }
})

const _SupportNavigator = createStackNavigator({
  Support: {
    screen: SupportScreen,
    navigationOptions: {
      title: 'Техподдержка'
    }
  }
})

const _MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Главное'
    }
  }
})

export const AnotherNavigator = createDrawerNavigator({
  Main: {
    screen: _MainNavigator,
    navigationOptions: {
      title: 'Главное'
    }
  },
  Instruction: {
    screen: _InstructionNavigator,
    navigationOptions: {
      title: 'Инструкция'
    }
  },
  Rules: {
    screen: _RulesNavigator,
    navigationOptions: {
      title: 'Правила'
    }
  },
  Support: {
    screen: _SupportNavigator,
    navigationOptions: {
      title: 'Техподдержка'
    }
  },
})