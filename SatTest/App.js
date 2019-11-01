import React, {Component} from 'react';
import {Text,View,FlatList,StyleSheet} from 'react-native';
import axios from 'axios';



export default class SatTest extends Component{
  constructor(props){
      super(props);
      this.state={
        empData:""
      }
  }

  componentDidMount(){


    return fetch('https://newsapi.org/v2/everything?q=noida&apiKey=e6abc0d5fe6941c990f87fa9dbd76568')
    .then( (response) => response.json())
    .then((responseJson) => {
        this.setState({
         empData: responseJson

        }),
        console.warn(this.state.empData)
        //  console.warn(this.state.empdata.name)
        // for (object in this.state.empdata) {
        //    console.warn(object)
        //  }
        // this.state.empdata.forEach(object => {
        //  console.warn(object.name)
          
        // });
    })












    // return axios.get('https://newsapi.org/v2/everything?q=noida&apiKey=e6abc0d5fe6941c990f87fa9dbd76568')
    // .then((response) => {
    //   this.setState({
    //     empData:response.data
    //   })
      
      

    //   console.warn(empData);
    // })
    // .catch(function (error){
    //   console.log(error);
    // })

  }




  render(){
    return(     
       <View style={{flex:1,backgroundColor:'skyblue'}}>
        
        
    <FlatList style={{marginTop:10}}
      data={this.state.empData}
      
      renderItem={({ item }) => { return (
        
    <View style={{marginTop:11}}>


        <Text style={styles.title}>
          Id : {item.title}
        </Text>
        
        
        
</View>
      )}
    }
      keyExtractor={item => item.id}
    />
  </View>
  );
  }
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    paddingLeft:10
    // marginVertical: 8,
    // marginHorizontal: 16,
    // marginTop:5,
    
  }
});