import { Container, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, FlatList,Platform,ScrollView,TouchableOpacity } from 'react-native';
import { MyHeader } from '../component';
import Icons from "../utils/icons"
import RadioGroup from 'react-native-radio-buttons-group';
import {textStyle, color } from '../utils';
import { normalize, vh, vw } from '../utils/Dimension';
import Voice,{SpeechResultsEvent} from '@react-native-community/voice';
import {Calendar} from 'react-native-calendars'
import moment from 'moment'
import _isEmpty from 'lodash.isempty'

//Call animation on Back the screen
//1st screen
// handleOnNavigateBack(commentText) {
//         console.log("BACK", commentText);
//        this.showVehicle()
//     }

// <TouchableOpacity 
//                     style={{alignSelf:"flex-end",borderBottomWidth:1,borderBottomColor:color.green}}
//                     onPress={() => this.props.navigation.navigate(Route.ADD_VEHICLE, {
//                         onNavigateBack: this.handleOnNavigateBack.bind(this)
//                     })}
//                     >

//2nd Screen
// call these lines on the success of any function
// this.props.navigation.state.params.onNavigateBack(this.state.commentText)
//                     this.props.navigation.goBack();

//Multi Selection
// selectFavorite=(index)=>{
//     // console.warn(index);
//     let helperArray = this.state.favoriteArray;
//     let itemIndex = helperArray.indexOf(index);
//     if(helperArray.includes(index)){
//       helperArray.splice(itemIndex,1);
//     }
//     else{
//       helperArray.push(index)
//     }
//     this.setState({favoriteArray:helperArray},()=>console.warn("favoriteArray",this.state.favoriteArray))
//   }

// <TouchableOpacity
//     onPress={()=>this.selectFavorite(_id)}
//     style={{height:vh(30),width:vh(30),justifyContent:"center",alignItems:"center"}}
//     >
//     <Image 
//     source={ this.state.favoriteArray.includes(_id) ? Icons.starLight :  Icons.star} style={{height:vh(17.84),width:vh(16.95)}}/>
// </TouchableOpacity>

// If we need to compare with object of an array then
// <Image source={this.state.favoriteDetails.some(item => item.lot_id._id === _id) ? Icons.starLight :  Icons.star } style={{height:vh(20.19),width:vh(22)}}/>

class TicketIssueScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: {},
            end: {}, 
            period: {},
            dateView:false,
            dateType:"",
            dateSelected: '',
            updateDate : moment().format('YYYY-MM-DD'),
            fromDate:{},
            toDate:{},
            toDate:"",
            calendorView:false,
            recognized: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: '',
            partialResults: [],
            data: [
                {
                    label: 'All',
                    size: normalize(15),
                    color: '#009900',
                    layout: "row"
                    // value: "I'm not same as label",
                },
                {
                    label: 'red',
                    // color: 'green',
                    label: 'Paid',
                    size: normalize(15),
                    color: '#009900',
                    // layout: "row"

                },
                {
                    // disabled: true,
                    // label: 'Disabled',
                    label: 'Unpaid',
                    size: normalize(15),
                    color: '#009900',
                    // layout: "row"

                },

            ],
            list: [
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "ASD123-CD| Unit 02 | Sep 345|",
                    image: Icons.Ticket,
                },
                {
                    titleRow: "QWE456-CO| ZDTF-97|",
                    image: Icons.Ticket,
                },

            ],
        };
        // Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;

    }
    
    //   onSpeechResults = (e) => {
    //     console.log('onSpeechResults: ', e);
    //     this.setState({
    //       results: e.value,
    //     });
    //   };
    
      onSpeechPartialResults = (e) => {
        console.log('onSpeechPartialResults: ', e);
        this.setState({
            results: e.value,
        });
      };
    
    //   onSpeechVolumeChanged = (e) => {
    //     console.log('onSpeechVolumeChanged: ', e);
    //     this.setState({
    //       pitch: e.value,
    //     });
    //   };
    
      _startRecognizing = async () => {
    
        try {
            console.warn("in try")
          await Voice.start('en-US');
        } catch (e) {
            console.warn("in error")
          console.log(e);
        }
      };
    
    //   _stopRecognizing = async () => {
    //     try {
    //       await Voice.stop();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };
    
    //   _cancelRecognizing = async () => {
    //     try {
    //       await Voice.cancel();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };
    
      _destroyRecognizer = async () => {
        try {
          await Voice.destroy();
        } catch (e) {
          console.error(e);
        }
        this.setState({
          recognized: '',
          pitch: '',
          error: '',
          started: '',
          results: '',
          partialResults: [],
          end: '',
        });
      };

    // onSpeechResults(){
    //     console.warn("val",e);
    //     this.setState({
    //         results:e.value
    //     })
    // }

    // onSpeechResults = (e) => {
    //     console.warn("iii")
    //     console.log('onSpeechResults: ', e);
    //     this.setState({
    //       results: e.value,
    //     });
    //   };

      onSpeechStart(){
          console.warn("hey")
          Voice.start('en-US')

      }

    onPress = data => this.setState({ data });

    getDateString(timestamp) {
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
    
        let dateString = `${year}-`
        if (month < 10) {
          dateString += `0${month}-`
        } else {
          dateString += `${month}-`
        }
        if (day < 10) {
          dateString += `0${day}`
        } else {
          dateString += day
        }
    
        return dateString
      }
    
      getPeriod(startTimestamp, endTimestamp) {
        const period = {}
        let currentTimestamp = startTimestamp
        while (currentTimestamp < endTimestamp) {
          const dateString = this.getDateString(currentTimestamp)
          period[dateString] = {
            color: currentTimestamp === startTimestamp ? '#009900' :"#CFE8CF",
            startingDay: currentTimestamp === startTimestamp,
          }
        //   period[dateString] = {
        //     color: currentTimestamp === startTimestamp ? 'red' :"skyblue",
        //     startingDay: true,
        //   }
          currentTimestamp += 24 * 60 * 60 * 1000
        }
        const dateString = this.getDateString(endTimestamp)
        period[dateString] = {
          color: '#009900',
          endingDay: true,
        }
        return period
      }
    
      setDay(dayObj) {
        const { start, end } = this.state
        const {
          dateString, day, month, year,
        } = dayObj
        // timestamp returned by dayObj is in 12:00AM UTC 0, want local 12:00AM
        const timestamp = new Date(year, month - 1, day).getTime()
        const newDayObj = { ...dayObj, timestamp }
        // if there is no start day, add start. or if there is already a end and start date, restart
        const startIsEmpty = _isEmpty(start)
        if (startIsEmpty || !startIsEmpty && !_isEmpty(end)) {
          const period = {
            [dateString]: {
              color: '#009900',
              endingDay: true,
              startingDay: true,
            },
          }
          this.setState({ start: newDayObj, period, end: {} })
        } else {
          // if end date is older than start date switch
          const { timestamp: savedTimestamp } = start
          if (savedTimestamp > timestamp) {
            const period = this.getPeriod(timestamp, savedTimestamp)
            this.setState({ start: newDayObj, end: start, period })
          } else {
            const period = this.getPeriod(savedTimestamp, timestamp)
            this.setState({ end: newDayObj, start, period })
          }
        }
      }
    

    
    renderCal=()=>{
        return(
            <Calendar
                current={this.state.updateDate}
                // onDayPress={(day) => {console.warn('selected day', day)
                // if(this.state.dateType == "From"){
                //     this.setState({fromDate:day})
                // }
                // else{
                //     this.setState({toDate:day})
                // }
                // }}
                onDayPress={this.setDay.bind(this)}
                markedDates={this.state.period}
                // markedDates={{
                //     [this.state.fromDate.dateString]: {selected: true, selectedColor: '#34abeb',startingDay: true, color: '#50cebb',},
                //     '2020-11-16': {color: '#70d7c7', textColor: 'white'},
                //     '2020-11-17': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                //     '2020-11-18': {color: '#70d7c7', textColor: 'white'},
                //     [this.state.toDate.dateString]: {selected: true, selectedColor: '#226131',endingDay: true, color: '#50cebb',}
                    
                // }}
                markingType={'period'}
                enableSwipeMonths={true}
                />
        );
    }

    renderCalendor=(val)=>{
        // console.warn("val",val)
        this.setState({
            calendorView:true,dateType:val}
            ,()=>this.renderCal())
    }

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <Container>
                <MyHeader
                    left={
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Image source={Icons.Back} style={{ alignSelf: 'center', marginLeft: 10 }} />

                        </TouchableOpacity>
                    }
                />
                <ScrollView
                keyboardShouldPersistTaps="handled"
                >
                <Text style={[textStyle.titleGreen]}>Enforcement</Text>
                <Text
                    style={
                        {
                            fontSize: 17,
                            // fontWeight: '600',
                            marginTop: 10,
                            textAlign: 'center',
                            // marginBottom: 20
                        }
                    }>
                    Tickets Issued
            </Text>
            
             <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 35,
                        paddingHorizontal: 30,
                    }}>
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: '#DADADA',
                            height: 40,
                            borderRadius: 10,
                            alignItems: 'center',
                            paddingLeft: 10,
                            flexDirection: 'row',
                        }}>
                        <Image source={Icons.Search} style={{ height: 15, width: 15, marginRight: 10 }} />

                        <TextInput 
                        onFocus={this._destroyRecognizer}
                        // onBlur={()=>alert('Blur')}
                        placeholder="Search" style={{ flex: 1, paddingHorizontal: 5 }} >
                        {/* {this.state.results.map((result, index) => {
                            return ( */}
                                <Text 
                                // key={`result-${index}`} 
                                style={styles.stat}>
                                {this.state.results}
                                </Text>
                            {/* );
                            })} */}
                        </TextInput>
                        <TouchableOpacity 
                        // onPress={()=>Voice.start('en-US')}
                        onPress={this._startRecognizing}
                        style={{height:"100%",width:vw(30),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Icons.Mic} style={{ height: 12, width: 8 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            // this.props.navigation.navigate(Route.ADD_TICKET_ISSUED);
                        }}
                        style={{
                            paddingHorizontal: 9,
                            borderRadius: 5,
                            marginLeft: 12,
                            justifyContent: 'center',
                            height: 30,
                            backgroundColor: color.green,
                        }}>
                        <Image source={Icons.Arrow} style={{ height: 13, width: 18, }} />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: vw(20),marginTop:vh(20),alignItems:'center'}}>
                    {/* <View>
                        <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
                    </View > */}
                    <TouchableOpacity 
                    onPress={()=>this.setState({dateView:!this.state.dateView})}
                    style={{height:vh(25),justifyContent:"center",alignItems:"center",width:vw(25),marginLeft:vw(5),alignSelf:"flex-end",marginRight:vw(20)}}>
                        <Image source={Icons.filterIcon} style={{height:vh(12),width:vw(17.5)}}/>
                    </TouchableOpacity>
                    

                    {/* <View style={{ padding: 5, flexDirection: 'row' }}>
                        <Image source={Icons.Calender} style={{ height: 18, width: 12, tintColor: '#009900' }} />
                        <Text style={{ color: '#009900', marginLeft: 6, fontWeight: 'bold', fontSize: 13 }}>Date Range</Text>
                    </View> */}

                </View>
                {
                        this.state.dateView ?
                        <View style={{borderColor:"#CCCCCC",borderWidth:1,borderRadius:normalize(5),marginTop:vh(12.62),marginHorizontal:vw(35)}}>
                        <TouchableOpacity 
                        onPress={()=>this.setState({dateView:false})}
                        style={{height:vh(20),marginRight:vw(8),marginTop:vh(6),width:vh(20),justifyContent:"center",alignItems:"center",alignSelf:"flex-end"}}>
                            <Image source={Icons.Cross1} style={{tintColor:color.green,height:vh(10),width:vh(10)}}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center",marginBottom:vh(14)}}>
                        <View style={{marginLeft:vw(9),width:vw(97),borderColor:"#CCCCCC",borderRadius:normalize(5),borderWidth:1,justifyContent:"center",alignItems:"center"}}>
                            <TextInput 
                            placeholder="From"
                            style={{paddingVertical:Platform.OS == "android" ? 0 : 5,width:"100%",paddingLeft:vw(9)}}>
                                <Text>
                                    {this.state.start.dateString}
                                </Text>
                            </TextInput>
                        </View>
                        <Text style={{marginHorizontal:vw(15),fontSize:normalize(13),color:"#8A8A8A"}}>-</Text>
                        <View style={{width:vw(97),borderColor:"#CCCCCC",borderRadius:normalize(5),borderWidth:1,justifyContent:"center",alignItems:"center"}}>
                            <TextInput 
                            placeholder="To"
                            style={{paddingVertical:Platform.OS == "android" ? 0 : 5,width:"100%",paddingLeft:vw(9)}}>
                                <Text>
                                {this.state.end.dateString}
                                </Text>
                            </TextInput>
                        </View>
                        <TouchableOpacity 
                        onPress={()=>this.renderCalendor("From") }
                        style={{height:vh(17.63),width:vw(15.42),marginLeft:vw(9)}}>
                            <Image source={Icons.calendor} style={{height:vh(17.63),width:vw(15.42)}}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity 
                        onPress={()=>this.renderCalendor("To") }
                        style={{height:vh(17.63),width:vw(15.42),marginLeft:vw(9)}}>
                        <Image source={Icons.calendor} style={{height:vh(17.63),width:vw(15.42)}}/>
                        </TouchableOpacity> */}
                        </View>
                        {
                        this.state.calendorView ?
                        this.renderCal()
                        : null
                        }
                        <View style={{marginLeft:vw(10),flexDirection:'row',alignItems:"center"}}>
                        <View style={{width:"40%",height:0.5,backgroundColor:"#8A8A8A"}}/>
                        <Text style={{fontSize:normalize(8),marginHorizontal:vw(16.5),color:"#8A8A8A"}}>
                            OR
                        </Text>
                        <View style={{width:"40%",height:0.5,backgroundColor:"#8A8A8A"}}/>
                        </View>
                        <View style={{marginVertical:vh(15)}}>
                        <RadioGroup 
                        radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
                        </View >
                        </View> 
                        :
                        null
                    }
                    
                {/* <View style={{  marginBottom: 100, marginTop: 10, justifyContent: 'center', }}> */}
                    <FlatList style={{ paddingLeft: 20 ,paddingBottom:50,marginTop:vh(32)}}
                        data={this.state.list}
                        renderItem={({ item }) => this.renderList(item)}
                        keyExtractor={(item) => item.record}
                        ListFooterComponent={
                            <View>
                            </View>
                        }
                    />
                    </ScrollView>
            </Container>
        );
    }
    renderList({ titleRow, image }) {
        return (
            <TouchableOpacity 
            onPress={()=>alert("in progress")}
            srtyle={{}}>
                <View
                    style={{
                        // paddingVertical: 10,
                        width: '100%',
                        flexDirection: 'row',
                        padding: 5,
                        height: 30,
                        alignItems:"center",
                        justifyContent:"space-between",
                        
                        // backgroundColor: 'red'
                        // justifyContent: 'space-between',
                        // paddingRight: 30,
                    }}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Image source={image} style={{}} />
                    <Text style={{ marginLeft: 15,}}>{titleRow}</Text>
                    </View>
                    <TouchableOpacity style={{justifyContent:"center",marginRight:vw(20)}}>
                        <Image source={Icons.ArrowGreen} style={{height:vw(10),width:vw(10)}}/>
                    </TouchableOpacity>
                    {/* <Image source={Icons.Cross} style={{ height: 20, width: 20, marginRight: 50, }} /> */}
                </View>
            </TouchableOpacity>

        );
    }
    // renderSettingItem({ icon, title, image, onPress = () => { } }) {
    //     return (
    //         <ListItem selected onPress={onPress} key={title}>
    //             {/* <Icon
    //       name={icon}
    //       type={font}
    //       style={{ color: 'black', marginRight: 10, fontSize: 25 }}
    //     /> */}
    //             <Image source={image} style={{ height: 20, width: 20, margin: 5 }} />

    //             <Left>
    //                 <Text>{title}</Text>
    //             </Left>
    //         </ListItem>
    //     );
    // }
}

export { TicketIssueScreen };
const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    action: {
      textAlign: 'center',
      color: '#0000FF',
      marginVertical: 5,
      fontWeight: 'bold',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    stat: {
      textAlign: 'center',
    //   color: '#B0171F',
      marginBottom: 1,
    },
  });
// const styles = StyleSheet.create({});
