import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

export const HeaderIcon = (props) => (
  <HeaderButton 
    {...props}
    size={32}
    IconComponent={Ionicons}
    color={Platform.OS === 'android' ? '#000' : '#000'}
  />
)