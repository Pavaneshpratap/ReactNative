import React , {Component} from 'react';
import {Text,View,Image,StyleSheet,ActivityIndicator,FlatList} from 'react-native';

export default class FlatListt extends Component {
    static navigationOptions = {
        title: 'FlatListPrgrm',
      };

  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      dataSource:[],
      num:1

    }
  }



  callapi(){
    

    
    this.setState(()=>{
      return {num:this.state.num+1 }
    },
    

    )
    return fetch('https://reqres.in/api/users?page='+this.state.num)
    .then((response) => response.json())
    .then(responseJson => {
      // this.setState({
      //   isLoading:false,
      //   dataSource:this.state.dataSource.concat(responseJson.data),
      // })
      
      this.setState(()=>{
        return {dataSource:this.state.dataSource.concat(responseJson.data)}
      })

      
      
    })
    .catch((error)=>{
      console.log(error)
    });
    

    
  }

  componentDidMount(){
    return fetch('https://reqres.in/api/users?page='+this.state.num)
    .then((response) => response.json())
    .then(responseJson => {
      this.setState({
        isLoading:false,
        dataSource:responseJson.data,
      })
      
      
    })
    .catch((error)=>{
      console.log(error)
    });
    

  }



  renderItem = ({item}) => {
    return(
      <View style={{marginTop:80}}>
        <View style={{flexDirection:'row',backgroundColor:'skyblue'}}>
        <Image
      style={{height:100,width:100}}
      source={{uri:item.avatar}}
      />
      <View>
      <Text style={styles.Text}>
        Name : {item.first_name} {item.last_name}
      </Text>
      <Text style={styles.Text}>
        E-mail : {item.email}
      </Text>

      </View>
      

        </View>
      
       </View>
      

    )
    

  }



  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
        <FlatList
        style={{marginTop:20}}


        data={this.state.dataSource}
        renderItem={this.renderItem}
        onEndReached={()=>{
          if (num = 2){
            this.callapi()
          } else {
            return false
          }
        }}
        onEndReachedThreshold={0.01}
        
        
        />
         </View>
    );
  }
}

const styles = StyleSheet.create({
  Text:{
    paddingLeft:20,fontSize:15
  }
})

