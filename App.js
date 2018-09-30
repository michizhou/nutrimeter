import App from './components/Index'
import { apiKey, authDomain, databaseURL } from 'react-native-dotenv'
import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL
}

firebase.initializeApp(firebaseConfig)

export default App
