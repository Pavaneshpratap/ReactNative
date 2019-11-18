import React,{Component} from 'react';
import {Text,View,Image,ScrollView,icon} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReImage from '../../ReusableComponent/ReImage'
import MainInsta from './MainInsta'
import instagram from './Instagram'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
Ionicons.loadFont()
MaterialIcons.loadFont()

class Instapage extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1}}>
                    <View style={{marginTop:50,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                        <Image
                        style={{marginLeft:20,height:23,width:25}}
                        source={{uri:'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-10-512.png'}}/>
                    <Image
                    style={{marginLeft:10,height:30,width:100}}
                    source={{uri:'http://pngimg.com/uploads/instagram/instagram_PNG5.png'}}
                    />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Image
                    style={{height:30,width:30,marginRight:20}}
                    source={{uri:'https://cdn2.iconfinder.com/data/icons/instagram-17/32/20-igtv-512.png'}}/>
                    <Image
                    style={{height:33,width:33,marginRight:20}}
                    source={{uri:'http://icons.iconarchive.com/icons/icons8/ios7/256/Messaging-Sent-icon.png'}}/>
                    </View>
                    </View>

                </View>
                
                <View style={{flex:0.15,flexDirection:'row'}}>
                    
                    <View>
                    <Image
                    style={{height:80,width:80,borderRadius:40,margin:10,marginLeft:20}}
                    source={require('../../assets/Bunty.jpg')}
                    />
                    
                    <Image
                    style={{height:20,width:20,borderColor:'white',borderRadius:10,borderWidth:2,position:'absolute',marginLeft:70,marginTop:70}}
                    source={{uri:'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-512.png'}}
                    />
                    
                    <Text style={{marginLeft:25,fontSize:15}}>
                        Your Story
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <ReImage uri="https://images.pexels.com/photos/2658457/pexels-photo-2658457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <ReImage uri="https://images.pexels.com/photos/3027216/pexels-photo-3027216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <ReImage uri="https://images.pexels.com/photos/3088465/pexels-photo-3088465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <ReImage uri="https://images.pexels.com/photos/2719510/pexels-photo-2719510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    </View>
                    
                </View>
                
                <MainInsta/>
            </View>
        );
    }
}

// class Instapageee extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>
//                     fddsfs
//                 </Text>
//             </View>

//         );
//     }
// }

const Home = createStackNavigator(
    {
        Home:{ screen: Instapage, navigationOptions: { header: null } }
    }
)
const Search = createStackNavigator(
    {
        Search:Instapage
    }
)
const Add = createStackNavigator(
    {
        Add:Instapage
    }
)
const Love = createStackNavigator(
    {
        Love:Instapage
    }
)
const Person = createStackNavigator(
    {
        Person:Instapage
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
                  iconName = `ios-home`;
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
                    iconName = `ios-person`;
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