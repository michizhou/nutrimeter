import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import percent from 'rnative-percent'

// ALL SUSU GROUP COMPONENTS
import GroupList from './GroupList'

class SusuGroup extends Component {
  render() {
    return (
      <View style={styles.groupContainer}>
        <Button
          large
          backgroundColor="#27ae60"
          icon={{
            name: 'address-book-o',
            type: 'font-awesome',
            color: '#2c3e50'
          }}
          title="Create New Susu"
        />
        <GroupList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    // DIMENSIONS
    marginVertical: percent(3.4)
  }
})

export default SusuGroup
