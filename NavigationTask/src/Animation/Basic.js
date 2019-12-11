import React, {Component,useState,useEffect} from 'react'
import {Text,View,Animated} from 'react-native'

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
        }
      ).start();
    }, [])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default class Basic extends Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                <FadeInView style={{height:30,width:200,backgroundColor:"pink"}}>
                <Text>
                    hey
                </Text>
                </FadeInView>
            </View>
        );
    }
}