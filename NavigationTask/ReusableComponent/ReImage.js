import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';

const ReImage = (props) => {
   return (
    <Image
    style={{height:80,width:80,borderRadius:40,margin:10}}
    source={{uri:props.uri}}/>

   );
}
export default ReImage