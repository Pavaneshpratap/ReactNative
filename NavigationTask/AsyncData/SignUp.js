import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';


export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email:''
        }
    }

    storeData = async () => {
        
        try {
          await AsyncStorage.setItem('name1', this.state.email)
        } 
        
        
        
        catch (e) {
          // saving error
        }
        this.props.navigation.navigate('DashBoard',{email:this.state.email})
      }


      getData = async () => {
        try {
          const value = await AsyncStorage.getItem('name1')
          if(value !== null) {
            alert(value)
          } else {
            alert('Nothing in StoredData')
          }
        } catch(e) {
          
        }
      }
      clearData(){
          AsyncStorage.clear()
      }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:"#0a1340"}}>
                <StatusBar barStyle="light-content" />
            <View style={{flex:1,backgroundColor:"#0a1340",justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontSize:30}}>
                    E-mail
                </Text>
                <TextInput 
                onChangeText={email => this.setState({email})}
                style={{borderRadius:20,paddingLeft:20,fontSize:20,height:50,width:280,backgroundColor:'#b6c0f0'}}/>
                
                <TouchableOpacity 
                onPress={this.storeData}
                style={{height:60,width:400,backgroundColor:'#91a0eb',borderRadius:20,justifyContent: 'center',alignItems:'center',marginTop:50}}>
                    <Text style={{color:'#0a1340',fontSize:30,fontWeight:'bold'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={this.getData}
                style={{height:60,width:400,backgroundColor:'#91a0eb',borderRadius:20,justifyContent: 'center',alignItems:'center',marginTop:50}}>
                    <Text style={{color:'#0a1340',fontSize:30,fontWeight:'bold'}}>
                        Read Data 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={this.clearData}
                style={{height:60,width:400,backgroundColor:'#91a0eb',borderRadius:20,justifyContent: 'center',alignItems:'center',marginTop:50}}>
                    <Text style={{color:'#0a1340',fontSize:30,fontWeight:'bold'}}>
                        Clear Data 
                    </Text>
                </TouchableOpacity>
                
            </View>
            </SafeAreaView>
        );
    }
}
