import React from 'react';
import {Text, View,StyleSheet,Image,TouchableOpacity} from 'react-native';


export default class TextChild extends React.Component{
    render() {
      return (
        <View style={{flex:0.7,flexDirection:'column',backgroundColor:'skyblue',borderRadius:10}}>
            
            
            <View style={{flexDirection:'row'}}> 

                    <View>
                    <Text style={styles.Text}>
                        Road less traveled
                    </Text>
                    <Text style={{paddingLeft:10}}>
                        O 1 day left
                    </Text>
                    </View>
            
                    <View style={{marginTop:10}}>
                    <Text style={{paddingLeft:110}}>
                        Total Price
                    </Text>
                    <Text style={{fontWeight:'bold',fontSize:15,paddingLeft:110}}>
                        $220
                    </Text>
                    </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            
                    <View style={{backgroundColor:'powderblue',flexDirection:'row',shadowColor:'black',shadowRadius:10,shadowOpacity:0.5,width:100,height:60,marginLeft:10,borderRadius:10}}>
                           
                           <Image style={{height:30,width:30,marginTop:10}}
                           source={require('../assets/first.png')}/>
                            <View>
                            <Text style={{paddingLeft:10,marginTop:10}}>
                                1st Prize
                            </Text>
                            <Text style={{paddingLeft:10,fontSize:15,fontWeight:'bold'}}>
                                $125
                            </Text>
                            </View>
                    </View>
                    <View style={{backgroundColor:'powderblue',flexDirection:'row',shadowColor:'black',shadowRadius:10,shadowOpacity:0.5,width:100,height:60,borderRadius:10}}>
                    <Image style={{height:30,width:30,marginTop:10}}
                           source={require('../assets/second.png')}/>
                            <View>
                            <Text style={{paddingLeft:6,marginTop:10}}>
                                2nd Prize
                            </Text>
                            <Text style={{paddingLeft:6,fontSize:15,fontWeight:'bold'}}>
                                $60
                            </Text>
                            </View>
                    </View>
                    <View style={{backgroundColor:'powderblue',flexDirection:'row',shadowColor:'black',shadowRadius:10,shadowOpacity:0.5,width:100,height:60,marginRight:10,borderRadius:10}}>
                    <Image style={{height:30,width:30,marginTop:10}}
                           source={require('../assets/third.png')}/>
                            <View>
                            <Text style={{paddingLeft:6,marginTop:10}}>
                                3rd Prize
                            </Text>
                            <Text style={{paddingLeft:6,fontSize:15,fontWeight:'bold'}}>
                                $35
                            </Text>
                            </View>
                            
                    </View>
                    

            </View>

            <View style={{flexDirection:'row'}}>

                <Image style={{height:20,width:20,marginTop:12}} 
                source={require('../assets/Description.png')} />
            <View>
            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10,paddingLeft:5}}>
                Description
            </Text>
            <Text style={{paddingLeft:5}}>
            Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include short stays between successive movements.
            </Text>
            </View>

            </View>
            <View style={{flexDirection:'row'}}>
                   <View>
                   <Image 
                    style={{marginTop:10}}
                    source={require('../assets/Checkbox.png')}/>

                    <Image 
                    style={{marginTop:14}}
                    source={require('../assets/Check.png')}/>
                    <Image 
                    style={{marginTop:44}}
                    source={require('../assets/Check.png')}/>
                    <Image 
                    style={{marginTop:42}}
                    source={require('../assets/Check.png')}/>
                    
                   </View>


                <View>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10,paddingLeft:5}}>
                        Rules
                    </Text>
                    <Text style={{paddingLeft:5,paddingTop:10}}>
                    You only live once. You’re going to get chances to do wild things you’ve never dreamed of doing when you travel. Don’t hold back.
                    </Text>
                    <Text style={{paddingLeft:5,paddingTop:10}}>
                    
                    Why give your money to the banks? Get an ATM card doesn’t charge any fees and use that extra money for more traveling.
                    </Text>
                    <Text style={{paddingLeft:5,paddingTop:10}}>
                    Travel credit cards come with tons of perks and huge bonuses that can be redeemed for free flights right . Plus, they get you the best exchange rate on your purchases.
                    </Text>
                </View>
            </View>

            
            <View style={{flexDirection:"row"}}>
            <View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginLeft:10,backgroundColor:'powderblue',width:100,height:50,shadowColor:'black',shadowRadius:10,shadowOpacity:0.5,borderRadius:10}}>
                  <Text style={{fontWeight:'bold'}}> 
                  View Gallery
                      </Text>  
            </View>
            <TouchableOpacity style={{paddingLeft:200,marginTop:10}}>
                   <Image source={require('../assets/plus.png')} />
            </TouchableOpacity>

            </View>
            



        </View>
        
      )
    };

}

const styles = StyleSheet.create({
        Text:{
            fontSize:20,
            fontWeight:'bold',
            paddingLeft:10,
            paddingTop:10
        }
})
