import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const RulesScreen = () => {
  return (
    <View style={styles.block}>
      <Text>Правила</Text>
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