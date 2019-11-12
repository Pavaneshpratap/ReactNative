import React, {Component} from 'react';
import {Text,View,Image,TouchableOpacity,FlatList,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EditFile from './src/EditFile'
import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';



const options = {
  keyPrefix: "uploads/",
  bucket: "appinventiv-development",
  region: "us-east-1",
  accessKey: "AKIAJ3UHQTWRRT2AH3RA",
  secretKey: "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",
  successActionStatus: 201
}


class NavigationPavan extends Component{
  constructor(props){

    super(props);
    this.state={
      fname:'',
      lname:'',
      imageArray:'',
      imageKey: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      
    }
  }

  uploadImage = (file,options) => {
    RNS3.put(file, options).then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      console.log(response.body);
      console.log('uploaded file')
    });
  }


  pickSingle() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then( imageUrl => {
      // this.setState({imageArray : imageUrl.path})
      const file = {
        uri: 'file://' + imageUrl.path,
        name: 'image.png',
        type: 'image/png'
      }
      this.uploadImage(file,options);
      console.log("datahjasvxhja",this.state.imageArray.path)
    })
  }


  getData=(fn,ln,img) =>{
    this.setState({
      imageArray:img,
      fname:fn,
      lname:ln
    })
  }

  

  render(){
    return(
      <View style={{flex:1,marginTop:20,marginLeft:20 }}>
        <Text style={{fontSize:20}}>
          First Name
        </Text>
        <TextInput 
        onChangeText={
          fname => this.setState({fname})
        }
        style={{fontSize:15,height:40,paddingLeft:20,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
        </TextInput>
        <Text style={{fontSize:20,marginTop:20}}>
          Last Name
        </Text>
        <TextInput 
         onChangeText={
          lname => this.setState({lname})
        }
        style={{fontSize:15,paddingLeft:20,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
          {/* <Text>
            {this.props.navigation.getParam('lname1')}
          </Text> */}
        </TextInput>
        <TouchableOpacity 
        style={{backgroundColor:'skyblue',height:60,marginLeft:100,
        borderRadius:20,marginTop:30,justifyContent:'center',alignItems:'center',
        width:180}}
        onPress={() => this.props.navigation.push('Edit',
        {fname:this.state.fname, 
        lname:this.state.lname,
        image:this.state.imageArray,
        getData:this.getData
        }
        )}>
          <Text style={{fontSize:30,fontWeight:'bold'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(false)}>
        <Text style ={{marginTop:50,
          fontSize:20,
          fontWeight:'bold',
          marginLeft:150}}>
            Get Pic
            </Text>
          
        </TouchableOpacity>
        <Image source = {{uri:this.state.imageArray}}
         style = {{height:150,
         borderColor:'black',
         borderWidth:2,
         width:150,
         backgroundColor:"black",
         borderRadius:20,
         marginTop:10,
         marginLeft:120}}/>
         <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }} >
        <TouchableOpacity onPress={this.pickSingle}>
          <Image
            style={{ height: 200, width: 350 }}
            source={{ uri: this.state.imageKey }}
          />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:NavigationPavan,
  Edit:EditFile
},
{
  initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);