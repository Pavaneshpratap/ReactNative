import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

export default class SelectedComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress = {this.props.selected} >
                    <View style={{
                        height: 80,
                        width: 80,
                        borderWidth: 2,
                        borderRadius: 40,
                        borderColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius:25,
                            backgroundColor: this.props.select ? 'blue' : 'white',
                        }} />
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 30, fontSize: 20 }} > {this.props.select.toString()} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 300
    },
});