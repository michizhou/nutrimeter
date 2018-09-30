import React from 'react'
import percent from 'rnative-percent'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
import { database } from 'firebase'

import axios from 'axios'

export default class CameraComponent extends React.Component {
  constructor(props) {
    super(props)

    // Function Contructors
    this.takePicture = this.takePicture.bind(this)
    this.uploadPicture = this.uploadPicture.bind(this)
  }

  // Initial States of the app
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    submit: false
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted',
      textData: ''
    })
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => (this.camera = ref)}
            style={{ height: percent(100), alignSelf: 'flex-end' }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center'
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  })
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                >
                  {' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // PROPERTIES
                  backgroundColor: '#428bca',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'center',

                  // DIMENSIONS
                  padding: 8,
                  paddingBottom: percent(15),
                  borderRadius: 100,
                  width: percent(100, 'width')
                }}
                onPress={() => {
                  this.takePicture()
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    color: '#fa983a'
                  }}
                >
                  Track Nutrition
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
  }

  async takePicture() {
    if (this.camera) {
      let picture = await this.camera.takePictureAsync()

      this.setState({
        pic: picture
      })

      this.uploadPicture()
    }
  }

  uploadPicture() {
    const url = 'https://dd226c54.ngrok.io/recognize'

    const form = new FormData()

    form.append('recognize', {
      uri: this.state.pic.uri,
      type: 'image/jpeg',
      name: 'image.jpeg'
    })

    axios
      .post(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      .then(res => {
        const data = res.data
        database()
          .ref('users/user1')
          .set({
            calories: data.calories,
            carbs: data.carbs,
            fat: data.fat,
            name: data.name,
            protein: data.protein
          })
      })
      .catch(err => console.log(err))
  }
}
