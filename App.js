import { createSwitchNavigator } from 'react-navigation'
import firebase from 'firebase'

// import the different screens
import Main from './components/Index.js'
import Loading from './components/authentication/Loading'
import SignUp from './components/authentication/Signup'
import Login from './components/authentication/Login'

// IMPORT MAIN NAVIGATION COMPONENTS
import Account from './components/src/account/Index'
import SusuGroup from './components/src/susuGroup/Index'
import Deposit from './components/src/deposit/Index'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDRGm7NkGECZDcTO06WW3iMONfx94P8gq4',
  authDomain: 'susu-prototype.firebaseapp.com',
  databaseURL: 'https://susu-prototype.firebaseio.com'
}

firebase.initializeApp(firebaseConfig)

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    Account,
    SusuGroup,
    Deposit
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
