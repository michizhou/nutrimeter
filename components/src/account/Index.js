import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'

class Account extends Component {
  render() {
    const { goBack } = this.props.navigation

    return (
      <View>
        <Text>HI FROM Account</Text>
      </View>
    )
  }
}

export default Account
