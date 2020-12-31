import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { AppNavigation } from './navigation/AppNavigation'
import { Auth } from './auth/Auth'
import { fetchProfileActionCreator } from './store/actions/profile'

export const Authentication = () => {
  const dispatch = useDispatch()

  const { token, isLog } = useSelector(state => ({
    token: state.profile.token,
    isLog: state.profile.isLog
  }))
  useEffect(() => {
    if(token) {
      dispatch(fetchProfileActionCreator(token))
    }
  }, [token])

  return isLog === true ? <AppNavigation /> :  <Auth />
}