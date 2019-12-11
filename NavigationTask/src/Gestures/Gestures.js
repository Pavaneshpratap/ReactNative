import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { LongPressGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler'
import {vh,vw} from '../../src/Constants'

export default class Gestures extends Component {


    Longpress = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert("I'm being pressed for so long");
        }
    };


    DoubleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('Double tap, good job!');
        }
    };



    render() {
        return (
            <View style={{ flex: 1, marginTop:vh(20),marginLeft:vw(100)}}>
                <LongPressGestureHandler
                    onHandlerStateChange={this.Longpress}
                    minDurationMs={800}>
                    <TapGestureHandler
                        onHandlerStateChange={this.DoubleTap}
                        numberOfTaps={2}>
                        <View style={{ height: 50, width: 200, backgroundColor: "skyblue", justifyContent: 'center', alignItems: 'center' }}>
                            <Text>
                                Pavan
                </Text>
                        </View>
                    </TapGestureHandler>
                </LongPressGestureHandler>
            </View>
        );
    }
}