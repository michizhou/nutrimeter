import React from 'react'
import {
  StyleSheet,
  Text,
  Platform,
  Image,
  View,
  Dimensions
} from 'react-native'
import { auth } from 'firebase'

// Navigation
import NavBoxes from './navigation/NavBoxes'

export default class Index extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = auth()
    this.setState({ currentUser })
  }

  render() {
    const { navigate } = this.props.navigation
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <NavBoxes
          navigate={navigate}
          account="Account"
          susuGroup="SusuGroup"
          deposit="Deposit"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    height: Dimensions.get('window').height
  }
})
