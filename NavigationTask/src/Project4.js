import React, { Component } from 'react';
import { Text, Image, View, FlatList, StyleSheet } from 'react-native';





class FlatListItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection:'row',

        backgroundColor: this.props.index % 2 == 0 ? 'lightgreen' : 'pink'
      }}>
        <View style={{flex:1,flexDirection:'column', marginTop:20}}>

        <Text style={styles.textstyle}>{this.props.item.name}</Text>
        <Text style={styles.textstyle}>{this.props.item.dept}</Text>
        

        </View>
        <Image source={{ uri: this.props.item.image }} style={{height:100,width:200}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    paddingLeft: 10
  }
})


export default class BasicFlatList extends Component {
    static navigationOptions = {
        title: 'FlatListData',
      };
  
    render() {
    return (
      <View style={{ flex: 1, marginTop: 40 }}>
        <FlatList data={flatlistdata}
          renderItem={({ item, index }) => {

            return (<FlatListItem item={item} index={index} >

            </FlatListItem>);

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
    "name": "Pavan",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2014/11/21/17/27/frog-540812_960_720.jpg'


  },
  {
    "key": 2,
    "name": "Raman",
    "dept": "iOS",
    "image": 'https://image.shutterstock.com/image-photo/spicebush-swallowtail-butterfly-caterpillar-papilio-600w-1174241620.jpg'


  },
  {
    "key": 3,
    "name": "Shubham",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2015/04/28/13/24/butterfly-743549_960_720.jpg'


  },
  {
    "key": 4,
    "name": "Sunny",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_960_720.jpg'


  },
  {
    "key": 5,
    "name": "Son",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg'


  },
  {
    "key": 6,
    "name": "Vishal",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2016/12/17/18/51/salt-1914130_960_720.jpg'


  },
  {
    "key": 7,
    "name": "Nikhil",
    "dept": "iOS",
    "image": 'https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg'


  },
  {
    "key": 8,
    "name": "Sagar",
    "dept": "iOS",
    "image": 'https://image.shutterstock.com/image-photo/abstract-black-white-photo-arc-600w-230618041.jpg'


  }
];