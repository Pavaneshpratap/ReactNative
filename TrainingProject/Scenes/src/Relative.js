import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from '../../Constants/Styles'

export default class Relative extends Component {
    render(){
        return(
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.redtext}>
            History
            </Text>
          <TouchableOpacity
            onPress={() => alert('Done')}>
            <Text style={{ textDecorationLine: 'underline', marginTop: 20, marginRight: 20 }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.Relative}>
              Add Relative
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5 }}>
              13/06/2019
            </Text>
          </View>
          <Text style={[styles.Relative, { marginLeft: 115, color: '#bb040f' }]} >
            4.000.000VND
            </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.Relative}>
              Add Relative
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, marginBottom: 20 }}>
              11/06/2019
            </Text>
          </View>
          <Text style={[styles.Relative, { marginLeft: 115, color: '#bb040f' }]} >
            4.000.000VND
            </Text>
        </View>
        </View>
        );
    }
}