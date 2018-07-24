import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Main from './components/Index.js'
import Loading from './components/authentication/Loading'
import SignUp from './components/authentication/Signup'
import Login from './components/authentication/Login'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
