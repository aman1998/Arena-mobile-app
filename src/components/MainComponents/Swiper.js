import React from 'react'
import { Text, Dimensions, ImageBackground, StyleSheet, View, Button } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'

export const Swiper = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList 
        autoplay
        autoplayDelay={4} 
        autoplayLoop 
        index={2} 
        showPagination>
        <View style={[styles.block]}>
          <ImageBackground
            style={styles.images} 
            // imageStyle={{ borderRadius: 10 }} 
            source={require('../../assets/images/pubg-slide1.jpg')} />
          {/* <Text style={styles.title}>Оставь свой след</Text> */}
        </View>
        <View style={[styles.block,]}>
          <ImageBackground 
            style={styles.images} 
            // imageStyle={{ borderRadius: 10}} 
            source={require('../../assets/images/pubg-slide2.jpg')} />
          {/* <Text style={styles.title}>Соревнуйся и выигрывай</Text> */}
        </View>
        <View style={[styles.block]}>
          <ImageBackground 
            style={styles.images} 
            // imageStyle={{ borderRadius: 10}} 
            source={require('../../assets/images/pubg-slide3.jpg')} />
          {/* <Text style={styles.title}>Стань лучшим</Text> */}
        </View>
        <View style={[styles.block]}>
          <ImageBackground 
            style={styles.images} 
            // imageStyle={{ borderRadius: 10 }} 
            source={require('../../assets/images/pubg-slide4.jpg')} />
          {/* <Text style={styles.title}>Побеждай красиво</Text> */}
        </View>
      </SwiperFlatList>
    </View>
  )
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  },
  block: {
    height: 200,
    width,
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  images: {
    height: '100%',
    width: '100%',
    height: 200,
    overflow: 'hidden',
    opacity: 0.9
  }
});