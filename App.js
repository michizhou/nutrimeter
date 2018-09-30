import App from './components/Index'
import config from './config'

import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL
}

firebase.initializeApp(firebaseConfig)

export default App
