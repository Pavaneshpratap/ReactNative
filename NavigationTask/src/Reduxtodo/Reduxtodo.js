import React, {Component} from 'react';
import {Text,View} from 'react-native';
import Todoapp from './Todoapp'
import store from './Store/index'
import {Provider} from 'react-redux'

export default class Reduxtodo extends Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Provider store={store}>
                <Todoapp />
                </Provider>
            </View>
        );
    }
}