import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class LoginDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            mob: '',
            pswrd: ''
        };
    }

    componentDidMount() {
        AsyncStorage.multiGet(['key1', 'key2', 'key3', 'key4', 'key5', 'key6'], (err, results) => {
            console.warn(results)
            this.setState({
                firstName: results[0][1],
                middleName: results[1][1],
                lastName: results[2][1],
                email: results[3][1],
                mob: results[4][1],
                pswrd: results[5][1]
            })
        })
    }
    handleEdit = () => {
        AsyncStorage.clear()
        this.props.navigation.push('splash')
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
             <View style={{ flex: 6 }} >

                    <View style={{ alignItems: 'center' }} >
                        
                    </View>


                    <View style={{ flexDirection: 'column' }} >
                        <ScrollView>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    First Name:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.firstName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Middle Name:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.middleName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                    Last Name:
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.lastName}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                E-mail
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.email}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                Mob. No.
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.mob}
                                </Text>
                            </View>
                            <View style={styles.detailView} >
                                <Text style={styles.detailed} >
                                Password
                            </Text>
                                <Text style={styles.detailed}>
                                    {this.state.pswrd}
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    profileView: {
        position: 'absolute',
        height: 120,
        width: 120,
        borderRadius: 200,
        top: 120,
        left: '33%',
    },
    details: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    detailed: {
        fontSize: 20,
        color: 'black',
         padding: 10,
    },
    detailView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 30,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
    }
})