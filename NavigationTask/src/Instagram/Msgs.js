import React , {Component} from 'react'
import {Text,View,Image,FlatList,TouchableOpacity,ScrollView,StyleSheet,TextInput} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { vh, vw } from '../Constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class Msgs extends Component {

    constructor(props){
        super(props);
        this.state={
            dataSource:[]
        }
    }



    componentDidMount() {
        return fetch('https://randomuser.me/api/?page=3&results=10')
          .then((response) => response.json())
          .then(responseJson => {
            this.setState({
              dataSource: responseJson.results,
            })
    
    // console.warn("dsfsdfd",this.state.dataSource[0].picture.large);
    
          })
          .catch((error) => {
            console.log(error)
          });
    
    
      }


      renderItem = ({ item }) => {
        return (
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Chat',{otherParam:item.name.first,otherParams:item.name.last,pic:item.picture.large})}
            
            >
            <View style={{flexDirection:"row",
                        justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
            <Image
            style={styles.img}
            source={{uri:item.picture.large}}/>   
            <View>
            <Text style={{fontSize:vh(18),marginTop:vh(20)}}>
                {item.name.first}_{item.name.last}
            </Text>
            <Text style={{marginTop:vh(3),fontSize:vh(13),opacity:0.5}}>
                Active Yesterday
            </Text>
            </View>
            </View>
            <Image
            style={styles.cameraicon}
            source={{uri:"https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Camera-Icon-PNG-1024x1024.png"}}
            />

        </View>
        </TouchableOpacity>
    
    
        )
    
    
      }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.15,flexDirection:"row",backgroundColor:'#fcfcfc',borderColor:'#edebeb',borderBottomWidth:1}}>
                   <TouchableOpacity
                   onPress={()=>this.props.navigation.goBack()}>
                    <Image
                    style={{height:vh(20),width:vw(40),marginTop:vh(50)}}
                    source={{uri:"https://static.thenounproject.com/png/390380-200.png"}}/>
                    </TouchableOpacity>
                    <Text style={{marginTop: vh(48), fontSize: vh(20), fontWeight: '600', marginLeft: vw(1) }}>
                        Direct
                    </Text>
                    <Image
                    style={{height:hp('3.5%'),width:hp('3.5%'),marginLeft:vw(180),marginTop:vh(47)}}
                    source={{uri:"https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-35-512.png"}}
                    />
                    <Image
                    style={{height:hp('2.5%'),width:hp('2.5%'),marginLeft:vw(32),marginTop:vh(50)}}
                    source={{uri:"http://cdn.onlinewebfonts.com/svg/img_194863.png"}}
                    />

                </View>
                <View style={{flex:0.1}}>
                <TextInput
                placeholder='Search'
                style={styles.txtinput}
                />
                <Image
                    style={styles.search}
                    source={{uri:"https://www.searchpng.com/wp-content/uploads/2019/03/Search-Icon-PNG-Image-715x715.png"}}
                    
                    /> 
                    </View>
                    
                   <TouchableOpacity
                   onPress={()=>alert('hello')}>
                    <Text style={{margin:vh(20),fontSize:vh(20),marginTop:vh(25)}}>
                        Messages
                    </Text>
                    </TouchableOpacity>
                    
                    <FlatList
          style={{height:vh(1),marginTop:vh(-10)}}
          data={this.state.dataSource}
          renderItem={this.renderItem}


        />
        
        <View style={styles.bluecamera}>
            <Image
            style={{height:vh(30),width:vw(30),marginTop:vh(-30)}}
            source={{uri:'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/20-512.png'}}
            />
            <Text style={{color:'#26ADFE',fontSize:vh(18),fontWeight:"bold",marginTop:vh(-30),marginLeft:vh(10)}}>
                Camera
            </Text>
        </View>
                    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    img:{
        height:hp('8%'),
        width:hp('8%'),
        borderRadius:hp('4%'),
        margin:vh(10),
        marginLeft:vw(20)
    },
    cameraicon:{
        height:vh(30),
        opacity:0.5,
        width:vw(30),
        marginTop:vh(20),
        marginRight:vw(10)
    },
    txtinput:{
        height:vh(40),
        fontSize:vh(20),
        paddingTop:vh(1),
        paddingLeft:vw(40),
        width:vw(340),
        margin:vh(15),
        borderRadius:vh(8),
        borderWidth:1,
        borderColor:"lightgrey"
    },
    search:{
        height:vh(25),
        width:vw(25),
        opacity:0.3,
        position:"absolute",
        marginLeft:vw(20),
        marginTop:vh(22)
    },
    bluecamera:{
        flex:0.14,
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'#edebeb',
        justifyContent:"center",
        alignItems:"center"
    }
  })