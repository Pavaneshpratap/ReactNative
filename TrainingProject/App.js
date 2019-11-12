import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import taskProject from './Scenes/src/UIMarcus'
import MobXdata from './Scenes/src/MOBX/Mobx'
import MobxTask from './Scenes/src/MobxTask/Mobx1'


class NewProject extends Component{
  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
        <TouchableOpacity style={{backgroundColor:'blue'}}
        onPress={() => this.props.navigation.navigate('UIMarcus')}
        >
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
            UIMarcus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'blue',marginTop:20}}
        onPress={() => this.props.navigation.navigate('MobXdata')}
        >
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
          MobXdata
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'blue',marginTop:20}}
        onPress={() => this.props.navigation.navigate('MobxTask')}
        >
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
          MobxTask
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home:NewProject,
  UIMarcus:taskProject,
  MobXdata:MobXdata,
  MobxTask:MobxTask
},
{
  initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);
