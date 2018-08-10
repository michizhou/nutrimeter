/* 
  DEAR ME OF THE FUTURE,

  You are doing pretty well, now you are missing the following:

  * Better Styling everywhere
  * Date Selection ( SHOULD LOOK FANCY )
  * Member Selection ( SHOULD LOOK FANCY ) => Look for members in the members collection or add them to guess otherwise
  * Save to database * ONLY WHEN CONFIRMED AND DIGITALLY SIGNED *
*/

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

// COLLECT DATA MODAL
import CollectData from './CollectData'

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

    this.activeModal = this.activeModal.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  render() {
    return (
      <View style={styles.createSusu}>
        {this.state.modalVisible ? (
          <CollectData
            title={this.state.title}
            amount={this.state.amount}
            members={this.state.members}
            cycles={this.state.cycles}
            _onInput={this._onInput}
            activeModal={this.activeModal}
            modalVisible={this.state.modalVisible}
          />
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

  _onInput(input, current) {
    this.setState({ [current]: input })
  }

  activeModal() {
    this.setState({ modalVisible: false })
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
