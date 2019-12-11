import React,{Component} from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {vh,vw} from '../../src/Constants'

export default class Activity extends Component {
    render(){
        return(
                <React.Fragment>
                <View style={{flex:0.12,backgroundColor:'#fcfcfc',borderColor:'#edebeb',borderBottomWidth:1}}>
                <Text style={{marginTop: vh(50), fontSize: vh(20), fontWeight: '600', marginLeft: vh(10) }}>
                    Activity
                </Text>
                </View>
                <View style={{flex:1}}>
                <Text style={{fontSize:vh(18),margin:vh(15),fontWeight:"600"}}>
                    Today
                </Text>
                <View style={{flexDirection:"row"}}>
                <View style={{height:vh(75),width:vw(65),marginLeft:vw(15)}}>
                    <Image
                    style={{height:vh(50),width:vh(50),borderRadius:vh(25),marginTop:vh(10)}}
                    source={{uri:'https://images.pexels.com/photos/2805877/pexels-photo-2805877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                    />
                    <View style={{height:vh(54),width:vh(54),borderRadius:vh(27),position:'absolute',marginTop:20,marginLeft:10,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
                    <Image
                    style={{height:vh(50),width:vh(50),borderRadius:vh(25)}}
                    source={{uri:"https://images.pexels.com/photos/3133688/pexels-photo-3133688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                    />
                    </View>
                </View>
                <View>
                <Text style={{marginLeft:vw(15),marginTop:vh(18)}}>
                    <Text style={Styles.boldtxt}>
                        mlnewela, shzzzzzz 
                    </Text><Text style={{fontSize:vh(16)}}> and</Text>
                    <Text style={Styles.boldtxt}> 8 others</Text>
                </Text>
                <Text style={{fontSize:vh(16),marginLeft:vw(15)}}>started following you</Text>
                </View>
                </View>
            </View>
            </React.Fragment>
        );
    }
}

const Styles = StyleSheet.create({
    boldtxt:{
        fontSize:vh(18),
        fontWeight:"600"

    }
})