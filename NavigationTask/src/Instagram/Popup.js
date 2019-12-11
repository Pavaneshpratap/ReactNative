import React,{Component} from 'react'
import {Text,View,Image} from 'react-native'

export default class Popup extends Component{
    render(){
        console.log ("jdbckjldsc", this.props)
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1,backgroundColor:"grey"}}>
                    <Text>
                        heyrrrr
                    </Text>
                </View>
                <Image style={{height:200,width:200}}
               source={this.props.sendpic}/>
                
                
            </View>
        );
    }
}