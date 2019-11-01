import React, {Component} from 'react';
import {Text,Image,View,TouchableOpacity,FlatList} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImagePicker1 extends Component {
  constructor(props){
    super(props);
    this.state={
      imageArray:[],
      imageArray2:'',
      isclicked:false,
    }
  }

  pickSingle() {

    ImagePicker.openPicker({
      width: 200,
      height: 200,
      multiple:true,
      cropping: true,
    }).then( imageUrl => {
      console.log(imageUrl)
      this.setState({imageArray : imageUrl})
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  



  render(){
    console.log("render" + this.state.imageArray.length);
    return(
      <View style={{flex:1,backgroundColor:'skyblue'}}>
        <TouchableOpacity style={{marginTop:50}}
        onPress={()=>{
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            this.setState({
              imageArray2:image.path
            }),
            console.warn(this.state.imageArray2)
          });
        }}>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:120}}>
          Open Camera
          </Text>
          <Image style={{height:150,width:150,backgroundColor:'grey',
          borderRadius:20,borderColorL:'black',borderWidth:2,marginLeft:110}}
          source={{uri:this.state.imageArray2}}/>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(false)}>
        <Text style ={{marginTop:50,
          fontSize:20,
          fontWeight:'bold',
          marginLeft:120}}>
            Get Pics
            </Text>
          
        </TouchableOpacity>
        <FlatList
        data = {this.state.imageArray}

        renderItem = {({item}) => 
        <View>
        <Image source = {{uri:item.sourceURL}}
         style = {{height:150,
         borderColor:'black',
         borderWidth:2,
         width:150,
         backgroundColor:"black",
         borderRadius:20,
         marginTop:10,
         marginLeft:90}}/>
      </View>}
      
        />
      </View>
    );
  }

}