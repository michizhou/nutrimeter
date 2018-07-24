import React from 'react'
import { StyleSheet, Text, Platform, Image, View } from 'react-native'

export default class Index extends React.Component {
  state = { currentUser: null }
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
