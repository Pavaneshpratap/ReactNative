import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class Health extends Component {
    render(){
        return(
            <View style={{ flex: 2, backgroundColor: '#ffcbd6', borderRadius: 20 }}>
          <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginLeft: 20, color: '#354053' }}>
              Health and Beauty
              </Text>
            <Text style={{ fontSize: 20, color: '#354053', marginRight: 15 }}>
              5.000.000VND
              </Text>
          </View>
          <View style={{ flex: 2, backgroundColor: '#064053', borderRadius: 20 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>
                Course and Training
              </Text>
              <Text style={{ fontSize: 20, color: 'white', marginRight: 15 }}>
                2.000.000VND
              </Text>
            </View>
            <View style={{ flex: 1.3, backgroundColor: '#f9dece', borderRadius: 20 }}>

              <Text style={{ fontSize: 20, color: '#354053', marginLeft: 20, marginTop: 20 }}>
                Bussiness Trip Cost
              </Text>

            </View>
          </View>
        </View>

        );
    }
}