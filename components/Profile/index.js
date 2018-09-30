import React from 'react'
import percent from 'rnative-percent'
import { View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { database } from 'firebase'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      age: 0,
      gender: '',
      goal: 0,
      weight: 0
    }
  }

  componentDidMount() {
    const users = database().ref('users/user1')

    users.on('value', data => {
      this.setState({
        username: data.val().username,
        age: data.val().age,
        gender: data.val().gender,
        goal: data.val().goal,
        weight: data.val().weight
      })
    })
  }

  render() {
    const { username, age, gender, goal, weight } = this.state
    const list = [
      {
        title: username,
        icon: 'person-pin'
      },
      {
        title: gender,
        icon: 'people-outline'
      },

      {
        title: age,
        icon: 'nature-people'
      },

      {
        title: weight,
        icon: 'settings-input-svideo'
      },

      {
        title: goal,
        icon: 'track-changes'
      }
    ]

    return (
      <View>
        <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 20 }}>
          Profile
        </Text>
        <List
          containerStyle={{
            justifyContent: 'center',
            height: percent(80)
          }}
        >
          {list.map((item, key) => (
            <ListItem
              key={key}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </List>
      </View>
    )
  }
}

export default Profile
