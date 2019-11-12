import React, { Component } from 'react';
import { Text, View, Image,TouchableOpacity, FlatList, TextInput } from 'react-native';
import ToDoList from '../../../Store/Apidata'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';
import Apidata from '../../../Store/Apidata';
import CheckBox from 'react-native-check-box'


@observer
class TODO extends Component {
    static navigationOptions = {
        title: 'API HIT BY MOBX',
    
    
      };

      constructor(props) {
        super(props);
        this.state = {
          num: 1
    
        }
      }
      


    callApi() {
        this.setState(() => {
            return { num: this.state.num + 1 }
          },
      
      
          )
        return fetch('https://reqres.in/api/users?page=' + this.state.num)
          .then( (response) => response.json())
          .then((responseJson) => {
              Apidata.list=Apidata.list.concat(responseJson.data)
              //console.warn(Apidata.list);
              
          })
      }
    
      componentDidMount(){
    
        this.callApi()
      }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
        
        <View style={{marginTop:20}}>
          <FlatList
             style={{ marginBottom:40}}
            data={ToDoList.list}
            
            keyExtractor={(item, index) => Math.random().toString()}
            renderItem={({ item , index}) => (
              
              <View style={{marginBottom:20,flexDirection:'row',backgroundColor:'#9dcdf5'}} >
                
                <Image
                style={{height:100,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,width:100, borderRadius:50,margin:10}}
                source={{uri:item.avatar}}
                />
                <View>
                <Text style={{ marginLeft: 10, color: 'black' , fontSize:20}} > {item.first_name} {item.last_name} </Text>
                <Text style={{ marginLeft: 10, color: 'black' , fontSize:20}} >
                    {item.email}
                </Text>

                <TouchableOpacity 
                onPress={()=>{
                    Apidata.Uniqueid=item.id
                    // console.warn(Apidata.Uniqueid)
                    Apidata.double()
                }}
                style={{marginLeft:170,borderRadius:20,marginTop:40,height:hp('3%'),width:wp('20%'),backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>
                        Delete
                    </Text>
                </TouchableOpacity> 
                <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
   // leftText={"CheckBox"}
/>
                
                </View>
                
              </View>
            )}
            onEndReached={() => {
                if (this.state.num <= 2) {
                  this.callApi()
                } else {
                  return false
                }
              }}
              onEndReachedThreshold={0.01}
     />
        </View>

      </View>
    );
  }
}

export default TODO;
