/* 
  DEAR ME OF THE FUTURE,

  You are doing pretty well, now you are missing the following:

  * Better Styling everywhere
  * Date Selection ( SHOULD LOOK FANCY )
  * Member Selection ( SHOULD LOOK FANCY ) => Look for members in the members collection or add them to guess otherwise
  * Save to database * ONLY WHEN CONFIRMED AND DIGITALLY SIGNED *
*/

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
      title: '',
      amount: 0,
      members: [],
      cycles: 0
    }

    // BINDING FOR FUNCTIONS
    this._onNext = this._onNext.bind(this)
    this._onBack = this._onBack.bind(this)
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
                value={this.state.title}
                onChangeText={input => this._onInput(input, 'title')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel>Amount</FormLabel>
              <FormInput
                value={`${this.state.amount}`}
                onChangeText={input => this._onInput(input, 'amount')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel>Cycles</FormLabel>
              <FormInput
                value={`${this.state.cycles}`}
                onChangeText={input => this._onInput(input, 'cycles')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel>Members</FormLabel>
              <FormInput
                value={this.state.members}
                onChangeText={input => this._onInput(input, 'members')}
              />
            </View>

            <View style={styles.formBox}>
              <FormLabel>Start</FormLabel>
              <FormInput
                // value={this.state.title}
                onChangeText={console.log('KLK')}
              />
            </View>
          </View>
        )}
      </View>
    )
  }

  displayModal() {
    const { next } = this.state
    const questions = [
      { name: 'SUSU Title', current: 'title' },
      { name: 'Amount', current: 'amount' },
      { name: 'Cycles', current: 'cycles' },
      { name: 'Members', current: 'members' }
    ]

    // WHILE THE QUESTIONS ARE NOT OVER
    if (next < questions.length) {
      const current = questions[next].current
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
              <Text>{questions[next].name}</Text>
              <View style={styles.formBox}>
                <FormLabel>{current}</FormLabel>
                <FormInput
                  // containerStyle={{ width: 25, padding: 0 }}
                  value={`${this.state[current]}`}
                  onChangeText={input => this._onInput(input, current)}
                />
              </View>

              <TouchableHighlight onPress={this._onNext}>
                <Text>Next</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this._onBack}>
                <Text>Back</Text>
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

export default CreateSusu
