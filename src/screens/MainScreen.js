import React from 'react'
import { Text, Dimensions, Image, StyleSheet, View, Button, ScrollView } from 'react-native'
import { HeaderIcon } from '../assets/icons/HeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Swiper } from '../components/MainComponents/Swiper'
import { Info1 } from '../components/MainComponents/Info-1'
import { Info2 } from '../components/MainComponents/Info-2'

export const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Swiper />
        <Info1 />
        <Info2 />
      </View>
    </ScrollView>
  );
}

// MainScreen.navigationOptions = ({navigation}) => ({
//   headerLeft: (
//     <HeaderButtons HeaderButtonComponent={HeaderIcon}>
//       <Item 
//         title='Toggle Drawer' 
//         iconName='ios-menu'
//         onPress={() => navigation.toggleDrawer()}
//         />
//     </HeaderButtons>
//   )
// })

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});