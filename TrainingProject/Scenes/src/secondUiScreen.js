import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../../Constants/Styles'
import Health from './Health'
import Relative from './Relative'
import Groupimg from './Groupimg'

export default class SecondUiScreen extends Component {
  render() {
    return (
      <View style={styles.secondui}>
        <Image
          style={styles.cloud}
          source={require('../../Assets/cloud.png')}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            marginTop: 20,
            color: '#252773',
            fontSize: 20,
            marginLeft: 20
          }}>
            Health Insurance
            </Text>
          <TouchableOpacity
            onPress={() => alert('Kaam kr rha hai')}
            style={styles.btn}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
                Card Details
              </Text>
              <Image style={{ height: 30, width: 30 }}
                source={require('../../Assets/rightarrow1.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.redtext}>
              Balance
            </Text>
            <Text style={{
              fontSize: 20,
              marginLeft: 20, color: '#00886f'
            }}>
              2.000.000VND
            </Text>
          </View>
          <View>
            <Text style={{
              marginLeft: 50,
              marginTop: 20, color: '#c3978a'
            }}>
              Balance Used
            </Text>
            <Text style={{
              fontSize: 20,
              marginLeft: 50, color: '#00886f'
            }}>
              4.320.000VND
            </Text>
          </View>
        </View>
        <Text style={styles.redtext}>
          Relatives
            </Text>
        <Groupimg></Groupimg>
        <Relative></Relative>
        <Health></Health>
      </View>
    );
  }
}