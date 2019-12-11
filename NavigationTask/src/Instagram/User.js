import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GridImages from './GridImages'
import {vh,vw} from '../../src/Constants'

export default class User extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.11, flexDirection: 'row',backgroundColor:'#fcfcfc', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                    
                        onPress={() => alert('Otherslogin user')}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: vh(48), fontSize: vh(20), fontWeight: '600', marginLeft: vw(15) }}>
                                Mr_Williamson
                             </Text>
                            <Image
                                style={{ height: vh(20), width: vw(20), marginTop: vh(50),marginLeft:vw(1) }}
                                source={require('../../assets/downarrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('savedpics')}>
                        <Image
                            style={{ height: vh(20), width: vw(20), marginRight: vw(12), marginTop: vh(55) }}
                            source={{ uri: 'https://png2.cleanpng.com/sh/3d4a632883ef366a6cd01f0d3ce87d2d/L0KzQYm3U8MxN5Rrj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tf1mdqYygNN2YoX1d7b5TfJ2fKV0hp9qbnT1f7rrTgV0baMygNH7aYryfsXojL1tcZ9qRadqYnXnQ7SBhfI2OWQ4RqM6OUK0Q4S7UcUzOmU6TaYENkm5Q4q1kP5o/kisspng-computer-icons-menu-hamburger-button-android-user-horizontal-line-5abed3c8eb5133.1192133415224554969639.png' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.37,borderColor: 'lightgrey', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                style={{ height: vh(100), width: vh(100), borderRadius: vh(50),margin:vh(10)}}
                                source={require('../../assets/profilepic.jpg')} />
                            <View style={Styles.plusbtn}>
                                <Image
                                    style={{ height: vh(18), width: vh(18) }}
                                    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-512.png' }} />
                            </View>
                            </View>
                        <View style={{
                            flexDirection: "row",
                            flexGrow : 1,
                            justifyContent: 'space-around',
                            // backgroundColor:'grey',
                            // width: vw(250)
                        }}>
                            <View style={Styles.commonview}>
                                <Text style={{ fontSize: vh(20), fontWeight: "bold" }}>
                                    12
                                </Text>
                                <Text style={Styles.txt}>
                                    Posts
                                </Text>
                            </View>
                            <View style={Styles.commonview}>
                                <Text style={{ fontSize: vh(20), fontWeight: "bold" }}>
                                    12.5K
                                </Text>
                                <Text style={Styles.txt}>
                                    Followers
                                </Text>
                            </View>
                            <View style={Styles.commonview}>
                                <Text style={{ fontSize: vh(20), fontWeight: "bold" }}>
                                    25
                                </Text>
                                <Text style={Styles.txt}>
                                    Following
                                </Text>
                            </View>


                        </View>
                    </View>
                    <Text style={Styles.Title}>
                        Williamson Saclos
                    </Text>
                    <Text style={[Styles.Title, { fontWeight: "400" }]}>
                        RN Developer
                    </Text>
                    <Text style={[Styles.Title, { fontWeight: "400" }]}>
                        Appinventiv
                    </Text>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Editprofile')}
                        style={Styles.btn}>
                        <Text style={{ fontSize: vh(18) }}>
                            Edit Profile
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.07,flexDirection:'row',borderColor:"#edebeb",borderBottomWidth:1,justifyContent:"center",alignItems:'center'}}>
                   <TouchableOpacity>
                    <View style={{width:vw(188),height:vh(55),justifyContent:"center",alignItems:'center'}}>
                        <Image
                        style={{height:vh(35),width:vh(35)}}
                        source={{uri:'https://cdn4.iconfinder.com/data/icons/relief-photo-editor/32/view-layout-small-grid-512.png'}}
                        />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Try')}>
                    <View style={{width:vw(188),justifyContent:'center',alignItems:'center',height:vh(55)}}>
                        <Image
                        style={{height:vh(35),width:vh(35)}}
                        source={{uri:'https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-35-512.png'}}/>
                    </View>
                    </TouchableOpacity>
                   
                </View>
                <GridImages/>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    txt: {
        fontSize: vw(18)
    },
    Title: {
        fontSize: vw(18),
        fontWeight: '600',
        marginLeft: vw(15)
    },
    btn: {
        justifyContent: 'center',
        borderRadius: vh(8),
        marginTop: vh(35),
        borderColor: 'lightgrey',
        borderWidth: 1,
        alignItems: "center",
        height: vh(30),
        width: vw(340),
        marginLeft: vw(15),
        
    },
    commonview: {
        justifyContent: 'center',
        alignItems: "center"
    },
    plusbtn: {
        height: vh(20),
        width: vh(20),
        borderRadius: vh(10),
        marginTop: vh(80),
        marginLeft: vh(90),
        // marginLeft:10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
