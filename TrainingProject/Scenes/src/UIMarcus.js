import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../../Constants/Styles'
import SecondUiScreen from './secondUiScreen'

export default class taskProject extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle = {{flex : 1}}>
        <View style={styles.TopView}>

          <StatusBar barStyle='light-content' />

          <View style={[styles.TopView, { flexDirection: 'row', flex :1 }]}>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.Img}
                  source={{ uri: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />

              </View>

              <View>
                <Text style={styles.text}>
                  Marcus Hoang
                </Text>
                <Text style={[styles.text,
                {
                  marginTop: 1,
                  color: '#4ed5ba',
                  fontSize: 15,
                  fontWeight: 'normal'
                }]}>
                  Level 3
                </Text>
              </View>
            </View>
          </View>

        <SecondUiScreen/>
        </View>

      </ScrollView>

    );
  }
}