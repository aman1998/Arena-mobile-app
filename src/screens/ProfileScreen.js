import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons'

export const ProfileScreen = ({navigation}) => {
  
  const { profile } = useSelector(state => ({
    profile: state.profile.myProfile
  }))

  return (
  <ScrollView>
    <View style={styles.block}>
      <View style={styles.blockHeaderWrapper}>
        <View style={styles.blockHeader}>
          <View style={styles.avatarWrapper}>
            <Entypo name="user" size={24} color="black" />
          </View>
          <View>
            <Text>996551772525</Text>
            <Text>Amangeldi</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Instruction')}>
          <Entypo name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.rates}>
          <TouchableOpacity style={styles.rate}><Text>Рейтинг</Text></TouchableOpacity>
          {/* <View style={styles.rate}><Text>Рейтинг</Text></View> */}
          <TouchableOpacity style={styles.rate}><Text>Личный рейтинг</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Instruction')}><Text>Инструкция</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Rules')}><Text>Правила игры</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Instruction')}><Text>Редактировать</Text></TouchableOpacity>
        <View style={styles.rates}>
          <TouchableOpacity style={styles.rate} onPress={() => navigation.navigate('Instruction')}><Text>Условия пользования</Text></TouchableOpacity>
          <TouchableOpacity style={styles.rate} onPress={() => navigation.navigate('Instruction')}><Text>Политика конфиди-ности</Text></TouchableOpacity>
        </View>
        <View style={styles.rates}>
          <TouchableOpacity style={styles.rate} onPress={() => navigation.navigate('Instruction')}><Text>Политики возвратов</Text></TouchableOpacity>
          <TouchableOpacity style={styles.rate} onPress={() => navigation.navigate('Instruction')}><Text>Техподдержка</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.item}><Text>Выход</Text></TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10
  },
  blockHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    // borderBottomStyle: 'solid'
  },
  blockHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10
  },
  rates: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rate: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid'
  },
  item: {
    marginTop: 10,
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid'
  }
})

