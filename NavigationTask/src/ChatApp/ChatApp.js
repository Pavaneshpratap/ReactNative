import React,{Component} from 'react'
import {Text,View,TextInput,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import Fire from './Fire'

export default class ChatApp extends Component{

    state={
        Email:"",
        pswrd:""
    }

    navigate=()=>{
        this.props.navigation.navigate('StartChat',{Email:this.state.Email})
        var FullEmail=this.state.Email
        Fire.writeTheUserToDatabase(FullEmail,FireSDK.uid)
        
    }

  

    render(){
        return(
            <View style={{flex:1,alignItems:"center"}}>
                
                
                <TextInput
                onChangeText={(val)=>this.setState({Email:val})}
                placeholder="Enter Your Email"
                style={{marginTop:100,height:50,width:300,backgroundColor:"lightgrey"}}/>
                <TextInput
                onChangeText={(val)=>this.setState({pswrd:val})}
                placeholder="Enter Your pswrd"
                style={{marginTop:100,height:50,width:300,backgroundColor:"lightgrey"}}/>
                <TouchableOpacity 
                onPress={this.navigate}
                style={{marginTop:40}}>
                <Text style={{fontSize:20}}>
                    Next
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}