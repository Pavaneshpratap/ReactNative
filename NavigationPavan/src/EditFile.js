import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';

export default class EditFile extends Component{
    constructor(props){
        super(props);
        this.state={
            fname1:'',
            lname1:''
        }
    }
    render(){
        return(
            <View style={{flex:1,marginTop:20,marginLeft:20 }}>
        <Text style={{fontSize:20}}>
          First Name
        </Text>
        <TextInput 
        onChangeText={
            fname1=>this.setState({fname1})
        }
        style={{fontSize:15,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
            <Text>
                {this.props.navigation.getParam('fname')}
            </Text>
        </TextInput>
        <Text style={{fontSize:20,marginTop:20}}>
          Last Name
        </Text>
        <TextInput 
        onChangeText={
            lname1=>this.setState({lname1})
        }
        style={{fontSize:15,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
            <Text>
                {this.props.navigation.getParam('lname')}
            </Text>
        </TextInput>
        <TouchableOpacity 
        style={{backgroundColor:'green',height:60,marginLeft:100,borderRadius:20,marginTop:30,justifyContent:'center',alignItems:'center',width:180}}
        onPress={() => this.props.navigation.navigate('Home',{fname1:this.state.fname1,lname1:this.state.lname1})}>
          <Text style={{fontSize:30,fontWeight:'bold'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
        );
    }
}
