import React from 'react'
import { Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

class History extends React.Component {
  handlePress(day) {
    this.setState({ selected: day.selected === false })
  }
  render() {
    return (
      <View style={{height: 170}}>
        <Agenda
          onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        />
      </View>  
    )
  }
}

export default History