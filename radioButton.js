import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {vh,vw,normalize} from '../utils/Dimension'


export default class RadioButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor:this.props.button.selected ? this.props.button.color : "#707070",borderWidth:this.props.button.selected ? normalize(5) : normalize(1) }]}>
                    {/* {
                        (this.props.button.selected)
                            ?
                            (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    } */}
                </View>
                <Text style={[styles.label, {marginRight:this.props.button.marginRight ,color: this.props.button.selected ? this.props.button.color : "#AFAFAF" ,fontWeight:this.props.button.selected ? "bold" : "600"}]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonHolder: {
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioIcon: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginLeft: vw(10),
        fontSize: normalize(15),
        // width:"50%"
    },

});
