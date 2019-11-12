import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Registered: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('name1', (err, result) => {
            this.setState({ Registered: result })
        })
    }



    clearData = () => {
        AsyncStorage.clear()
        this.props.navigation.push('SignUp')
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Mr. {this.state.Registered} is saved.
                </Text>


                <TouchableOpacity
                    onPress={this.clearData}
                    style={{ height: 60, width: 400, backgroundColor: '#91a0eb', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ color: '#0a1340', fontSize: 30, fontWeight: 'bold' }}>
                        Clear Data
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LogIn')}
                    style={{ height: 60, width: 400, backgroundColor: '#91a0eb', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ color: '#0a1340', fontSize: 30, fontWeight: 'bold' }}>
                        LogIn Button
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}