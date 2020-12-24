import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const MainScreen = () => {
  return (
    <View style={styles.block}>
      <Text>Main</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})