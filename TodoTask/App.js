import React , {Component} from 'react';
import {Text,View, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//externally import
import SplashScreen from './Scenes/AsyncTask/SplashScreen'
import TODO from './Scenes/AsyncTask/TODO'

class TodoTask extends Component {
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#f2e3b1',justifyContent:"center",alignItems:'center'}}>
        <TouchableOpacity
        style={{backgroundColor:'black'}}
        onPress={() => this.props.navigation.navigate('SplashScreen')}
        >
        <Text style={{color:'white',fontSize:hp('3%'),fontWeight:'bold'}}>
          TODO Async Task
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{ screen:TodoTask, navigationOptions:{title:"Project's Directory"}},
  SplashScreen:{ screen:SplashScreen, navigationOptions:{header:null}},
  TODO:{ screen:TODO, navigationOptions:{title:"TODO"}
  },
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:{headerTintColor:'white',headerTitleStyle:{fontSize:30,fontWeight:'bold'},headerStyle:{backgroundColor:'black'}
    
  }
});

export default createAppContainer(AppNavigator);