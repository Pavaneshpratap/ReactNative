import React, { Component } from 'react'
import { Text, Image, StyleSheet,FlatList,View, TouchableOpacity } from 'react-native'
import {vh,vw} from '../../src/Constants'


class FlatListItem extends Component {

    render() {
      return (
        <View>
          <Image source={{ uri: this.props.item.image }}
            style={{
              height: vh(120), width: vw(120), marginTop:vh(4),marginLeft: vw(4),
              
            }}></Image>
  
        </View>
      );
    }
  }

export default class GridImages extends Component{
    render(){
        return(
            <View style={{flex:0.44,justifyContent:'center',alignItems:"center"}}>
            <FlatList data={flatlistdata}
            style={{marginRight: vw(4)}}
            
            numColumns={3}
            renderItem={({ item, index }) => {

              return (<FlatListItem item={item} index={index}></FlatListItem>);
            }}
          >


          </FlatList>
            </View>
        );
    }
}

const flatlistdata = [
    {
      "key": 1,
      "image": 'https://images.pexels.com/photos/2947915/pexels-photo-2947915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 2,
      "image": 'https://images.pexels.com/photos/2733862/pexels-photo-2733862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 3,
      "image": 'https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 4,
      "image": 'https://images.pexels.com/photos/3094222/pexels-photo-3094222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 5,
      "image": 'https://images.pexels.com/photos/2426489/pexels-photo-2426489.png?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 6,
      "image": 'https://images.pexels.com/photos/3083221/pexels-photo-3083221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 7,
      "image": 'https://images.pexels.com/photos/3140020/pexels-photo-3140020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 8,
      "image": 'https://images.pexels.com/photos/3218134/pexels-photo-3218134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    },
    {
      "key": 9,
      "image": 'https://images.pexels.com/photos/3140063/pexels-photo-3140063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    }
    ,
    {
      "key": 10,
      "image": 'https://images.pexels.com/photos/2257707/pexels-photo-2257707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    }
    ,
    {
      "key": 11,
      "image": 'https://images.pexels.com/photos/3181432/pexels-photo-3181432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    }
    ,
    {
      "key": 12,
      "image": 'https://images.pexels.com/photos/3130372/pexels-photo-3130372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  
  
    }
  ];