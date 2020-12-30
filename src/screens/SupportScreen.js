import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const SupportScreen = () => {
  return (
    <View style={styles.block}>
      <Text>Поддержка</Text>
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