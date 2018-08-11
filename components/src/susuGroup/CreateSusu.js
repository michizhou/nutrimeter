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
  FormValidationMessage,
  Button
} from 'react-native-elements'

// COLLECT DATA MODAL
import CollectData from './CollectData'
import percent from 'rnative-percent'

class CreateSusu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
      next: 0,
      title: '',
      amount: 0,
      members: [],
      cycles: 0,
      startDate: ''
    }

    this.activeModal = this.activeModal.bind(this)
    this._onInput = this._onInput.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
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
            startDate={this.state.startDate}
            goBack={this.props.goBack}
          />
        ) : (
          <View>
            <View style={styles.formBox}>
              <FormLabel labelStyle={styles.formLabel}>Title</FormLabel>
              <FormInput
                inputStyle={styles.formInput}
                value={this.state.title}
                onChangeText={input => this._onInput(input, 'title')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel labelStyle={styles.formLabel}>Amount</FormLabel>
              <FormInput
                inputStyle={styles.formInput}
                value={`${this.state.amount}`}
                onChangeText={input => this._onInput(input, 'amount')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel labelStyle={styles.formLabel}>Cycles</FormLabel>
              <FormInput
                inputStyle={styles.formInput}
                value={`${this.state.cycles}`}
                onChangeText={input => this._onInput(input, 'cycles')}
              />
            </View>
            <View style={styles.formBox}>
              <FormLabel labelStyle={styles.formLabel}>Members</FormLabel>
              <FormInput
                inputStyle={styles.formInput}
                value={this.state.members}
                onChangeText={input => this._onInput(input, 'members')}
              />
            </View>

            <View style={styles.formBox}>
              <FormLabel labelStyle={styles.formLabel}>Start Date</FormLabel>
              <FormInput
                inputStyle={styles.formInput}
                value={this.state.startDate}
                onChangeText={input => this._onInput(input, 'startDate')}
              />
            </View>

            <Button
              buttonStyle={styles.confirmButton}
              large
              icon={{ name: 'send-secure', type: 'material-community' }}
              title="Confirm"
              onPress={this._onSubmit}
            />
          </View>
        )}
      </View>
    )
  }

  _onSubmit() {
    console.log(this.state)
    this.props.goBack()
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
    backgroundColor: '#fff',
    height: percent(100)
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  formLabel: {
    textAlign: 'center',
    fontSize: 20
  },
  formInput: {
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center'
  },
  confirmButton: {
    backgroundColor: '#27ae60',
    marginTop: percent(6)
  }
})

export default CreateSusu
