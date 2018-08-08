import React, { Component } from 'react'
import { View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import firebase from 'firebase'

// import the different screens
import MainApp from './components/StackNavigation'
import Loading from './components/authentication/Loading'
import SignUp from './components/authentication/Signup'
import Login from './components/authentication/Login'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDRGm7NkGECZDcTO06WW3iMONfx94P8gq4',
  authDomain: 'susu-prototype.firebaseapp.com',
  databaseURL: 'https://susu-prototype.firebaseio.com'
}

firebase.initializeApp(firebaseConfig)

// create our app's navigation stack
const AppAuthentication = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    MainApp
  },
  {
    initialRouteName: 'Loading'
  }
)

export default AppAuthentication
