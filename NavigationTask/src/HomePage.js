import React, { Component } from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EditProfile from './EditProfile'

class NewClass extends Component {
    constructor() {
        super();
        this.state = {
            value1: '',
            value2: ''

        }
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 20, marginLeft: 20 }}>
                <Text style={{}}>
                    First Name
                </Text>
                <TextInput style={{ backgroundColor: 'lightgrey', marginRight: 20 }} />

                <Text style={{ marginTop: 20 }}>
                    Last Name
                </Text>
                <TextInput

                    onChangeText
                    style={{ backgroundColor: 'lightgrey', marginRight: 20 }} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EditProfilee', { fn: 'Hello from HomePage' })}
                    style={styles.btn}>
                    <Text style={{ fontSize: 20 }}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const AppNavigator = createStackNavigator({
    Home: NewClass,
    EditProfilee: EditProfile
},
    {
        initialRouteName: 'Home',
    }

);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    btn:{ marginTop: 20,
         justifyContent: 'center',
          alignItems: 'center',
           backgroundColor: 'skyblue',
            width: 130,
             height: 40,
              borderRadius: 20,
               marginLeft: 120

    }
})