import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            mname: '',
            lname: '',
            email: '',
            mob: '',
            pswrd: ''
        }
    }

    multiSet = () => {
        const Fname = ["key1", this.state.fname]
        const Mname = ["key2", this.state.mname]
        const Lname = ["key3", this.state.lname]
        const Email = ["key4", this.state.email]
        const Mob = ["key5", this.state.mob]
        const Pswrd = ["key6", this.state.pswrd]
        AsyncStorage.multiSet([Fname, Mname,Lname,Email,Mob,Pswrd],()=>{
                console.warn("uyuhguyg")
                this.props.navigation.navigate('NewDashBoard')
            })
    }







    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    First Name
                </Text>
                <TextInput
                    onChangeText={fname => this.setState({ fname })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}
                    >

                </TextInput>
                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    Middle Name
                </Text>
                <TextInput
                    onChangeText={mname => this.setState({ mname })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}>

                </TextInput>

                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    Last Name
                </Text>
                <TextInput
                    onChangeText={lname => this.setState({ lname })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}>

                </TextInput>
                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    E-mail
                </Text>
                <TextInput
                    onChangeText={email => this.setState({ email })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}>

                </TextInput>
                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    Mob. No.
                </Text>
                <TextInput
                    onChangeText={mob => this.setState({ mob })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}>

                </TextInput>
                <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10, fontWeight: 'bold' }}>
                    Password
                </Text>
                <TextInput
                    onChangeText={pswrd => this.setState({ pswrd })}
                    style={{ paddingLeft: 20, fontSize: 20, height: 50, backgroundColor: 'white', borderRadius: 20, width: 390, marginLeft: 10, marginRight: 10 }}>

                </TextInput>
                <TouchableOpacity
                onPress={this.multiSet}
                 style={{ justifyContent: 'center', alignItems: "center", marginTop: 30, marginLeft: 10, backgroundColor: 'black', height: 75, marginRight: 10, borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
                        LogIn
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}