import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class callingAniamtion extends Component {
    render(){
        return(
            <View style={{flex:1}}>
              <View style={{height:142,backgroundColor:"#DD455D"}}>
                
              </View>
              <Agenda
  items={{
    '2012-05-22': [{name: 'item 1 - any js object'}],
    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
    '2012-05-24': [],
    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  }}
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  onCalendarToggled={(calendarOpened) => {console.warn(calendarOpened)}}
  onDayPress={(day)=>{console.warn(day,'day pressed')}}
  onDayChange={(day)=>{console.warn('day changed')}}
  pastScrollRange={10}
  futureScrollRange={10}
  renderItem={(item, firstItemInDay) => {return (<View />);}}
  renderDay={(day, item) => {return (<View />);}}
  renderEmptyDate={() => {return (<View />);}}
  renderKnob={() => {
      return (
                <View 
                style={{marginTop:5,height:2,width:30,backgroundColor:"lightgrey"}}
                />
                );
            }
         }
  
          renderEmptyData = {() => {return (<View />);}}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          hideKnob={false}
          disabledByDefault={false}
          onRefresh={() => console.log('refreshing...')}
          refreshing={false}
          refreshControl={null}
          theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'yellow',
            calendarBackground:"#DD455D"
          }}
          // Agenda container style
          // style={{marginTop:40}}
            />
            <View style = {{flex:1}}></View>
            </View>

        );
    }
}