import React ,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native';
import {vh, vw, DesignHeight, DesignWidth, Strings} from '../../constants';

export default class Practice extends Component {
    render(){
        return(
            <View style={styles.scene}>
                <Text style={styles.txt}>
                    {Strings.hello}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scene:{
        flex:1,
        //justifyContent:"center",
        //alignItems:"center",
        width: vw(DesignWidth),
        height: vh(DesignHeight),

    },
    txt:{
       marginTop: vh(100) 
    }
})