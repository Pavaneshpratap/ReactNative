import React, {Component} from 'react';
import {Text,StyleSheet,Button,TouchableOpacity,View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from './src/Project1'
import FlatListt from './src/Project2'
import Project3 from './src/Project3'
import Project4 from './src/Project4'
import Project5 from './src/Project5'
import Project6 from './src/Project6'
import Project7 from './src/Project7'
import Project8 from './src/Project8'


 class Mainclass extends Component { 
  static navigationOptions = {
    title: 'Shop of Tasks',
    
  };
  render(){
    return(
      <View style={{flex:1,backgroundColor:'lightgrey',borderTopColor:'black',borderTopWidth:2}}>
        <Text
        style={{paddingLeft:110,marginTop:20,color:'white',backgroundColor:'black',fontSize:40,fontWeight:'bold'}}
        >
            Home Page
        </Text>
        <TouchableOpacity 
        style={{
          justifyContent:'center',
          alignItems:'center',marginTop:50,backgroundColor:'black',
          height:50,
          width:300,marginLeft:65,borderRadius:20,    shadowColor:'black',
          shadowOpacity:0.5,
          shadowRadius:10}}
        onPress={() => this.props.navigation.navigate('Details')}>
          <Text
          style={{color:'white',fontSize:30}}
          >
          Go to UITask
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('Flatlistprgrm')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to Flatlistprgrm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('FlatListImage')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to FlatListImage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('FlatlistData')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to FlatlistData
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('DiwaliTask')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to DiwaliTask
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('LifeCycle')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to LifeCycle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('ImagePicker')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to ImagePicker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.Button}
        onPress={() => this.props.navigation.navigate('Newtask')}>
          <Text
          style={{fontSize:30,color:'white'}}
          >
          Go to Newtask
          </Text>
        </TouchableOpacity>
        
        
      </View>
    );
  }
}





const AppNavigator = createStackNavigator({
  Home:Mainclass,
  Details:DetailsScreen,
  Flatlistprgrm:FlatListt,
  FlatListImage:Project3,
  FlatlistData:Project4,
  DiwaliTask:Project5,
  LifeCycle:Project6,
  ImagePicker:Project7,
  Newtask:Project8
  
},
{
  initialRouteName: 'Home',
  headerBackTitleVisible:false,

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    
    headerRight: () => (
      <TouchableOpacity 
      style={{borderRadius:10,height:30,width:90,marginRight:10,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
      onPress={() => alert('Hey Buddy!')}>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>
            Button
          </Text>
      </TouchableOpacity>
      
    ),
    headerTintColor: 'white',
    
    
    
    headerTitleStyle: {
      
      fontWeight: 'bold',
      fontSize:25,
    },
  },
}
);

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  Button:{justifyContent:'center',
  alignItems:'center',
    marginTop:20,
    backgroundColor:'black',
    height:50,
    width:300,
    marginLeft:65,
    borderRadius:20,
    shadowColor:'black',
    shadowOpacity:0.5,
    shadowRadius:10
    

  }
})