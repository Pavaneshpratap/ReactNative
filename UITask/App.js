import React, {Component} from 'react';
import {Text,View} from 'react-native';
import ChildComponent from './Children/Child';
import TextChild from './Children/TextChild';
import BottomChild from './Children/BottomChild';
export default class Parent extends Component {
  constructor(props){
    super(props)
  this.state = {

      name : 'Pavan'

  }
  }
  



  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
        
      <ChildComponent></ChildComponent>
      <TextChild></TextChild>
      {/* <BottomChild></BottomChild> */}
      </View>
    );
  }

}