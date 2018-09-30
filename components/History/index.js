import React from 'react'
import { Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

class History extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markedDates:{
         
        }
    }
  }

  markDays= (day) =>{
    console.log('happening')
    selectedDay = day.dateString;
    if (selectedDay in this.state.markedDates)
    {
      let newState = {...this.state.markedDates};
      delete newState[selectedDay];
      this.setState({markedDates: newState});
    } else{
      this.setState({markedDates: {...this.state.markedDates,
        [selectedDay]: {
          textColor: '#fff',
          selected: true,
          color: 'green',
          startingDay: true,
          endingDay: true,
        }
      }
     }, () => {console.log(this.state.markedDates)} );
    }
  }
  render() {
    return (
      <View style={{height: 170}}>
        <Agenda
          onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
          theme={{
            backgroundColor: '#ffffff',
            //calendarBackground: '#ffffff',
            //textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: 'blue',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            monthTextColor: 'blue',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          onDayPress={this.markDays}
          hideKnob={true}
          markedDates={this.state.markedDates}
          markingType={'period'}
        />
      </View>  
    )
  }
}

export default History