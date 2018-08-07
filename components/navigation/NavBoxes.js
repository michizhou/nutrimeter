import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Icon } from 'react-native-elements'

/*
  * ADD navigation for the user clicks on any of the boxes
    the box will redirect the user to the corresponding link.

    - Will receive the components to redirect to as props

  * Add color interaction to the icon being press
*/

export default class NavBoxes extends Component {
  render() {
    return (
      <View style={styles.mainNav}>
        <Card title="Organize">
          <Icon
            reverse
            name="account-multiple-plus"
            type="material-community"
            color="#517fa4"
            containerStyle={styles.icon}
          />
          <Text style={styles.desc}>Create a new Susu Group</Text>
        </Card>

        <Card title="Make Deposit">
          <Icon
            reverse
            name="currency-usd"
            type="material-community"
            color="#517fa4"
            containerStyle={styles.icon}
          />
          <Text style={styles.desc}>Make a deposit to a group</Text>
        </Card>

        <Card title="My Account">
          <Icon
            reverse
            name="home-account"
            type="material-community"
            color="#517fa4"
            containerStyle={styles.icon}
          />
          <Text style={styles.desc}>Visit your Susu account</Text>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainNav: {
    display: 'flex',
    flexDirection: 'column'
  },

  desc: {
    marginBottom: 5,
    textAlign: 'center'
  },

  icon: {
    alignSelf: 'center'
  }
})
