import React, {Component} from 'react'
import {Text,View,Animated,Image,TouchableOpacity,Easing} from 'react-native'
import {vh,vw} from '../Constants'


export default class Basic extends Component {

    state = {
        fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(0),
        springValue: new Animated.Value(0.5),
        rotateValue: new Animated.Value(0)
    };


    Faded=()=>{
            Animated.timing(this.state.fadeValue, {
                toValue: 1,
                duration: 4000
            }).start()
     }


     moveAnimation=()=>{
         Animated.timing(this.state.xValue,{
             toValue:vw(300),
             duration: 2000,
            //  easing:Easing.linear
            easing:Easing.back()
         }).start(()=>{
            Animated.timing(this.state.xValue,{
                toValue:0,
                duration: 2000,
                easing:Easing.back()
            //    easing:Easing.cubic
            }).start(()=>{
                this.moveAnimation()
            });
         });

     }
     SpringAnimation=()=>{
         
         Animated.spring(this.state.springValue,{
             toValue:1,
             friction:1
         }).start(()=>{
            Animated.spring(this.state.springValue,{
                toValue:0.3,
                friction:1
            }).start(()=>{
                this.SpringAnimation()
            });

         });

     }

     rotateAnimation=()=>{
         Animated.sequence([
             Animated.timing(this.state.rotateValue,{
                 toValue:100,
                 duration:1000,
                 easing:Easing.linear,
             }),
             Animated.timing(this.state.rotateValue,{
                toValue:0,
                duration:0,
            }),
         ]).start(()=>{
             this.rotateAnimation()

         })
     }



     render(){
         const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
             inputRange:[0,100],
             outputRange:['0deg','360deg']
         })
        return(
            <View style={{flex:1,justifyContent:"center"}}>
                <Animated.Text style={[{transform:[{rotate:interpolatedRotateAnimation}]},{fontSize:20}]}>
                    hey
                </Animated.Text>

                <Animated.Image
                style={[{transform:[{rotate:interpolatedRotateAnimation}]},{height:100,width:100}]}
                source={require('../../assets/profilepic.jpg')}/>
                
                {/* <Animated.View style={{transform:[{rotate:interpolatedRotateAnimation}]}}>
                    <Image
                    style={{height:100,width:100}}
                    source={require('../../assets/profilepic.jpg')}/>
                </Animated.View> */}
                
                
                <Animated.View style=
                {{ opacity: this.state.fadeValue,
                    left:this.state.xValue,
                    transform:[{scale:this.state.springValue}],
                    // transform:[{rotate:interpolatedRotateAnimation}]
                
                }}
                // {{left:this.state.xValue}}
                >
                    <View style={{height:60,width:100,backgroundColor:"lightgreen",justifyContent:"center",alignItems:"center"}}>
                        <Text>
                            hey
                        </Text>
                    </View>
                
                </Animated.View>
                
                    <TouchableOpacity
                    style={{height:40,width:120,backgroundColor:'grey',justifyContent:"center",alignSelf:'center',alignItems:'center',marginTop:10}}
                    onPress={()=>this.Faded()}>
                        <Text>
                            Fade
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:40,width:120,backgroundColor:'grey',justifyContent:"center",alignSelf:'center',alignItems:'center',marginTop:10}}
                    onPress={()=>this.moveAnimation()}>
                        <Text>
                            Move
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:40,width:120,backgroundColor:'grey',justifyContent:"center",alignSelf:'center',alignItems:'center',marginTop:10}}
                    onPress={()=>this.SpringAnimation()}>
                        <Text>
                            Spring
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:40,width:120,backgroundColor:'grey',justifyContent:"center",alignSelf:'center',alignItems:'center',marginTop:10}}
                    onPress={()=>this.rotateAnimation()}>
                        <Text>
                            Rotate
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}