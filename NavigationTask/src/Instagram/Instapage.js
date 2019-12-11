import React,{Component} from 'react';
import {Text,View,Image,TouchableOpacity,FlatList,ScrollView,icon} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReImage from '../../ReusableComponent/ReImage'
import MainInsta from './MainInsta'
import instagram from './Instagram'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import User from './User'
import Activity from './Activity'
import {vh,vw} from '../../src/Constants'
import Searchpage from './Searchpage'
import Shoppage from './Shoppage'
Ionicons.loadFont()
MaterialIcons.loadFont()
Foundation.loadFont()

class Instapage extends Component {

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{ backgroundColor:'#fcfcfc'}}>
                    <View style={{marginTop:vh(50),flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                            onPress={()=>alert('Camera')}>
                        <Image
                        style={{marginLeft:vw(20),height:vh(22),width:vh(27)}}
                        source={{uri:'https://www.seekclipart.com/clipng/big/452-4521572_clipart-camera-outline-instagram-camera-icon-png-transparent.png'}}/>
                    </TouchableOpacity>
                    <Image
                    style={{marginLeft:vw(10),height:vh(30),width:vw(100)}}
                    source={{uri:'http://pngimg.com/uploads/instagram/instagram_PNG5.png'}}
                    />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                        onPress={()=>alert('Broadcast')}>
                    <Image
                    style={{height:vh(30),width:vh(30),marginRight:vw(20)}}
                    source={{uri:'https://cdn2.iconfinder.com/data/icons/instagram-17/32/20-igtv-512.png'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Msgs')}>
                    <Image
                    style={{height:vh(50),width:vw(50),marginTop:vh(-8),marginRight:vw(5)}}
                    source={{uri:'https://icon-library.net/images/1900531-200_45732.png'}}/>
                    </TouchableOpacity>
                    </View>
                    </View>

                </View>
                <ScrollView>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                <View style={{flex:0.15,flexDirection:'row',borderColor:'#edebeb',borderWidth:1}}>
                <TouchableOpacity
                onPress={()=>alert('Will add story')}>
                    <View>
                        
                    <Image
                    style={{height:vw(80),width:vw(80),borderRadius:vw(40),margin:vh(10),marginLeft:vw(20)}}
                    source={require('../../assets/profilepic.jpg')}
                    />
                    
                    
                    <Image
                    style={{height:vh(22),width:vh(22),borderColor:'white',borderRadius:vh(11),borderWidth:vh(2),position:'absolute',marginLeft:vw(80),marginTop:vw(70)}}
                    source={{uri:'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-512.png'}}
                    />
                    
                    
                    <Text style={{marginLeft:vw(25),marginTop:vh(-5),fontSize:vw(15)}}>
                        Your Story
                    </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <ReImage uri="https://images.pexels.com/photos/2658457/pexels-photo-2658457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  name="Mr. Lonely"/>
                        <ReImage uri="https://images.pexels.com/photos/3027216/pexels-photo-3027216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name ="AD_VNTR"/>
                        <ReImage uri="https://images.pexels.com/photos/3088465/pexels-photo-3088465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name="Ileamo_D"/>
                        <ReImage uri="https://images.pexels.com/photos/2719510/pexels-photo-2719510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Sayno_D"/>
                    </View>
                    
                </View>
                </ScrollView>
                
                <MainInsta/>
                <MainInsta/>
                </ScrollView>    
            </View>
            
        );
    }
}


const Home = createStackNavigator(
    {
        Home:{ screen: Instapage, navigationOptions: { header: null } }
    }
)
const Search = createStackNavigator(
    {
        Search:{ screen: Searchpage, navigationOptions: { header: null } },
        Shoppage:{ screen: Shoppage, navigationOptions: { header: null } }
    }
)
const Add = createStackNavigator(
    {
        Add:Instapage
    }
)
const Love = createStackNavigator(
    {
        Love:{screen : Activity, navigationOptions:{header:null}}
    }
)
const Person = createStackNavigator(
    {
        Person:{screen : User, navigationOptions:{header:null}}
    }
)

const TabNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Home: Home,
            Search:Search,
            Add:Add,
            Love:Love,
            Person:Person

        },

        //custom 
        {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    return (
                        <Foundation name = 'home' size = {25} color = {tintColor}/>
                    )
                   
                //   iconName = `ios-home`;
                  // Sometimes we want to add badges to some icons.
                  // You can check the implementation below.
                 // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Search') {
                  iconName = `ios-search`;
                }
                else if (routeName === 'Add') {
                    iconName = `ios-add-circle-outline`;
                  }
                  else if (routeName === 'Love') {
                    iconName = `ios-heart-empty`;
                  }
                  else if (routeName === 'Person') {
                    return (
                        <MaterialIcons name = 'person-outline' size = {25} color = {tintColor}/>
                    )
                  }
        
                // You can return any component that you like here!
                return <IconComponent 
                name={iconName} 
                size={25} color={tintColor} />;
              },
            }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'black',
              showLabel:false
            },
          }




        // {
        //     tabBarOptions: {
        //     activeTintColor: '#e91e63',
        //     labelStyle: {
        //       fontSize: 12,
        //     },
        //     style: {
        //     //   backgroundColor: 'blue',
        //     },
        //   }
        // },
          




          
    )
)

export default TabNavigator;