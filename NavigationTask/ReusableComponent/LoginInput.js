import React,{Component} from 'react'
import {Text,View,TextInput} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TextInputtt = (props) => {
    return (<View style={{height:hp('6%'),marginTop:10,opacity:0.4,width:wp('85%')}}>
    <TextInput
    style={{fontSize:18,borderRadius:5,height:50,backgroundColor:'#FFFFFF50',paddingLeft:10,justifyContent: 'center',alignItems:'center',borderColor:'black',borderWidth:1}}
    placeholder={props.name}
    placeholderTextColor='black'
   
    />
    </View>);
 }
 export default TextInputtt