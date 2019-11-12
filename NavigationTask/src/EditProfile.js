import React ,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';

export default class EditProfile extends Component{
    
    render() {
        const text =  this.props.navigation.getParam('text', 'nothing sent')
      return (
        <View style={{flex:1,marginTop:20,marginLeft:20}}>
        <Text>{fn}</Text>
        <Text style={{}}>
            First Name
        </Text>
        <TextInput style={{backgroundColor:'lightgrey',marginRight:20}}/>

        <Text style={{marginTop:20}}>
            Last Name
        </Text>
        <TextInput style={{backgroundColor:'lightgrey',marginRight:20}}/>
        <TouchableOpacity 
        onPress={() => this.props.navigation.goBack()}
        style={{marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:'skyblue',width:130,height:40,borderRadius:20,marginLeft:120}}>
            <Text style={{fontSize:20}}>
                Go Back
            </Text>
        </TouchableOpacity>

    </View>
      )
    };
}