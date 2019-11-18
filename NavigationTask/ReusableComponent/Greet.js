import React,{Component} from 'react';
import {Text,View} from 'react-native';

const Greet = ({name,lastname}) => {
   return (<View>
        <Text>
            Hello {name} {lastname}
        </Text>
    </View>);
}
export default Greet