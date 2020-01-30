import React,{Component} from 'react'
import {Text,View,Image,TouchableOpacity,TextInput} from 'react-native'
import { vh, vw } from '../Constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Showimage extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#f2f5f3'}}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}>
                    <Image
                    style={{height:vh(50),width:vw(50),marginTop:vh(30)}}
                    source={{uri:"https://static.thenounproject.com/png/390380-200.png"}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:vh(20),marginTop:vh(42),fontWeight:"600"}}>
                        Explore
                    </Text>
                </View>
                <View style={{flex:0.75}}>
                    <View style={{flex:0.15,flexDirection:"row",justifyContent:'space-between'}}>
                        <View style={{flexDirection:"row"}}>
                        <Image
                        style={{height:vh(40),width:vh(40),borderRadius:vh(20),margin:vh(10)}}
                        source={{uri:this.props.navigation.getParam('getpic')}}
                        />
                        <Text style={{fontSize:vh(18),marginTop:vh(20)}}>
                            {this.props.navigation.getParam('namess')}_{this.props.navigation.getParam('namelast')}
                        </Text>
                        </View>
                        <View>
                            <Image
                            style={{height:vh(30),width:vw(30),marginTop:vh(10)}}
                            source={{uri:'https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png'}}
                            />
                        </View>


                    </View>
                    <View style={{flex:0.5}}>
                        <Image
                        style={{resizeMode:'stretch',height:vh(410)}}
                        source={{uri:this.props.navigation.getParam('getpic')}}
                        />

                    </View>
                    <View style={{ flex: 0.1, marginTop:vh(200),flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => alert('Yeah You Liked this pic')}>
                        <Image
                            style={{ height: vh(25), width: vh(28), margin: vw(11) }}
                            source={{ uri: 'https://icon-library.net/images/love-icon-png/love-icon-png-1.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Comment')}>
                        <Image
                            style={{ height: vh(47), width: vh(47), marginLeft: vw(-7) }}
                            source={{ uri: 'https://icon-library.net/images/instagram-comment-icon-png/instagram-comment-icon-png-15.jpg' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Share')}>
                        <Image
                            style={{ height: vh(45), width: vw(45), marginTop: vh(2), marginLeft: vw(-5) }}
                            source={{ uri: 'https://icon-library.net/images/1900531-200_45732.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Saved Pics')}>
                        <Image
                            style={{ height: vh(31), width: vw(30), marginTop: vh(10), marginLeft: vw(215) }}
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/instagram-18/512/196_Flag_Instagram_Interface_Save_Tag-512.png' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.1 }}>
                    <Text style={{ marginLeft: vw(10), fontSize: vh(15) }}>
                        <Text>Liked by</Text>
                        <Text style={{ fontWeight: 'bold' }}> Ileamo_D</Text>
                        <Text> and</Text>
                        <Text style={{ fontWeight: 'bold' }}> thousands of others</Text>
                    </Text>
                    <Text style={{ marginLeft: vw(10) }}>
                        <Text style={{ fontWeight: "bold", fontSize: vh(14) }}>{this.props.navigation.getParam('namess')}</Text>
                        <Text style={{ fontSize: vh(14) }}> Bike lovers....</Text>
                    </Text>
                    <Text style={{ marginLeft: vw(10), fontSize: vh(15), color: 'grey' }}>
                        View all Comments
                </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: vh(34), width: vh(34), borderRadius: vh(17), margin: vh(10) }}
                            source={require('../../assets/profilepic.jpg')}
                        />
                        <TextInput
                            style={{ fontSize: vh(15), width: vw(250)}}
                            placeholder="Add a comment..."
                        />
                        <Image
                            style={{ height: vh(22), width: vw(20), marginTop: vh(18)}}
                            source={{ uri: 'https://png2.cleanpng.com/sh/bf23bd3bff4843b4e7c6542158afe37c/L0KzQYm3UsAzN5lpfZH0aYP2gLBuTfxifZhtjNd7LXbkc7a0lBl1cF55fdN7cz3ydn7xjCkubZ50gts2ZX3yhLrqjB4ua51uRdV7eXnxd37sjf9rcV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVcQxPWJqT6cDZECxRIe3U8M4OGY2TaMCNkO2RoKAWcQ4Pl91htk=/kisspng-laughter-face-with-tears-of-joy-emoji-emoticon-cli-crying-emoji-png-transparent-image-5a754051e758d0.4603370515176336179476.png' }} />
                        <Image
                            style={{ height: vh(22), width: vw(20), marginTop: vh(18),marginLeft:vw(10)}}
                            source={{ uri: 'https://png2.cleanpng.com/sh/30232181b29bb1c69ed067e53124ecfd/L0KzQYm3U8I5N5x4iZH0aYP2gLBuTfVud5tuRdpuYYL3Pbr3iP9vbV5xhAhuLXXwf7vwTcViapM4S9cAYUa0SLW9TsEzO2E2TKM6MUW1QoO4V8k2P2c9SKU3cH7q/kisspng-emoji-heart-iphone-love-emoji-5abb33e5a618d6.1230141115222179576803.png' }} />

                    </View>
                </View>
                

                </View>
            </View>
        );
    }
}