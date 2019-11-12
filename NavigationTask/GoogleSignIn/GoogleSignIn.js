import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';



export default class GoogleSignIn1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image1: ''
        }
    }








    signIn = async () => {
        GoogleSignin.configure();
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            this.setState({ userInfo });
            //console.warn(userInfo.user.photo)
            this.setState({ name: userInfo.user.name })
            this.setState({ image1: userInfo.user.photo })
            this.setState({ email: userInfo.user.email })
            //   console.warn(this.state.name)
            // console.warn(userInfo.user.email)

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }

        }

    };



    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#f8fcb6', justifyContent: 'center', alignItems: 'center' }}>


                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        const infoRequest = new GraphRequest(
                                            '/me',
                                            {
                                                httpMethod: 'GET',
                                                version: 'v2.5',
                                                parameters: {
                                                    'fields': {
                                                        'string' : 'name,profile_pic'
                                                    }
                                                }
                                            },
                                            (err,res)=>{
                                                console.warn(err,res);
                                                
                                            }
                                          );
                                          // Start the graph request.
                                          new GraphRequestManager().addRequest(infoRequest).start();
                                        console.log(data.accessToken.toString())
                                        
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />






                <GoogleSigninButton
                    style={{ width: 192, height: 48, marginTop:20 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('GLogin', { name: this.state.name, email: this.state.email, pic: this.state.image1 })}
                    style={styles.btn}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 20
                    }}>
                        Show LoggedIn User
         </Text>

                </TouchableOpacity>

            </View>
        );
    }
}


_responseInfoCallback=(error, result) =>{
    console.warn("callback reached");
    
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.warn('Success fetching data: ' + result.toString());
    }
  }


  

const styles = StyleSheet.create({
    btn: {
        marginTop: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        borderRadius: 15

    }
})