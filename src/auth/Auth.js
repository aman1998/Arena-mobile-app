import React from 'react'
import { Button, TextInput, View, StyleSheet, Text, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { Formik, ErrorMessage } from 'formik'
import { COLORS } from '../assets/colors/colors'
import * as Yup from 'yup'
import * as SecureStore from 'expo-secure-store'
import axios from '../axios/axios'
import { fetchProfileActionCreator2, fetchLoginActionCreator2 } from "../store/actions/profile";

// const setToken = async (token) => {
//   await SecureStore.setItemAsync('secure_token', token);
// };

// const getToken = async () => {
//   return await SecureStore.getItemAsync('secure_token');
// };

// setToken('#your_secret_token');
// getToken().then(token => console.log(token)); 
 export const Auth = props => {
  const dispatch = useDispatch()
 return (
  <Formik
    initialValues={{ 
      phone: '',
      password: '' 
    }}
    validationSchema={
      Yup.object().shape({
        password: Yup.string()
          .min(6, 'Введите не меньше 6 цифр')
          .required('Это поле обязательно!'),
      })
    }
    onSubmit={values => {
      console.log(values)
      dispatch(fetchLoginActionCreator2(values))
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.block}>
        <ImageBackground 
        source={require('../assets/images/logo.png')}
        style={styles.image} 
        />
        <Text style={styles.title}>Добро пожаловать в ArenaGames!</Text>
        <Text>Введите телефон</Text>
        <TextInput
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          style={styles.inputs}
        />
        <Text>Введите пароль</Text>
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          style={styles.inputs}
        />
         <ErrorMessage name="password" style={styles.err}/>
        <Button onPress={handleSubmit} title="Submit" style={styles.btn, {marginTop: 8}} />
        <Text style={{marginTop: 8}}>Не зарегистрированы?</Text>
      </View>
    )}
  </Formik>
 )
 };

 const styles = StyleSheet.create({
   block: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   btn: {
     width: '50%',
     marginBottom: 8
   },
   title: {
    marginTop: 8,
    marginBottom: 8
   },
   inputs: {
     width: 200,
    // borderRadius: 10,
     borderColor: '#000',
     borderBottomWidth: 1,
     borderStyle: COLORS.SECOND_COLOR,
     marginTop: 8,
     marginBottom: 8
   },
   image: {
     width: 50,
     height: 50,
     overflow: 'hidden'
   }, 
   err: {
     fontSize: 14,
     color: '',
     marginBottom: 8
   }
 })