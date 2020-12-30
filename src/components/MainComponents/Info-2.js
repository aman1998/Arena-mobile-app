import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity  } from 'react-native'
import { COLORS } from '../../assets/colors/colors'

export const Info2 = ({navigation}) => {
  return (
    <View style={styles.block}>
      <Text style={{marginTop: 10, color: '#000', fontWeight: 'bold'}}>В первый раз в приложении?</Text>
      <Text style={{marginTop: 10, color: '#000', fontWeight: 'bold'}}>Прочитайте инструкцию</Text>
      <TouchableOpacity style={styles.btn} onPress={() => console.log('hello')}>
        <Text>Инструкция</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 150,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btn: {
    width: 150,
    height: 40,
    marginTop: 20,
    backgroundColor: COLORS.SECOND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#000'
  }
})