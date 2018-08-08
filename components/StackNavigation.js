import { createStackNavigator } from 'react-navigation'

// IMPORT MAIN NAVIGATION COMPONENTS
import Account from './src/account/Index'
import SusuGroup from './src/susuGroup/Index'
import Deposit from './src/deposit/Index'
import Main from './Index.js'

const AppStackNav = createStackNavigator(
  {
    Account,
    SusuGroup,
    Deposit,
    Main
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNav
