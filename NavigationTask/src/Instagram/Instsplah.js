import React,{Component} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';

export default class Instsplah extends Component {



    componentDidMount(){
        setTimeout(() => {
            // write your functions    
            this.props.navigation.navigate('Instagram')
         },1000);
    }


    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image
                style={{height:100,width:100}}
                source={{uri:'http://pngimg.com/uploads/instagram/instagram_PNG3.png'}}
                />
            </View>
        );
    }
}