import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Modal, Text } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

class CreateSusu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
      next: 0,
      name: '',
      amount: '',
      members: [],
      cycles: 0
    }
  }

  render() {
    return (
      <View style={styles.createSusu}>
        {this.state.modalVisible ? (
          this.displayModal()
        ) : (
          <View>
            <View style={styles.formBox}>
              <FormLabel>Title</FormLabel>
              <FormInput
                containerStyle={{ width: 25, padding: 0 }}
                onChangeText={console.log('KLK')}
              />
            </View>

            <FormLabel>Amount</FormLabel>
            <FormInput onChangeText={console.log('KLK')} />

            <FormLabel>Cycles</FormLabel>
            <FormInput onChangeText={console.log('KLK')} />

            <FormLabel>Members</FormLabel>
            <FormInput onChangeText={console.log('KLK')} />

            <FormLabel>Start</FormLabel>
            <FormInput onChangeText={console.log('KLK')} />
          </View>
        )}
      </View>
    )
  }

  displayModal() {
    const { next } = this.state
    const data = [
      { name: 'What your name', current: 'name' },
      { name: 'Where are you from?', current: 'amount' },
      { name: 'KLK manin' }
    ]

    // WHILE THE QUESTIONS ARE NOT OVER
    if (next < data.length) {
      const current = data[next].current
      return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Here {data[next].name}</Text>
              <View style={styles.formBox}>
                <FormLabel>Title</FormLabel>
                <FormInput
                  // containerStyle={{ width: 25, padding: 0 }}
                  value={this.state[current]}
                  onChangeText={input => this._onInput(input, current)}
                />
              </View>

              <TouchableHighlight
                onPress={() => this.setState({ next: next + 1 })}
              >
                <Text>Next</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.setState({ modalVisible: false })}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )
    }

    // DONE WITH ANSWERING THE QUESTIONS
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <View style={{ marginTop: 22 }}>
          <TouchableHighlight
            onPress={() => this.setState({ modalVisible: false })}
          >
            <Text>Done</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }

  // WILL ADD THE INPUT TO THE STATE
  _onInput(input, current) {
    this.setState({ [current]: input })
  }

  // WILL UPDATE FOR NEXT ITERATION
  _onNext() {
    this.setState({ next: next + 1 })
  }
}

const styles = StyleSheet.create({
  createSusu: {
    backgroundColor: '#fff'
  },
  formBox: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default CreateSusu
