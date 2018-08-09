import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import percent from 'rnative-percent'

export default class NavBoxes extends Component {
  render() {
    return (
      <View style={styles.mainNav}>
        <Card title="Susu">
          <Icon
            reverse
            name="account-multiple-plus"
            type="material-community"
            color="#517fa4"
            containerStyle={styles.icon}
            onPress={() => this.props.navigate(this.props.susuGroup)}
          />
          <Text style={styles.desc}>Manage Your Susu Group</Text>
        </Card>

        <Card title="Make Deposit">
          <Icon
            reverse
            name="currency-usd"
            type="material-community"
            color="#517fa4"
            containerStyle={styles.icon}
            onPress={() => this.props.navigate(this.props.deposit)}
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
            onPress={() => this.props.navigate(this.props.account)}
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
    flexDirection: 'column',
    justifyContent: 'center',
    height: percent(85)
  },

  desc: {
    // marginBottom: 5,
    textAlign: 'center'
  },

  icon: {
    alignSelf: 'center'
  }
})
