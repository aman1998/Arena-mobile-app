import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native'
import {getJustDate, getJustTime} from "../../axios/dateFormatter"

export const Games = ({item, onOpen}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
      <View style={styles.block}>
        <View style={styles.content}>
          <ImageBackground 
            source={{uri: item.image}} 
            style={styles.image} 
            imageStyle={{ borderRadius: 10 }}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{getJustTime(item.date)}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>{getJustDate(item.date)}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>Вступили {item.player_list.length}/100</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => onOpen(item)}>
            <Text style={{color: '#000'}}>Подробнее</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  content: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    // opacity: 0.6
  },
  textWrapper: {
    paddingVertical: 5,
    position: 'absolute',
    top: 10,
    left: 10
  },
  info: {
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F2C00F',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    // fontFamily: 'open-bold',
  },
  title: {
    // fontFamily: 'open-bold'
  }
})