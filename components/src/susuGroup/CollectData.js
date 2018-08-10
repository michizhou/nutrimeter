import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Modal, Text } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

class CollectData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      next: 0
    }

    // BINDING FOR FUNCTIONS
    this._onNext = this._onNext.bind(this)
    this._onBack = this._onBack.bind(this)
  }
  render() {
    const { next } = this.state
    const questions = [
      { name: 'SUSU Title', current: 'title' },
      { name: 'Amount', current: 'amount' },
      { name: 'Cycles', current: 'cycles' },
      { name: 'Members', current: 'members' }
    ]

    if (next < questions.length) {
      const current = questions[next].current
      return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>{questions[next].name}</Text>
              <View style={styles.formBox}>
                <FormLabel>{current}</FormLabel>
                <FormInput
                  // containerStyle={{ width: 25, padding: 0 }}
                  value={`${this.props[current]}`}
                  onChangeText={input => this._onInput(input, current)}
                />
              </View>

              <TouchableHighlight onPress={this._onNext}>
                <Text>Next</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this._onBack}>
                <Text>Back</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.activeModal()}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )
    }

    return (
      // DONE WITH ANSWERING THE QUESTIONS
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <View style={{ marginTop: 22 }}>
          <TouchableHighlight onPress={() => this.props.activeModal()}>
            <Text>Done</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }

  // WILL ADD THE INPUT TO THE STATE
  _onInput(input, current) {
    this.props._onInput(input, current)
  }

  // WILL UPDATE FOR NEXT ITERATION
  _onNext() {
    const { next } = this.state
    this.setState({ next: next + 1 })
  }

  // WILL UPDATE FOR Previous ITERATION
  _onBack() {
    const { next } = this.state
    this.setState({ next: next - 1 })
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

export default CollectData
