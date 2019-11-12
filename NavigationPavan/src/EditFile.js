import React,{Component} from 'react';
import {Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class EditFile extends Component{
    constructor(props){
        super(props);
        this.state={
            fname1:this.props.navigation.state.params.fname,
            lname1:this.props.navigation.state.params.lname,
            imageArray1:this.props.navigation.state.params.image,
        }
    }

    result=()=>{
        this.props.navigation.state.params.getData(this.state.fname1,this.state.lname1,this.state.imageArray1)
        this.props.navigation.goBack()
    }



    pickSingle() {

        ImagePicker.openPicker({
          width: 200,
          height: 200,
          cropping: true,
        }).then( imageUrl => {
          this.setState({imageArray1 : imageUrl.path})
          console.log("datahjasvxhja",this.state.imageArray1.path)
        }).catch(e => {
          console.log(e);
          Alert.alert(e.message ? e.message : e);
        });
      }
        




    render(){
        return(
            <View style={{flex:1,marginTop:20,marginLeft:20 }}>
           <Text style={{fontSize:20}}>
          First Name
           </Text>
           <TextInput 
        onChangeText={fname1=>this.setState({fname1})
        }
        style={{fontSize:15,paddingLeft:20,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
            <Text>
                {this.props.navigation.getParam('fname')}
            </Text>
        </TextInput>
        <Text style={{fontSize:20,marginTop:20}}>
          Last Name
        </Text>
        <TextInput 
        onChangeText={
            lname1=>this.setState({lname1})
        }
        style={{fontSize:15,paddingLeft:20,height:40,borderRadius:10,backgroundColor:'lightgrey',marginRight:20,marginTop:10}}>
            <Text>
                {this.props.navigation.getParam('lname')}
            </Text>
        </TextInput>
        <TouchableOpacity 
        style={{backgroundColor:'green',height:60,marginLeft:100,borderRadius:20,marginTop:30,justifyContent:'center',alignItems:'center',width:180}}
        onPress={this.result}>
          <Text style={{fontSize:30,fontWeight:'bold'}}>
            Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.pickSingle(false)}>
        <Image
        style={{height:150,
            borderColor:'black',
            borderWidth:2,
            width:150,
            backgroundColor:"black",
            borderRadius:20,
            marginTop:10,
            marginLeft:120}}
            
        source={{uri:this.state.imageArray1}}
        
        />
        </TouchableOpacity>
      </View>
        );
    }
}
