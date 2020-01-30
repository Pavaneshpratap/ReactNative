import React,{Component} from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'

export default class Booger extends Component {

    constructor(props){
        super(props);
        this.state={
            toggle:false
        }
    }

        // state={
        //     toggle:true
        // }
    togglebtn=()=>{
        this.setState({
            toggle : !this.state.toggle
        })
    }




    render(){
        return(
            <View style={{flex:1,justifyContent:'center',backgroundColor:"skyblue",alignItems:'center'}}>
                <Text>
                    Hey
                </Text>
                {console.warn(this.state.toggle)}
                <TouchableOpacity
                onPress={()=>alert('hogya')}>
                <Image
                style={{height:100,width:100,borderRadius:40}}
                // source={{uri:'https://images.pexels.com/photos/2004930/pexels-photo-2004930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                source={require('../assets/profilepic.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.togglebtn}>
                    <Text>
                        effsdfsdf
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}