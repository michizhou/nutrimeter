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
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <NavBoxes />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  }
})
