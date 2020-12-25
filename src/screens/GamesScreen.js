import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import axios from '../axios/axios'
import { Games } from '../components/Games/Games'

export const GamesScreen = ({navigation}) => {
  const [games, setGames] = useState([])
  const openPostHandler = item => {
    navigation.navigate('GameCard', { itemId: item.id })
  }
  useEffect(() => {
    axios.get('/lobby/rates/')
      .then(({data}) => { 
        setGames(data)
        console.log('data',data)
      })
  }, [])
  return (
    <View style={styles.block}>
      <FlatList 
        data={games}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Games item={item} onOpen={openPostHandler}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  }
})