import React , {Component} from 'react'
import {Text, View, Image,TextInput, ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import {vh,vw} from '../Constants'

export default class Editprofile extends Component {
    render(){
        return(
            
                
            <View style={{flex:1}}>
            
                <View 
                style={{flex:0.103,flexDirection:'row',backgroundColor:'#fcfcfc',borderColor:'lightgrey',borderBottomWidth:1}}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}>
                    <Image
                    style={styles.crossimg}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Times_symbol.svg/640px-Times_symbol.svg.png'}}
                    />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Edit Profile
                    </Text>
                    <TouchableOpacity
                    onPress={()=>alert('will update')}>
                    <Image
                    style={styles.right}
                    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/OOjs_UI_icon_check-progressive.svg/768px-OOjs_UI_icon_check-progressive.svg.png"}}
                    />
                    </TouchableOpacity>
                </View>
                
                <ScrollView style={{flex:0.9}}>
                <View>
                <Image
                style={styles.profile}
                source={require('../../assets/profilepic.jpg')}/>
                <TouchableOpacity>
                <Text style={styles.txt}>
                    Change Profile Photo
                </Text>
                </TouchableOpacity>
                <TextInput
                placeholder="Name"
                style={styles.info}/>
                <TextInput
                placeholder="Username"
                style={styles.info}/>
                <TextInput
                placeholder="Website"
                style={styles.info}/>
                <TextInput
                placeholder="Bio"
                style={styles.info}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize:vh(20),color:"#3066CE",paddingLeft:vw(15)}}>
                        Switch to Professional Account
                    </Text>
                </TouchableOpacity>
                <View style={{marginTop:vh(20),borderTopWidth:1,marginBottom:vh(20),borderColor:"lightgrey"}}>
                    <Text style={{fontSize:vh(20),marginLeft:vw(15),marginTop:vh(30)}}>
                        Profile Information
                    </Text>
                    <TextInput
                    placeholder="E-mail Address"
                    style={styles.info}
                    />
                    <TextInput
                    placeholder="Phone number"
                    style={styles.info}
                    />
                    <TextInput
                    placeholder="Gender"
                    style={styles.info}
                    />
                </View>


                </View>
                </ScrollView>
                
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    crossimg:{
        height:vh(60),
        width:vw(60),
        marginTop:vh(30),
        marginLeft:vw(-10)
    },
    title:{
        marginTop: vh(48), 
        fontSize: vh(20), 
        fontWeight: '600'
    },
    right:{
        height:vh(30),
        width:vw(30),
        marginTop:vh(45),
        marginLeft:vh(180)
    },
    txt:{
        fontSize:vh(20),
        color:"#3066CE",
        marginLeft:vw(90),
        marginTop:vh(10)
    },
    profile:{
        height:vh(120),
        width:vh(120),
        borderRadius:vh(60),
        marginLeft:vw(120),
        marginTop:vh(15)
    },
    info:{
        height:vh(40),
        width:vw(340),
        fontSize:vh(20),
        marginLeft:vw(15),
        marginTop:vh(20),
        borderColor:'lightgrey',
        borderBottomWidth:1
    },
    btn:{
        height:vh(70),
        marginTop:vh(20),
        justifyContent:"center",
        borderColor:"lightgrey",
        borderTopWidth:1,
        borderBottomWidth:1
    }

})