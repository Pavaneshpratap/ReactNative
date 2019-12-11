import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import {vh,vw} from '../Constants'


export default class AnimationDirectry extends Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Header')}
                style={{height:vh(30),width:vw(200),borderRadius:vh(5),backgroundColor:"skyblue",justifyContent:"center",alignItems: 'center'}}>
                <Text style={{fontSize:vh(20)}}>
                    Scrollable Header
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('SwipableView')}
                style={{height:vh(30),width:vw(200),marginTop:vh(10),borderRadius:vh(5),backgroundColor:"skyblue",justifyContent:"center",alignItems: 'center'}}>
                <Text style={{fontSize:vh(20)}}>
                    Swipable View
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Basic')}
                style={{height:vh(30),width:vw(200),marginTop:vh(10),borderRadius:vh(5),backgroundColor:"skyblue",justifyContent:"center",alignItems: 'center'}}>
                <Text style={{fontSize:vh(20)}}>
                    Basic
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}