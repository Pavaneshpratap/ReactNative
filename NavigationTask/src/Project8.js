import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Greet from '../ReusableComponent/Greet'

export default class Project8 extends Component {
    render(){
        return(
            <View>
                <Greet name='Raman' lastname='Verma'/>
                <Greet name='Pavan' lastname='Thakur'/>
                <Greet name='Subham' lastname='Singh'/>
            </View>
        );
    }
}