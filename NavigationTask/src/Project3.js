import React, {Component} from 'react';
import {Text,View,FlatList,Image,TouchableOpacity} from 'react-native';


class FlatListItem extends Component {
    
  render (){
    return(
      <View>
        <Image source={{uri:this.props.item.image}} 
        style={{height:118,width:118,margin:10,
          borderColor:'black',
          borderWidth:2,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.5,
          borderRadius:10}}></Image>

      </View>
    );
  }
}







export default class CollectionImages extends Component {
    static navigationOptions = {
        title: 'FlatListImage',
      };
    render(){
    return(
      <View style={{flex:1
      }}>
        

        <View style={{flex:0.12,
          backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white', fontSize:25,fontWeight:'bold',paddingTop:5}}>
            Gallery
          </Text>

          <View style={{backgroundColor:'white',flex:0.4,width:80,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text>
              7/16 Votes
            </Text>
          </View>

          

        </View>

        <View style={{flex:1,backgroundColor:'skyblue'}}>

        <FlatList data={flatlistdata}
        style={{
          
          shadowColor: 'black',
          shadowRadius: 15,
          shadowOpacity: 0.5}}
        numColumns={3}
        renderItem={({item,index})=> {

          return (<FlatListItem item={item} index={index}></FlatListItem>);
        }}
        >
          

        </FlatList>

        </View>


      </View>
      
    );
  }
}

const flatlistdata = [
  {
    "key": 1,
    "image": 'https://cdn.pixabay.com/photo/2014/11/21/17/27/frog-540812_960_720.jpg'


  },
  {
    "key": 2,
    "image": 'https://image.shutterstock.com/image-photo/spicebush-swallowtail-butterfly-caterpillar-papilio-600w-1174241620.jpg'


  },
  {
    "key": 3,
    "image": 'https://cdn.pixabay.com/photo/2015/04/28/13/24/butterfly-743549_960_720.jpg'


  },
  {
    "key": 4,
    "image": 'https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_960_720.jpg'


  },
  {
    "key": 5,
    "image": 'https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg'


  },
  {
    "key": 6,
    "image": 'https://cdn.pixabay.com/photo/2016/12/17/18/51/salt-1914130_960_720.jpg'


  },
  {
    "key": 7,
    "image": 'https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg'


  },
  {
    "key": 8,
    "image": 'https://image.shutterstock.com/image-photo/abstract-black-white-photo-arc-600w-230618041.jpg'


  },
  {
    "key": 9,
    "image": 'https://images.pexels.com/photos/2972161/pexels-photo-2972161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'


  }
  ,
  {
    "key": 10,
    "image": 'https://images.pexels.com/photos/277583/pexels-photo-277583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'


  }
  ,
  {
    "key": 11,
    "image": 'https://images.pexels.com/photos/2810751/pexels-photo-2810751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'


  }
  ,
  {
    "key": 12,
    "image": 'https://images.pexels.com/photos/2284350/pexels-photo-2284350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'


  }
];