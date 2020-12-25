import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MainScreen = ({navigation}) => {
  const goToGames = () => {
    navigation.navigate('Games')
  }
  return (
    <View style={styles.block}>
      <Text>Main</Text>
      <Button title='Турниры' onPress={goToGames}/>
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