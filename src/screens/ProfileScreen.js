import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons'

export const ProfileScreen = () => {
  
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
        <View>
          <Entypo name="edit" size={24} color="black" />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.rates}>
          <View style={styles.rate}><Text>Рейтинг</Text></View>
          <View style={styles.rate}><Text>Личный рейтинг</Text></View>
        </View>
        <View style={styles.item}><Text>Инструкция</Text></View>
        <View style={styles.item}><Text>Правила игры</Text></View>
        <View style={styles.item}><Text>Редактировать</Text></View>
        <View style={styles.rates}>
          <View style={styles.rate}><Text>Условия пользования</Text></View>
          <View style={styles.rate}><Text>Политика конфиди-ности</Text></View>
        </View>
        <View style={styles.rates}>
          <View style={styles.rate}><Text>Политики возвратов</Text></View>
          <View style={styles.rate}><Text>Техподдержка</Text></View>
        </View>
        <View style={styles.item}><Text>Выход</Text></View>
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
    borderBottomStyle: 'solid'
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

