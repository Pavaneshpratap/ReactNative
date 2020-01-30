import React , {Component} from 'react'
import {Text,View,Image,ScrollView,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import {vh,vw} from '../../src/Constants'
import Searchimages from './Searchimages'
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Searchpage extends Component {
   
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1,backgroundColor:'#fcfcfc',flexDirection:"row",flexDirection:'row',borderColor:'lightgrey',borderBottomWidth:1}}>
                    <Image
                    style={styles.search}
                    source={{uri:"https://www.searchpng.com/wp-content/uploads/2019/03/Search-Icon-PNG-Image-715x715.png"}}
                    />
                    <TextInput
                    placeholder="Search"
                    style={styles.txtinput}/>
                    <Image
                    style={styles.scnner}
                    source={{uri:"https://cdn.iconscout.com/icon/premium/png-256-thumb/barcode-scanner-21-1055027.png"}}/>
                </View>
                <View style={{flex:0.06,flexDirection:"row",alignItems:"center"}}>
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity>
                    <View style={styles.views}>
                    <Image
                    style={{height:vh(20),width:vw(20)}}
                    source={{uri:"https://cdn.freebiesupply.com/logos/thumbs/2x/igtv-logo-black-thumb.png"}}/>
                    <Text style={styles.viewstext}>
                        IGTV
                    </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Shoppage')}>
                    <View style={styles.views}>
                    <Image
                    style={{height:vh(20),width:vw(20)}}
                    source={require('../../assets/Shopbeg.png')}/>
                    
                    <Text style={styles.viewstext}>
                        Shop
                    </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{}}
                    >
                    <View style={[styles.views,{width:vw(50)}]}>
                    
                    <Text style={styles.viewstext}>
                        Food
                    </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={[styles.views,{width:vw(120)}]}>
                    
                    <Text style={styles.viewstext}>
                        Sceince & Tech
                    </Text>
                    </View>
                    <View style={styles.views}>
                    
                    <Text style={styles.viewstext}>
                        Games
                    </Text>
                    </View>
                    <View style={styles.views}>
                    
                    <Text style={styles.viewstext}>
                        Animals
                    </Text>
                    </View>
                    <View style={[styles.views,{width:vw(140)}]}>
                    
                    <Text style={styles.viewstext}>
                        TV and Appliances
                    </Text>
                    </View>
                    </ScrollView>
                    
                </View>
                <Searchimages/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    search:{
        height:vh(30),
        width:vw(30),
        marginTop:vh(35),
        marginLeft:vw(10)
    },
    txtinput:{
        height:vh(35),
        fontSize:vh(20),
        paddingTop:vh(1),
        paddingLeft:vh(10),
        width:vw(290),
        marginTop:vh(33)
    },
    scnner:{
        height:vh(30),
        width:vw(30),
        marginTop:vh(35)
    },
    views:{
        height:vh(30),
        width:vw(80),
        flexDirection:'row',
        marginLeft:vw(10),
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:'black',
        borderRadius:vh(5)
    },
    viewstext:{
        fontSize:vh(15)
    }
})