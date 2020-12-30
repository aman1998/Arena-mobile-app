import React, {useEffect, useState} from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import AppLoading from 'expo-app-loading';
import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/components/Bootstrap/bootstrap'
import rootReducer from './src/store/reducers'
import { Authentication } from './src/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default function App() {
  const [isReady, setIsReady] = useState(false)

  // if(!isReady) {
  //   return (
  //     <AppLoading 
  //       startAsync={bootstrap}
  //       onFinish={() => setIsReady(true)}
  //       onError={err => console.log(err)}
  //     />
  //   )
  // }

  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  )
}


