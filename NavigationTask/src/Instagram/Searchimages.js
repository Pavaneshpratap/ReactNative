import React, {Component} from 'react'
import {Text,View,Image,FlatList,StyleSheet} from 'react-native'
import {vh,vw} from '../Constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'

export class SearchImages extends Component {

    constructor(props){
        super(props);
        this.state={
            apidata:[],
            count:0
        }
    }



    componentDidMount() {
        //console.warn("Waoo!");
       fetch('https://randomuser.me/api/?page=3&results=100')
          .then((response) => response.json())
          .then(responseJson => {
            // console.warn(responseJson.results[0]);
            this.setState({
                apidata: responseJson.results,
            })
            // console.warn(this.state.apidata);
            // console.warn("Waoo!");
            
    
    // console.warn("dsfsdfd",this.state.dataSource[0].picture.large);
    
          })
          .catch((error) => {
            console.log(error)
          });
    
    
      }

      updateqty() {
          console.warn('enter hua');
          
        this.setState((state) => ({
          count: state.count + 11
        }))
    
    
      }


      renderItem = ({ item }) => {
        return (
            <View>
            <View style={{flexDirection:'row',marginTop:vh(3),marginLeft:vw(3)}}>
                <View>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count].picture.large,namess:this.state.apidata[this.state.count].name.first,namelast:this.state.apidata[this.state.count].name.last})}
                    >
                    <Image
                    style={[styles.imgs,{backgroundColor:"lightgreen"}]}
                    source={{uri:this.state.apidata[this.state.count].picture.large}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+1].picture.large,namess:this.state.apidata[this.state.count+1].name.first,namelast:this.state.apidata[this.state.count+1].name.last})}>
                     <Image
                    style={[styles.imgs,{backgroundColor:"green"}]}
                    source={{uri:this.state.apidata[this.state.count+1].picture.large}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+2].picture.large,namess:this.state.apidata[this.state.count+2].name.first,namelast:this.state.apidata[this.state.count+2].name.last})}>
                <Image
                    style={styles.bigimg}
                    source={{uri:this.state.apidata[this.state.count+2].picture.large}}/>
                </TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+3].picture.large,namess:this.state.apidata[this.state.count+3].name.first,namelast:this.state.apidata[this.state.count+3].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"lightgreen"}]}
                    source={{uri:this.state.apidata[this.state.count+3].picture.large}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+4].picture.large,namess:this.state.apidata[this.state.count+4].name.first,namelast:this.state.apidata[this.state.count+4].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"green"}]}
                    source={{uri:this.state.apidata[this.state.count+4].picture.large}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+5].picture.large,namess:this.state.apidata[this.state.count+5].name.first,namelast:this.state.apidata[this.state.count+5].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"lightblue"}]}
                    source={{uri:this.state.apidata[this.state.count+5].picture.large}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+6].picture.large,namess:this.state.apidata[this.state.count+6].name.first,namelast:this.state.apidata[this.state.count+6].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"lightblue"}]}
                    source={{uri:this.state.apidata[this.state.count+6].picture.large}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+7].picture.large,namess:this.state.apidata[this.state.count+7].name.first,namelast:this.state.apidata[this.state.count+7].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"lightgreen"}]}
                    source={{uri:this.state.apidata[this.state.count+7].picture.large}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+8].picture.large,namess:this.state.apidata[this.state.count+8].name.first,namelast:this.state.apidata[this.state.count+8].name.last})}>
                    <Image
                    style={[styles.imgs,{backgroundColor:"green"}]}
                    source={{uri:this.state.apidata[this.state.count+8].picture.large}}/>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+9].picture.large,namess:this.state.apidata[this.state.count+9].name.first,namelast:this.state.apidata[this.state.count+9].name.last})}>
                <Image
                    style={styles.bigimg}
                    source={{uri:this.state.apidata[this.state.count+9].picture.large}}/>
                   </TouchableOpacity>
                    <View>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+10].picture.large,namess:this.state.apidata[this.state.count+10].name.first,namelast:this.state.apidata[this.state.count+10].name.last})}>
                    <Image
                    style={[styles.imgs,{marginLeft:vw(3),backgroundColor:"lightgreen"}]}
                    source={{uri:this.state.apidata[this.state.count+10].picture.large}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Showimage',{getpic:this.state.apidata[this.state.count+11].picture.large,namess:this.state.apidata[this.state.count+11].name.first,namelast:this.state.apidata[this.state.count+11].name.last})}>
                     <Image
                    style={[styles.imgs,{marginLeft:vw(5),backgroundColor:"green"}]}
                    source={{uri:this.state.apidata[this.state.count+11].picture.large}}/>
                    </TouchableOpacity>
                    {console.warn(this.state.count)}
                    
                    </View>

                </View>
                </View>
                
            
    
    
        )

        
    
    
      }

    render(){
        return(
            <View style={{flex:0.85}}>
                <FlatList
        //   style={{height:vh(1),marginTop:vh(-10)}}
          data={this.state.apidata}
          renderItem={this.renderItem}
          onEndReached={() => {
            this.updateqty()
          }}
          onEndReachedThreshold={0.01}
            />
        
                
            </View>
        );
    }
}

export default withNavigation (SearchImages)

const styles = StyleSheet.create({
    imgs:{
        height:vh(120),
        width:vw(120),
        marginBottom:vh(3)
    },
    bigimg:{
        height:vh(244),
        width:vw(244),
        marginLeft:vw(3),
        backgroundColor:"skyblue"
    }
})