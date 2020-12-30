import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {fetchLobbiesActionCreator} from '../store/actions/lobbies'
import { Games } from '../components/Games/Games'

export const GamesScreen = ({navigation}) => {
  const {loading, success, lobbies} = useSelector(state => ({
    loading: state.lobbies.get.loading,
    success: state.lobbies.get.success,
    lobbies: state.lobbies.list,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if(lobbies.length === 0) {
      dispatch(fetchLobbiesActionCreator())
    }
  }, [lobbies.length])
  // const [games, setGames] = useState([])
  const openPostHandler = item => {
    navigation.navigate('GameCard', { itemId: item.id })
  }
  return (
    <View style={styles.block}>
      {
        loading ? 
          <View style={styles.loading}></View> :
          <FlatList 
            data={lobbies}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Games item={item} onOpen={openPostHandler}/>}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  loading: {
    justifyContent: 'center',
    borderWidth: 5, 
    borderStyle: 'solid',
    borderColor: '#000',
    // border-top: 16px solid #888282, 
    borderRadius: 50,
    width: 50,
    height: 50,
  }
})