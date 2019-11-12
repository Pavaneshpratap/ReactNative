import React, {Component} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import styles from '../../Constants/Styles'

export default class Groupimg extends Component {
    render(){
        return(
            <View style={styles.groupImage}>
          <View>
            <Image style={styles.Img}
              source={{ uri: 'https://wallpapercave.com/wp/wp4024944.jpg' }} />
            <Image
              style={{
                height: 15,
                width: 15,
                position: 'absolute',
                marginTop: 40,
                marginLeft: 20
              }}
              source={require('../../Assets/tick.png')} />
            <Text style={{ marginLeft: 13, marginTop: 5 }}>
              Wife
            </Text>
          </View>
          <View>
            <Image style={[styles.Img, { borderColor: 'black', borderWidth: 1 }]}
              source={require('../../Assets/muthu.jpeg')} />
            <Image
              style={{
                height: 15,
                width: 15,
                position: 'absolute',
                marginTop: 40,
                marginLeft: 20
              }}
              source={require('../../Assets/tick.png')} />
            <Text style={{ marginLeft: 11, marginTop: 5 }}>
              Child
            </Text>
          </View>
          <View>
            <Image style={styles.Addimg}
              source={require('../../Assets/Add.png')} />
            <Text style={{ marginTop: -6, marginLeft: 17 }}>
              Add
            </Text>
          </View>
          <View>
            <Image style={styles.Addimg}
              source={require('../../Assets/Add.png')} />
            <Text style={{ marginTop: -6, marginLeft: 17 }}>
              Add
            </Text>
          </View>
          <Text style={{
            fontSize: 100,
            color: '#d9d4d6',
            fontWeight: '100',
            marginTop: -30
          }}>
            I
            </Text>
            <View>
          <TouchableOpacity
            onPress={() => alert('Ye bhi kaam kr rha h')}
          >
            <Image style={{ height: 50, width: 50, borderRadius: 25 }}
              source={require('../../Assets/transfer.png')} />
         </TouchableOpacity>
          <Text>
            Benefits
          </Text>
          </View>
        </View>
        );
    }
}