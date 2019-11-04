import React, {Component} from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EditFile from './src/EditFile'

class NavigationPavan extends Component{
  constructor(){
    super();
    this.state={
      fname:'',
      lname:''
    }
  }

  

  render(){
    return(
      <View style={{flex:1,marginTop:20,marginLeft:20 }}>
        <Text style={{fontSize:20}}>
          First Name
        </Text>
        <TextInput 
        onChangeText={
          fname => this.setState({fname})
        }
        style={{fontSize:15,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
          <Text>
            {this.props.navigation.getParam('fname1')}
          </Text>
        </TextInput>
        <Text style={{fontSize:20,marginTop:20}}>
          Last Name
        </Text>
        <TextInput 
         onChangeText={
          lname => this.setState({lname})
        }
        style={{fontSize:15,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
          <Text>
            {this.props.navigation.getParam('lname1')}
          </Text>
        </TextInput>
        <TouchableOpacity 
        style={{backgroundColor:'skyblue',height:60,marginLeft:100,
        borderRadius:20,marginTop:30,justifyContent:'center',alignItems:'center',
        width:180}}
        onPress={() => this.props.navigation.navigate('Edit',
        {fname:this.state.fname, 
        lname:this.state.lname
        }
        )}>
          <Text style={{fontSize:30,fontWeight:'bold'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:NavigationPavan,
  Edit:EditFile
},
{
  initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);