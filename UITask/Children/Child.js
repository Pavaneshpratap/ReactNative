import React, {Component} from 'react';
import {Text,View,Image} from 'react-native';

export default class ChildComponent extends React.Component {
    render(){
        
        return(
            <View style={{flex:0.3}} >
               
                <Image source={{uri:'https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                style={{resizeMode:'cover',flex:1}}/>
            </View>
        );
    }
}

