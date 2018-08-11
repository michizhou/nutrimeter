import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Modal } from 'react-native'
import { FormInput, FormValidationMessage, Text } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import percent from 'rnative-percent'

class CollectData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      next: 0,
      done: false,
      error: false
    }

    // BINDING FOR FUNCTIONS
    this._onNext = this._onNext.bind(this)
    this._onBack = this._onBack.bind(this)
    this._onDone = this._onDone.bind(this)
    this._onClosed = this._onClosed.bind(this)
  }

  render() {
    const { next } = this.state
    const questions = [
      { name: 'SuSu Title', current: 'title' },
      { name: 'Amount', current: 'amount' },
      { name: 'Cycles', current: 'cycles' },
      { name: 'Members', current: 'members' },
      { name: 'Starting Date', current: 'startDate' }
    ]

    if (next < questions.length) {
      const current = questions[next].current
      const today = new Date().toLocaleDateString()

      return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.dataModal}>
            <View>
              <Text h2 style={styles.mainText}>
                {questions[next].name}
              </Text>

              <View style={styles.formBox}>
                {current !== 'startDate' ? (
                  <FormInput
                    inputStyle={{ textAlign: 'center' }}
                    value={`${this.props[current]}`}
                    onChangeText={input => this._onInput(input, current)}
                  />
                ) : (
                  <DatePicker
                    style={{
                      width: 200,
                      marginVertical: 7
                    }}
                    date={this.props.startDate}
                    mode="date"
                    placeholder="select date"
                    format="MM-DD-YYYY"
                    minDate={today}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={date => this._onInput(date, current)}
                  />
                )}
              </View>

              <FormValidationMessage>
                {this.state.error ? '* This field is required' : ''}
              </FormValidationMessage>

              <View style={styles.options}>
                <TouchableHighlight onPress={this._onBack}>
                  <Text>Back</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onClosed}>
                  <Text>Close</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this._onNext(current)}>
                  <Text>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      )
    }

    return (
      // DONE WITH ANSWERING THE QUESTIONS
      <View style={styles.dataModal}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.dataModal}>
            <TouchableHighlight
              onPress={this._onDone}
              style={styles.doneCircle}
            >
              <Text h2 style={styles.completeText}>
                Done
              </Text>
            </TouchableHighlight>

            <View style={styles.options}>
              <TouchableHighlight onPress={this._onBack}>
                <Text>Back</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this._onClosed}>
                <Text>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  _onDone() {
    this.setState({ done: true })
    this.props.activeModal()
  }

  // WILL ADD THE INPUT TO THE STATE
  _onInput(input, current) {
    this.props._onInput(input, current)
  }

  // WILL UPDATE FOR NEXT ITERATION
  _onNext(current) {
    const input = this.props[current]

    if (input <= 0 || input === '') {
      this.setState({ error: true })
    } else {
      const { next } = this.state
      this.setState({ next: next + 1, error: false })
    }
  }

  // WILL UPDATE FOR Previous ITERATION
  _onBack() {
    const { next } = this.state

    if (next > 0 || this.state.done) {
      this.setState({ next: next - 1 })
    }
  }

  _onClosed() {
    if (this.state.done) {
      this.props.activeModal()
    }
    this.props.goBack()
  }
}

const styles = StyleSheet.create({
  formBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  mainText: {
    color: '#636e72',
    textAlign: 'center'
  },
  completeText: {
    color: '#fff',
    textAlign: 'center'
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // DIMENSIONS
    width: percent(30),
    alignSelf: 'center'
  },
  dataModal: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    height: percent(90)
  },
  doneCircle: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#27ae60',
    alignSelf: 'center',
    height: percent(9),
    width: percent(30, 'width'),
    shadowColor: 'red'
  }
})

export default CollectData
