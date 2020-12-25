import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const GameCardScreen = ({navigation}) => {
  const itemId = navigation.getParam('itemId')
  return (
    <View style={styles.block}>
      <Text>{itemId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})