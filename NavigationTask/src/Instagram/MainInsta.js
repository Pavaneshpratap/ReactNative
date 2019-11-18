import React, {Component} from 'react';
import {Text,View,ScrollView} from 'react-native'

export default class MainInsta extends Component {
    render(){
        return(
            // <ScrollView>
            <View style={{flex:0.7,backgroundColor:'pink'}}>
                <View style={{flex:0.12,backgroundColor:'grey'}}>
                
                </View>
                <View style={{flex:0.7,backgroundColor:'lightgreen'}}>

                </View>
                <View style={{flex:0.1,backgroundColor:'green'}}>

                </View>
            </View>
            // {/* </ScrollView> */}
        );
    }
}