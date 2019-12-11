import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {vh,vw} from '../src/Constants'

const ReImage = (props) => {
   return (
      <View>
    <Image
    style={{height:vw(80),width:vw(80),borderRadius:vw(40),margin:vh(10)}}
    source={{uri:props.uri}}/>
    <Text style={styles.txt}>
       {props.name}
    </Text>
    </View>
   );
}
export default ReImage

const styles = StyleSheet.create({
   txt:{
      marginLeft:vw(15),
      marginTop:vh(-5),
      fontSize:vw(15),
      marginBottom:vh(5)
   }
})