import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },

  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  }
]

class SusuGroup extends Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>

        <Text style={styles.groupHeading}>Current Susu: {list.length}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupHeading: {
    textAlign: 'center',
    marginVertical: 5
  }
})

export default SusuGroup
