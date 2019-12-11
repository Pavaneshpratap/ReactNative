import React,{Component} from 'react'
import {Text,View,ScrollView,Image,Animated} from 'react-native'

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_MAX_HEIGHT = 80
PROFILE_MIN_HEIGHT = 40

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            scrollY:new Animated.Value(0)

        }
    }
    render(){

        const headerHeight = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
            extrapolate:'clamp'
        })
        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange:[PROFILE_MAX_HEIGHT,PROFILE_MIN_HEIGHT],
            extrapolate:'clamp'
        })
        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange:[HEADER_MAX_HEIGHT-(PROFILE_MAX_HEIGHT/2),HEADER_MAX_HEIGHT+5],
            extrapolate:'clamp'
        })
        const headerZindex = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange:[0,1],
            extrapolate:'clamp'
        })
        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+5+PROFILE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+5+PROFILE_MIN_HEIGHT+26],
            outputRange:[-20,-20,-20,0],
            extrapolate:'clamp'
        })

        return(
            <View style={{flex:1}}>
                <Animated.View style={{position:'absolute',top:0,left:0,right:0,height:headerHeight,backgroundColor:'skyblue',zIndex:headerZindex,alignItems: 'center'}}>
                <Animated.View style={{position:'absolute',bottom:headerTitleBottom}}>
                    <Text style={{fontSize:14,color:"white",fontWeight:'bold'}}>
                        Pavan Thakur

                    </Text>
                </Animated.View>
                </Animated.View>
                <ScrollView style={{flex:1}}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent:{contentOffset:{y:this.state.scrollY}}}]
                )}
                >
                    <Animated.View style={{height:profileImageHeight,width:profileImageHeight,borderRadius:PROFILE_MAX_HEIGHT/2,overflow:'hidden',marginTop:profileImageMarginTop,marginLeft:10}}>
                        <Image style={{flex:1}}
                        source={{uri:'https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                    </Animated.View>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>
                        Pavan Thakur
                    </Text>
                    <View style={{height:1000}}>

                    </View>
                </ScrollView>
            </View>
        )
    }
}