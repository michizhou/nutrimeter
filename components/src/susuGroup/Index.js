import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import percent from 'rnative-percent'

// ALL SUSU GROUP COMPONENTS
import GroupList from './GroupList'
import CreateSusu from './CreateSusu'

class SusuGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      create: false
    }

    this.createSusu = this.createSusu.bind(this)
  }

  render() {
    return (
      <View>
        {this.state.create ? (
          <CreateSusu />
        ) : (
          <View style={styles.groupContainer}>
            <Button
              large
              backgroundColor="#27ae60"
              onPress={this.createSusu}
              icon={{
                name: 'address-book-o',
                type: 'font-awesome',
                color: '#2c3e50'
              }}
              title="Create New Susu"
            />
            <GroupList />
          </View>
        )}
      </View>
    )
  }

  createSusu() {
    this.setState({
      create: true
    })
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    // DIMENSIONS
    marginVertical: percent(3.4)
  }
})

export default SusuGroup
