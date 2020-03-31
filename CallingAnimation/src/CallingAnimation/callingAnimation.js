import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from '../React-Native-CalendarEdit';
import moment from 'moment'

 
export default class callingAniamtion extends Component {
  
  constructor(props){
    super(props);
    this.state={
      updateMonth : moment().format("MMMM"),
      updateDate : moment().format('dddd DD, YYYY')
      
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 142, backgroundColor: "#DD455D" }}>
            <Text style={{fontSize:25,marginTop:70,marginLeft:15,color:"white",fontWeight:"bold"}}>
              {this.state.updateMonth}
            </Text>
            <Text style={{fontSize:20,marginLeft:15,color:'white'}}>
              {this.state.updateDate}
            </Text>
        </View>
        <Agenda
          // The list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key has to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={{
            '2012-05-22': [{ name: 'item 1 - any js object' }],
            '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
            '2012-05-24': [],
            '2012-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={(month) => { console.log('trigger items loading') }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
          // Callback that gets called on day press
          onDayPress={(day) => { console.warn(day.day) }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={(day) => { console.warn('day changed') }}
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => { return (<View />); }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => { return (<View />); }}
          // Specify how empty date content with no items should be rendered
          renderEmptyDate={() => { return (<View />); }}
          // Specify how agenda knob should look like
          renderKnob={() => { return (<View style={{ width: 30, height: 2, marginTop: 5, backgroundColor: "lightgrey" }} />); }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => { return (<View />); }}
          // Specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2012-05-16': { selected: true, marked: true },
            '2012-05-17': { marked: true },
            '2012-05-18': { disabled: true }
          }}
          
          disabledByDefault={false}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // Agenda theme
          theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
          }}
          // Agenda container style
          style={{}}
        />

        <View style = {{flex:1}}></View>

      </View>

    );
  }
}

