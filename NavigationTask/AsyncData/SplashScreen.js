import React, { Component } from 'react';
import { Text, View, Image, Animated, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class SplashScreen extends Component {



    componentDidMount() {
        AsyncStorage.getItem('name1', (err, result) => {
            if (result) {
                Animated.timing(this.state.fadeValue, {
                    toValue: 1,
                    duration: 4000
                }).start(() => {
                    this.props.navigation.navigate('DashBoard')
                });


            } else {
                Animated.timing(this.state.fadeValue, {
                    toValue: 1,
                    duration: 4000
                }).start(() => {
                    this.props.navigation.navigate('SignUp')
                });

            }
        })
    }
    state = {
        fadeValue: new Animated.Value(0)
    };





    render() {
        return (
            <View style={styles.container}>

                <Animated.View style={{ opacity: this.state.fadeValue }}>
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('../assets/logo.png')} />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 120 }}>
                        AsyncData
                </Text>
                </Animated.View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})