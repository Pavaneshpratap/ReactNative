import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

export default class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity
                onPress={this.increment}>
                <Text>
                    count : {this.state.count}
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}