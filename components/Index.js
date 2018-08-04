import React from 'react'
import { StyleSheet, Text, Platform, Image, View } from 'react-native'

import { auth } from 'firebase'

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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
