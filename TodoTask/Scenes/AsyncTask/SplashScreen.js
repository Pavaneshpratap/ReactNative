import React, {Component} from 'react';
import {Text,View,Animated, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class SplashScreen extends Component {

    state = {
        fadeValue: new Animated.Value(0)
    };
    
    
    componentDidMount(){
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 4000
        }).start(() => {
            this.props.navigation.navigate('TODO')
        });
    }
    



    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={{ opacity: this.state.fadeValue }}>
                <Image
                style={{height:hp('35%'),width:wp('90%')}}
                source={require('../../Assets/bnk.png')}
                />
                
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TODO')}
                >
                <Text style={styles.txt}>
                    ToDo Task
                </Text>
                </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#caddfa',
        alignItems:'center'
    },
    txt:{
        textAlign:'center',
        fontSize:hp('4%'),
        fontWeight:'bold'

    }
})