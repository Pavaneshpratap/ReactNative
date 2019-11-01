import React,{Component} from 'react';
import {Text,Image,View,TextInput,ActivityIndicator,StyleSheet,FlatList} from 'react-native';


export default class DataFetch extends Component {

    static navigationOptions = {
        title: 'DiwaliTask',
      };

  constructor(props){
    super(props);
    this.state={
      empdata:"",
      isloading:true,
      showMore:true,
      query:"",
      fulldata:[],
      textShown: -1

    }
  }


  toggleNumberOfLines = index => {
    this.setState({
      textShown: this.state.textShown === index ? -1 : index,
    });
  };

  onClick= () => {
    this.setState({
      showMore:false
    })

  }

  handleSearchText = (text) => {
      this.textData=text;
      this.setState({query:text});
      this.callApi(text)
  };

  callApi(text) {
    return fetch('https://newsapi.org/v2/everything?q='+text+'&apiKey=e91735f4061c446283021576a615bacf')
      .then( (response) => response.json())
      .then((responseJson) => {
          this.setState({
           empdata: responseJson.articles

          }),
          this.setState({
            isloading:false
          })
      })
  }

  componentDidMount(){

    this.callApi("Noida")
  }




  render(){
    if (this.state.isloading) {
      return(
        <ActivityIndicator color="red" size="large" style={{flex:0.2,marginTop:1}}>
          
        </ActivityIndicator>
      ) 
    } else {

    
    return(
      <View style={{flex:1,backgroundColor:'skyblue'}}>
        <View>

        <TextInput style={{width:320,
          fontSize:20,
          paddingLeft:50,
          height:70,
          borderRadius:40,
          marginTop:50,
          marginLeft:30,
          backgroundColor:'white',
          shadowColor:"black",
          shadowRadius:10,
          shadowOpacity:0.5,
          borderColor:'black',
          borderWidth:2}}
          onChangeText={this.handleSearchText}/>
          
           
          <Image 
          style={{height:40,
            width:40,
            position:"absolute",
            marginTop:65,
            marginLeft:40}}
          source={require('../assets/Search.png')}/>       


        </View>

       
        
        
      <FlatList style={{marginTop:30, marginBottom:13}}
        data={this.state.empdata}
        
        renderItem={({ item , index}) => { return (
          
      <View style={styles.card}>

          <View style={{flexDirection:'row'}}>


            <View style={{shadowColor:'black',
            shadowRadius:10,
            shadowOpacity:0.5}}>

          <Image style={{height:50,
          borderColor:'black',
          borderWidth:2,
          width:50,
          position:'absolute',
          borderRadius:10,
          marginLeft:10,
          top:-25}}
          source={{ uri: item.urlToImage ? item.urlToImage : 'https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}/>
         
          </View>


          <View>
            <Text style={styles.title}
          numberOfLines={1}
          >
            Title : {item.title}
          </Text>
          <Text style={{paddingLeft:65,fontSize:15}}

          
          numberOfLines={this.state.textShown === index ? undefined : 2}
          
          >
            Description : {item.content}
          </Text>
          <Text
          onPress={() => this.toggleNumberOfLines(index)}
          style={{ color: 'blue',paddingLeft:10 }}>
          {this.state.textShown === index ? 'read less...' : 'read more...'}
       
          >
          
                </Text>
            </View>
            </View>
          
          
</View>
        )}
      }
        keyExtractor={item => item.id}
      />
    </View>
    );
    }
  }
}



const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    
    paddingLeft:65
    
  },
  card:{
    
    marginTop:30,
    borderRadius:15,
    borderColor:'black',
    borderWidth:2,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"powderblue",
    shadowColor:'black',
    shadowRadius:10,
    shadowOpacity:0.5
  }
});