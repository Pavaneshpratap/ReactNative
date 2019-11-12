import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import TODO_store from '../../../Store/TODO'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';

@observer
class TODO extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}> TODO's List </Text>
        <View style={{ height: hp("60%"), backgroundColor: '#e8e78e' }}>
          <FlatList
            style={{ marginTop: 10 }}
            data={TODO_store.list}
            keyExtractor={(item, index) => Math.random().toString()}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <Text style={{ marginLeft: 20 }} > {item} </Text>
              </View>
            )} />
        </View>
        <TextInput
          onChangeText={(txt) => TODO_store.name = txt}
          style={{ backgroundColor: 'lightgrey', height: wp('10%'), width: wp('80%'), marginLeft: wp('10%'), marginTop: wp('10%'), borderRadius: 20, paddingLeft: 20 }}
        />


        <TouchableOpacity style={{ marginTop: hp('3%'), height: wp('10%'), width: wp('50%'), backgroundColor: '#79bd73', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('25%') }}
          onPress={() => TODO_store.double(TODO_store.name)}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Click me
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default TODO;
