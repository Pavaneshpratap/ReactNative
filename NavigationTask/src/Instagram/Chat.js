import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Modal from "react-native-modal";
import {vh,vw} from '../../src/Constants'

export default class Chat extends Component {

    state = {
        isModalVisible: false
    };

//     static defaultProps = {
//         delay: 300,
//         onDoubleTap: () => alert(';hdvjsdhfvjsdhfhjsd'),
//       };


//     lastTap = null;
//   handleDoubleTap = () => {
//     //   console.warn('aaya');
      
//     const now = Date.now();
//     if (this.lastTap && (now - this.lastTap) < this.props.delay) {
//       alert('hey')
//     } else {
//       alert('helllo')
//     }
//   }
//   // ...

        
    
    

    

    toggleModal = () => {
        console.warn('hey');
        

        this.setState(() => ({
            isModalVisible: !this.state.isModalVisible
        }),()=>{
            this.setState({
                isModalVisible: !this.state.isModalVisible
            })

        })
    };

    


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1,backgroundColor:'#fcfcfc', flexDirection: "row", borderColor: 'lightgrey', borderBottomWidth: 1 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image
                            style={{ height: vh(40), width: vw(40), marginTop: vh(35) }}
                            source={{ uri: "https://static.thenounproject.com/png/390380-200.png" }} />
                    </TouchableOpacity>
                    <Image
                        style={{ height: hp('4%'), width: hp('4%'), borderRadius: hp('2%'), marginLeft: vh(5), marginTop: vh(42) }}
                        source={{ uri: this.props.navigation.getParam('pic') }}
                    />
                    <View>
                        <Text style={{ marginTop: vh(40), fontSize: vh(18), fontWeight: '600', marginLeft: vw(10) }}>
                            {this.props.navigation.getParam('otherParam')}_{this.props.navigation.getParam('otherParams')}
                        </Text>
                        <Text style={{ marginLeft: vw(10),fontSize:vh(12), opacity: 0.5 }}>
                            Active Yesterday
                    </Text>
                    </View>
                    <Image
                        style={{ height: vh(30), width: vw(30), marginLeft: vw(80), marginTop: vh(45) }}
                        source={{ uri: "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-35-512.png" }}
                    />
                    <Image
                        style={{ height: hp('3%'), width: hp('3%'), marginLeft: vw(25), marginTop: hp('6%') }}
                        source={require('../../assets/info.png')}
                    />

                </View>
                <View style={{ flex: 0.76 }}>
                    <Button title="Show modal" onPress={this.toggleModal} />
                    <Modal isVisible={this.state.isModalVisible} animationInTiming={1000} 
                    // animationInTiming='300'
                    // animationOutTiming='100'
                    animationIn={'bounceIn'}
                    hasBackdrop={false}
                    swipeDirection={'right'}
                    coverScreen={false}
                    // animationOutTiming="300"
                    animationOut={'fadeOut'}
                    >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            
                            
                            <Image
                            style={{height:100,width:110,opacity:0.8}}
                            source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}}
                            />
                            
                            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                        </View>
                    </Modal>
                </View>
                {/* <TouchableOpacity
                
                onPress={this.handleDoubleTap}
                
                >
                    <Text>
                        tap
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                number
                
                >

                </TouchableOpacity> */}
                <View style={{ flex: 0.14 }}>
                    <TextInput
                        style={{ height: hp('7.2%'), width: wp('93%'), paddingLeft: hp('7.5%'), borderColor: 'lightgrey', borderWidth: 2, fontSize: vh(20), marginLeft: hp('1.5%'), marginTop: hp('1.5%'), borderRadius: wp('45%'), backgroundColor: 'white' }}
                        placeholder="Message..."
                    />
                    <View style={{ flexDirection: 'row', position: 'absolute', marginTop: hp('2.4%'), marginLeft: hp('2.5%') }}>
                        <Image
                            style={{ height: hp('5.5%'), width: hp('5.5%') }}
                            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/camera-circle-blue-512.png' }} />
                    </View>
                    <View style={{ flexDirection: 'row', width: wp('30%'), position: "absolute", marginLeft: vw(220), marginTop: hp('2%') }}>
                        <Image
                            style={[styles.emojis]}
                            source={{ uri: 'https://icon-library.net/images/mike-icon/mike-icon-9.jpg' }} />
                        <Image
                            style={[styles.emojis, { marginLeft: hp('1.5%') }]}
                            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/life-on-the-web/100/picture-512.png' }} />
                        <Image
                            style={{ height: hp('3%'), width: hp('3%'), marginLeft: hp('2.3%'), marginTop: hp('1.4%') }}
                            source={{ uri: 'data:image/png;base64,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' }}
                        />
                    </View>

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    emojis: {
        height: hp('3.5%'),
        width: hp('3.5%'),
        marginTop: hp('1.2%'),
    }
})