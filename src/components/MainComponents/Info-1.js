import React from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'

export const Info1 = () => {
  return (
    <View>
      <View style={styles.item}>
        <ImageBackground style={styles.image} source={require('../../assets/icons/shield.png')}/>
        <Text style={styles.text}>Античит</Text>
        <Text style={styles.text}>Мы верим только в честную игру </Text>
      </View>
      <View style={styles.item}>
        <ImageBackground style={styles.image} source={require('../../assets/icons/XMLID.png')}/>
        <Text style={styles.text}>Самые популярные игры</Text>
        <Text style={styles.text}>Проводим турниры по самым популярным играм</Text>
      </View>
      <View style={styles.item}>
        <ImageBackground style={styles.image} source={require('../../assets/icons/headphones.png')}/>
        <Text style={styles.text}>Отзывчивая поддержка</Text>
        <Text style={styles.text}>Наша техподдержка работает 24 часа в сутки.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    paddingVertical: 10,
  },  
  image: {
    width: 40,
    height: 40,
  }, 
  text: {
    // fontFamily: 'open-bold'
  }
})