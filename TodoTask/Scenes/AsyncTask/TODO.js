import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

export default class TODO extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            arrayofdata: []

        }
        //  console.warn(this.state.name)
    }

    componentDidMount() {
        this.props.navigation.setParams({ allDelete: this.removeValue })
        AsyncStorage.getItem("ObjectData", (err, result) => {
            if (result) {
                let data = JSON.parse(result)
                this.setState({
                    arrayofdata: data.splice(0),
                })
            }
        })
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity
                style={styles.navigationbtn}
                onPress={navigation.getParam('allDelete')}
            >
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>
                    Delete All
              </Text>
            </TouchableOpacity>

        )
    });

    submit = () => {
        let newObj = {
            id: Math.random().toString(),
            name: this.state.name,
            // isCompleted: this.state.isCompleted
        }
        let copyData = this.state.arrayofdata
        copyData.push(newObj)
        AsyncStorage.setItem("ObjectData", JSON.stringify(this.state.arrayofdata))
        this.setState({
            arrayofdata: copyData.splice(0),

        })

    }

    removeValue = async () => {
        try {
            await AsyncStorage.removeItem("ObjectData")
        } catch (e) {
            // remove error
        }

        console.warn('Done.')
    }

    deletefunc(id) {
        let emptyArray = this.state.arrayofdata;
        let indexToDelete = emptyArray.findIndex(item => item.id === id)
        if (indexToDelete != -1) {
            emptyArray.splice(indexToDelete, 1)
            console.log(emptyArray[1])
            this.setState({
                arrayofdata: emptyArray.splice(0)
            })
        }
    }


    // add=()=>{
    //     // this.setState({})
    //     var joined = this.state.arrayofdata.concat(this.state.name);
    // this.setState({ arrayofdata: joined })
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: hp('70%'), backgroundColor: 'white', alignItems: 'center' }}>
                    <View style={{ marginTop: 20, width: wp('95%') }}>
                        <FlatList
                            style={{ marginBottom: 40 }}
                            data={this.state.arrayofdata}

                            keyExtractor={(item, index) => Math.random().toString()}
                            renderItem={({ item, index }) => (

                                <View style={styles.flatlistview } >

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 20, color: 'white', paddingLeft: 20 }}>
                                            {item.name}{'\n'}
                                            {item.id}
                                        </Text>
                                        <TouchableOpacity style={{ marginLeft: wp('20%'), marginTop: hp('3%') }}
                                            onPress={() => this.deletefunc(item.id)}
                                        >
                                            <Text style={{ color: 'white' }}>
                                                Delete
                                           </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )}
                        />
                    </View>
                </View>
                <TextInput

                    onChangeText={(txt) => this.setState({
                        name: txt
                    })}
                    style={styles.textfield}>

                </TextInput>
                {/* {console.warn(this.state.name)} */}

                <TouchableOpacity
                    onPress={this.submit}
                    style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Add
                    </Text>
                </TouchableOpacity>
                {/* {console.warn(this.state.arrayofdata)} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigationbtn: {
        borderRadius: 10,
        height: 30,
        width: 90,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    flatlistview:{
        marginBottom: 20, 
        flexDirection: 'row', 
        backgroundColor: 'black', 
        borderRadius: 15 
    },
    btn:{
        marginLeft: wp('15%'), 
        height: hp('5%'), 
        marginTop: hp('2%'), 
        width: wp('70%'), 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textfield:{
        backgroundColor: 'lightgrey', 
        height: hp('5%'), 
        width: wp('95%'), 
        marginLeft: wp('2.5%') 
    }
})