import React, {useState} from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { COLORS } from '../assets/colors/colors'
import { setOneLobbyActionCreator } from "../store/actions/lobbies"

export const GameCardScreen = ({navigation}) => {
  const itemId = navigation.getParam('itemId')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [lobby, setLobby] = React.useState({
    date: '0000-00-00T00:00:00+06:00'
  })
  const { profile } = useSelector(state => ({
    profile: state.profile.myProfile
  }))

  const getAlert = () => {
    if(profile.balance >= lobby.price) {
      Alert.alert(
        "Подтверждение",
        'Вы уверены?',
        [
          {
            text: "Нет",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Да", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
    else {
      Alert.alert(
        "Ошибка",
        'На вашем счету недостаточно средств',
        [
          {
            text: "Хорошо",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      )
    }
  }
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log(lobby)
    console.log(profile)
    dispatch(setOneLobbyActionCreator(itemId, setLobby, setLoading, setSuccess, setFailed))
  }, [itemId])

  return (
    <View style={styles.block}>
      {
        loading ? 
          <View style={styles.loading}></View> :
          <View>
            <ImageBackground 
              style={styles.image}
              source={{uri: lobby.image}}
            />
            <View style={styles.info}>
              <Text style={styles.text}><Text style={styles.textBold}>Карта:</Text> {lobby.map}</Text>
              <Text style={styles.text}>{lobby.date}</Text>
              <Text style={styles.text}><Text style={styles.textBold}>Стоимость участия:</Text> {lobby.price}</Text>
              <Text style={styles.text}><Text style={styles.textBold}>Стоимость килла:</Text> {lobby.kill_award}</Text>
            </View>
            <TouchableOpacity 
              style={styles.btnWrapper}
              onPress={getAlert}
              >
              <View style={styles.btn}>
                <Text>Вступить</Text>
              </View>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  image: {
    width: '100%',
    height: 200
  },
  info: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 8
  },
  textBold: {
    fontWeight: 'bold'
  },
  btnWrapper: {
    marginTop: 8,
    alignItems: 'center'
  },
  btn: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center'
  }
})