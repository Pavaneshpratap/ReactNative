import React, {Component} from 'react';
import {Text,View,Image,ScrollView,StyleSheet} from 'react-native';

export default class UITask extends Component {
    static navigationOptions = {
        title: 'UI Task',
      };
    render() {
      return (
          <ScrollView>
        <View style={{flex:1,backgroundColor:'lightgrey'}}> 
            <View style={{flex:0.2,flexDirection:'row',borderLeftWidth:2,borderRightWidth:2,borderBottomWidth:2,backgroundColor:'#342'
            }}>
                <Image 
                style={{height:25,width:25,marginLeft:10,marginTop:40}}
                source={require('../assets/arrow.png')}/>
                <Text style={{paddingLeft:90,fontSize:20,fontWeight:'bold',color:'white',paddingTop:45}}>
                    Hall Of Fame
                </Text>
                <View style={{marginTop:40,flexDirection:"row",justifyContent: 'center',alignItems:'center',marginLeft:35,borderRadius:10,backgroundColor:'white',width:90,height:30}}>
               <Image
               style={{marginLeft:2,height:20,width:20}}
                source={require('../assets/plus1.png')}/>
               
                <Text>
                    7/15 Votes
                </Text>
                </View>
                

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.Text}>
                    January
                </Text>
                <Text style={{fontSize:15,paddingTop:10,paddingRight:15}}>
                    2 Challenges
                </Text>
            </View>

            <View>
                <View style={{marginLeft:12,marginTop:10}}>
                    <View style={{backgroundColor:'#342',borderColor:'black',borderWidth:2,shadowColor:'black',shadowRadius:10,shadowOpacity:0.2,flexDirection:'row',justifyContent:'space-between',borderRadius:20,height:170,width:390}}>
                        <View style={styles.View}>
                            <Image 
                            style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                            source={{uri:'https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                            <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                                <Image style={{width:20,height:20}}
                                source={require('../assets/first.png')}/>
                                <Text>
                                    1st
                                </Text>
                            </View>
                            

                        </View>
                        <View style={styles.View}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                         <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:47,borderRadius:10}}>
                         <Image style={{width:20,height:20}}
                                source={require('../assets/second.png')}/>
                                <Text>
                                    2nd
                                </Text>
                        </View>       
                        </View>
                        <View style={{marginTop:10,alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'black',shadowColor:'black',shadowRadius:15,shadowOpacity:0.7,height:90,borderRadius:15,width:90}}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                        <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                        <Image style={{width:20,height:20}}
                                source={require('../assets/third.png')}/>
                                <Text>
                                    3rd
                                </Text>
                        </View>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:'white',height:70,width:270,shadowColor:'black',shadowRadius:3,shadowOpacity:0.5,marginLeft:45,position:'absolute',marginTop:125,borderRadius:30}}>
                        
                            

                        <Text style={{fontSize:18,fontWeight:'bold',paddingTop:15,paddingLeft:20}}>
                            Jungle Safari
                        </Text>
                        <View style={{marginLeft:15,flexDirection:'row'}}>
                        <Image style={{height:20,width:20}}
                        source={require('../assets/timer.png')}/>
                        <Text style={{paddingLeft:2,fontSize:15}}>
                            1st Jan 2018 - 20th Jan 2018
                        </Text>
                        </View>
                        
                    </View>
                    
                       
                   </View>
                   <View style={{marginLeft:10,marginTop:40,backgroundColor:'#342',borderColor:'black',borderWidth:2,shadowColor:'black',shadowRadius:10,shadowOpacity:0.2,flexDirection:'row',justifyContent:'space-between',borderRadius:20,height:170,width:390}}>
                        <View style={styles.View}>
                            <Image 
                            style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                            source={{uri:'https://images.pexels.com/photos/2608982/pexels-photo-2608982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                            <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                                <Image style={{width:20,height:20}}
                                source={require('../assets/first.png')}/>
                                <Text>
                                    1st
                                </Text>
                            </View>
                            

                        </View>
                        <View style={styles.View}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/2235921/pexels-photo-2235921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                         <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:47,borderRadius:10}}>
                         <Image style={{width:20,height:20}}
                                source={require('../assets/second.png')}/>
                                <Text>
                                    2nd
                                </Text>
                        </View>       
                        </View>
                        <View style={{marginTop:10,alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'black',shadowColor:'black',shadowRadius:15,shadowOpacity:0.7,height:90,borderRadius:15,width:90}}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/173086/pexels-photo-173086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                        <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                        <Image style={{width:20,height:20}}
                                source={require('../assets/third.png')}/>
                                <Text>
                                    3rd
                                </Text>
                        </View>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:'white',height:70,width:270,shadowColor:'black',shadowRadius:3,shadowOpacity:0.5,marginLeft:45,position:'absolute',marginTop:350,borderRadius:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingTop:15,paddingLeft:20}}>
                            Insects Race 
                        </Text>
                        <View style={{marginLeft:15,flexDirection:'row'}}>
                        <Image style={{height:20,width:20}}
                        source={require('../assets/timer.png')}/>
                        <Text style={{paddingLeft:2,fontSize:15}}>
                            1st Jan 2018 - 20th Jan 2018
                        </Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
                <Text style={styles.Text}>
                    February
                </Text>
                <Text style={{fontSize:15,paddingTop:10,paddingRight:15}}>
                    2 Challenges
                </Text>
            </View>






                    <View style={{marginLeft:10,marginTop:10,backgroundColor:'#342',borderColor:'black',borderWidth:2,shadowColor:'black',shadowRadius:10,shadowOpacity:0.2,flexDirection:'row',justifyContent:'space-between',borderRadius:20,height:170,width:390}}>
                        <View style={styles.View}>
                            <Image 
                            style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                            source={{uri:'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                            <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                                <Image style={{width:20,height:20}}
                                source={require('../assets/first.png')}/>
                                <Text>
                                    1st
                                </Text>
                            </View>
                            

                        </View>
                        <View style={styles.View}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/3084567/pexels-photo-3084567.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}/>
                         <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:47,borderRadius:10}}>
                         <Image style={{width:20,height:20}}
                                source={require('../assets/second.png')}/>
                                <Text>
                                    2nd
                                </Text>
                        </View>       
                        </View>
                        <View style={{marginTop:10,alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'black',shadowColor:'black',shadowRadius:15,shadowOpacity:0.7,height:90,borderRadius:15,width:90}}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/209652/pexels-photo-209652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                        <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                        <Image style={{width:20,height:20}}
                                source={require('../assets/third.png')}/>
                                <Text>
                                    3rd
                                </Text>
                        </View>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:'white',height:70,width:270,shadowColor:'black',shadowRadius:3,shadowOpacity:0.5,marginLeft:45,position:'absolute',marginTop:600,borderRadius:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingTop:15,paddingLeft:20}}>
                           Roads Travelled
                        </Text>
                        <View style={{marginLeft:15,flexDirection:'row'}}>
                        <Image style={{height:20,width:20}}
                        source={require('../assets/timer.png')}/>
                        <Text style={{paddingLeft:2,fontSize:15}}>
                            1st Jan 2018 - 20th Jan 2018
                        </Text>    
                        </View>  
                        </View>
                   


                    <View style={{marginLeft:10,marginTop:50,backgroundColor:'#342',borderColor:'black',borderWidth:2,shadowColor:'black',shadowRadius:10,shadowOpacity:0.2,flexDirection:'row',justifyContent:'space-between',borderRadius:20,height:170,width:390}}>
                        <View style={styles.View}>
                            <Image 
                            style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                            source={{uri:'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                            <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                                <Image style={{width:20,height:20}}
                                source={require('../assets/first.png')}/>
                                <Text>
                                    1st
                                </Text>
                            </View>
                            

                        </View>
                        <View style={styles.View}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/2116721/pexels-photo-2116721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                         <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:47,borderRadius:10}}>
                         <Image style={{width:20,height:20}}
                                source={require('../assets/second.png')}/>
                                <Text>
                                    2nd
                                </Text>
                        </View>       
                        </View>
                        <View style={{marginTop:10,alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'black',shadowColor:'black',shadowRadius:15,shadowOpacity:0.7,height:90,borderRadius:15,width:90}}>
                        <Image 
                        style={{height:90,width:90,borderRadius:15,borderColor:'black',borderWidth:3}}
                        source={{uri:'https://images.pexels.com/photos/681334/pexels-photo-681334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
                        <View style={{backgroundColor:'white',paddingTop:5,flexDirection:'row',position:'absolute',marginTop:75,height:30,width:45,borderRadius:10}}>
                        <Image style={{width:20,height:20}}
                                source={require('../assets/third.png')}/>
                                <Text>
                                    3rd
                                </Text>
                        </View>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:'white',height:70,width:270,shadowColor:'black',shadowRadius:3,shadowOpacity:0.5,marginLeft:45,position:'absolute',marginTop:810,borderRadius:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingTop:15,paddingLeft:20}}>
                            Cities Covered
                        </Text>
                        <View style={{marginLeft:15,flexDirection:'row'}}>
                        <Image style={{height:20,width:20}}
                        source={require('../assets/timer.png')}/>
                        <Text style={{paddingLeft:2,fontSize:15}}>
                            1st Jan 2018 - 20th Jan 2018
                        </Text>
                        </View>
                    </View>
                   
                   
                   
                   
            </View>
            
            
        </View>
        

        
        </ScrollView>
        
      )
    };
}

const styles = StyleSheet.create({
    Text:{
        paddingLeft:15,paddingTop:10,fontSize:20,fontWeight:'bold'
    },
    View:{marginTop:10,marginLeft:10,alignItems:'center',backgroundColor:'black',
    shadowColor:'black',shadowRadius:15,shadowOpacity:0.8,height:90,
    borderRadius:15,width:90}
})