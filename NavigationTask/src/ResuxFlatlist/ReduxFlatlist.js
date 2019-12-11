import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box'
export default class ReduxFlatlist extends Component {

    state = {
        inputt: '',
        sourceData: []
    }


    add = () => {
        var joined = this.state.sourceData.concat(this.state.inputt);
        this.setState({ sourceData: joined })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#d5f0a8', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: hp('50%'),justifyContent:'space-between', width: wp('90%'), marginTop: -200 }}>
                    <FlatList
                        data={this.state.sourceData}
                        keyExtractor={(item, index) => Math.random().toString()}
                        renderItem={({ item }) => (
                            <View style={{
                                flexDirection:'row',marginBottom:20,justifyContent:'space-between',backgroundColor: 'skyblue',
                                alignItems:"center",
                            }} >
                                <Text style={{ fontSize: 30, color: 'black' }}>
                                    {item}
                                </Text>
                                <CheckBox
                                    style={{  }}
                                    onClick={() => {
                                        this.setState({
                                            isChecked: !this.state.isChecked
                                        })
                                    }}
                                    isChecked={this.state.isChecked}
                                // leftText={"CheckBox"}
                                />
                            </View>
                        )}
                    />

                </View>
                <TextInput
                    onChangeText={(ttext) => {
                        this.setState({
                            inputt: ttext
                        })
                    }}

                    placeholder="Input"
                    style={{ height: hp('5%'), marginTop: hp('2%'), marginLeft: hp('0.5%'), width: wp('90%'), backgroundColor: 'white' }}>

                </TextInput>

                <TouchableOpacity
                    onPress={this.add}
                    style={{ backgroundColor: 'white', height: hp('6%'), marginTop: ('5%'), width: wp('60%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}