import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const InstructionScreen = ({navigation}) => {
  const toggleBurger = () => {
    navigation.toggleDrawer()
  }
  return (
    <View style={styles.block}>
      <Text>Инструкция</Text>
      <Button 
        title='burger'
        onPress={toggleBurger}
      />
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