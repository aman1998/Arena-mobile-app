import React from 'react'
import { Button, TextInput, View, StyleSheet, Text, ImageBackground, Alert} from 'react-native'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { fetchLoginActionCreator2 } from "../store/actions/profile";

const getAlert = () =>
    Alert.alert(
      "Ошибка входа",
      "Неверный номер или пароль",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
 export const SignUp = props => {
  const dispatch = useDispatch()

 return (
  <Formik
    initialValues={{ 
      phone: '',
      password: ''
    }}
    onSubmit={values => {
      console.log(values)
      dispatch(fetchLoginActionCreator2(values, getAlert))
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
        <View style={styles.inputsWrapper}>
          <TextInput
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            style={styles.inputs}
            placeholder='996555112233'
          />
        </View>
        <Text>Введите пароль</Text>
        <View style={styles.inputsWrapper}>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.inputs}
            placeholder='пароль'
          />
        </View>
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
   inputsWrapper: {
    borderColor: '#000',
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8
   },
   inputs: {
     width: 200,
    // borderRadius: 10,
   },
   image: {
     width: 50,
     height: 50,
     overflow: 'hidden'
   }, 
   err: {
     fontSize: 14,
     marginBottom: 8
   }
 })