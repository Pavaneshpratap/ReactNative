import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInputtt from '../../ReusableComponent/LoginInput'
import {withNavigation} from 'react-navigation'


class Login extends Component {
    render() {
        return (
            
            <View
            
            style={{height:hp('100%'),width:wp('100%'),alignItems:'center',marginTop:50}}
            >
                <Text style={{fontSize:15,color:'grey'}}>
                    English (United States)
                </Text>
                <View style={{flex:0.85,
                    justifyContent:'center',
                    alignItems:'center'}}>
                    <Image 
                    style={{height:hp('10%'),
                    width:wp('60%')}}
                    source={{uri:'http://pngimg.com/uploads/instagram/instagram_PNG5.png'}}/>
                    <TextInputtt name="Phone number,email or username"/>
                    <TextInputtt name="Password"/>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Instapage')}
                    style={styles.btn}>
                        <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:10,color:'grey'}}>
                            Forget your login details?
                        </Text>
                        <Text style={{marginTop:10,fontWeight:'bold'}}>
                        Get help signing in.
                        </Text>
                        
                        </View>
                        <TouchableOpacity
                        onPress={()=> alert('In future will work')}
                        >
                        <View style={{flexDirection:'row',marginTop:40}}>
                            <Image
                            style={{height:25,width:25}}
                            source={{uri:'https://www.pngix.com/pngfile/middle/491-4910002_ideon-branding-consultancy-nyc-facebook-logo-fb-round.png'}}/>
                            <Text style={styles.fbbtn}>
                                Log in with Facebook
                            </Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:30}}>
                            <View
                            style={styles.vieww}/>
                        <Text style={{fontSize:20,marginLeft:10,marginRight:10,color:'grey'}}>
                            OR
                        </Text>
                        <View
                            style={styles.vieww}/>
                        
                        </View>
                        <View style={{flexDirection:'row',marginTop:30}}>
                        <Text style={{color:'grey'}}>
                            Don't have an account?
                        </Text>
                        <Text style={{fontWeight:'bold'}}>
                            Sign up.
                        </Text>
                        </View>

                        
                </View>
                <View style={{flex:0.1,borderTopColor:'lightgrey',width:wp("100%"),borderTopWidth:1,alignItems:'center'}}>
                    <Text style={{marginTop:18,fontSize:18,color:'grey'}}>
                        Instagram from Facebook
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn:{
        height:hp('6%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3999EF',
        borderRadius:5,
        marginTop:10,
        width:wp('85%')

    },
    fbbtn:{
        fontWeight:'bold',
        fontSize:18,
        color:'#3999EF',
        marginTop:1,
        marginLeft:5
    },
    vieww:{
        height:hp('0.1%'),
        width:wp('35%'),
        marginTop:10,
        backgroundColor:'grey'
    }
})

export default withNavigation(Login);
