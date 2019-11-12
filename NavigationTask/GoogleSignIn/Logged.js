import React, { Component } from 'react';
import { Text, View, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin} from '@react-native-community/google-signin';

export default class LogUser extends Component {



    signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remember to remove the user from your app's state as well
            console.warn(this.state.user)
        } catch (error) {
          console.error(error);
        }
      };
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, backgroundColor: '#befaf9' }}>
                    <Image
                        style={{ height: 250 }}
                        source={{ uri: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                    <View style={{ flex: 1, position: 'absolute' }}>
                        <Image
                            source={{ uri: this.props.navigation.getParam('pic') }}
                            style={styles.pics} />
                    </View>
                    <Text style={styles.Text}>
                        User Name:  {this.props.navigation.getParam('name')}
                    </Text>
                    <Text style={{ marginLeft: 20, fontSize: 20 }}>
                        E-mail:  {this.props.navigation.getParam('email')}
                    </Text>
                    {/* <TouchableOpacity 
                    onPress={this.signOut}
                    style={{justifyContent:'center',alignItems:'center',marginTop:80,height:40,width:300,backgroundColor:'blue',marginLeft:60,borderRadius:20}}>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
                            LogOut
                        </Text>
                    </TouchableOpacity> */}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Text: {
        marginTop: 140,
        marginLeft: 80,
        fontSize: 20

    },
    pics: {
        height: 200,
        marginTop: 150,
        borderColor: "black",
        borderWidth: 2,
        marginLeft: 100,
        borderRadius: 100,
        width: 200,
        backgroundColor: 'black'

    }
})