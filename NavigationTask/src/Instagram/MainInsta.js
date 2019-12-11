import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity,TouchableWithoutFeedback,ImageBackground, TextInput, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TapGestureHandler, State, TouchableHighlight } from 'react-native-gesture-handler'
import Modal from "react-native-modal";
import { vh, vw } from '../Constants'
export default class MainInsta extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isModalVisible: false,
            liked:false,
            saved:false,
        }
    }

    DoubleTap = event => {
        // console.warn('heey');

        if (event.nativeEvent.state === State.ACTIVE) {
            this.liketoggled1()
        this.setState(() => ({
            isModalVisible: !this.state.isModalVisible
        }), () => {
            this.setState({
                isModalVisible: !this.state.isModalVisible
            })

        })
    }
    

    };

    liketoggled(){
        // console.warn('entered');
        
        this.setState({
            liked : !this.state.liked
        })
        // console.warn(this.state.liked);
        
    }
    liketoggled1(){
        // console.warn('entered');
        
        this.setState({
            liked : true
        })
        // console.warn(this.state.liked);
        
    }





    componentDidMount() {
        return fetch('https://randomuser.me/api/?page=3&results=10')
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({
                    dataSource: responseJson.results,
                })

                // console.warn("dsfsdfd",this.state.dataSource);

            })
            .catch((error) => {
                console.log(error)
            });


    }





    render() {

        const heartcolor = (this.state.liked) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" : "https://icon-library.net/images/love-icon-png/love-icon-png-1.jpg"
        return (

            <View style={{ flex: 0.7 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: vh(50), width: vh(50), borderRadius: vh(25), margin: vh(10) }}
                            source={require('../../assets/rvcj.jpg')}
                        />
                        <Text style={{ marginTop: vh(25), fontSize: vw(15), fontWeight: "500" }}>
                            rvcjinsta
                </Text>
                    </View>
                    <TouchableOpacity>

                        <Image
                            style={{ height: vh(30), width: vw(30), marginTop: vh(18), marginLeft: vw(200) }}
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png' }}
                        />
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 1, backgroundColor: 'grey' }}>
                    <TapGestureHandler
                        onHandlerStateChange={this.DoubleTap}
                        numberOfTaps={2}>
                            <View>
                    <TouchableWithoutFeedback
                    // onPress={this.DoubleTap}
                    // numberOfTaps={2}
                    
                    >
                        <ImageBackground
                            style={{ height: vh(410), resizeMode: 'stretch' }}
                            source={{ uri: 'https://pics.esmemes.com/there-are-2-types-of-people-rvcj-www-rvcj-com-others-bike-11245804.png' }}
                        >
                            <Modal isVisible={this.state.isModalVisible} animationInTiming={1000}
                                // animationInTiming='300'
                                // animationOutTiming='100'
                                animationIn={'bounceIn'}
                                // coverScreen={true}
                                hasBackdrop={false}
                                // swipeDirection={'right'}
                                 coverScreen={false}
                                // animationOutTiming="300"
                                animationOut={'fadeOut'}
                                style={{ position: "absolute", marginStart: 150 , marginTop: 150}}
                            >
                                <View style={{ justifyContent: 'center', alignItems: "center" }}>

                                    <Image
                                        style={{ height: 100, width: 110, opacity: 0.8 }}
                                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" }}
                                    />

                                    {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                                </View>
                            </Modal>

                        </ImageBackground>
                        </TouchableWithoutFeedback>
                        </View>
                    </TapGestureHandler>
                </View>
                <View style={{ flex: 0.13, flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.liketoggled()}>
                        <Image
                            style={{ height: vh(25), width: vh(28), margin: vw(11) }}
                            source={{ uri: heartcolor }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Comment')}>
                        <Image
                            style={{ height: vh(47), width: vh(47), marginLeft: vw(-7) }}
                            source={{ uri: 'https://icon-library.net/images/instagram-comment-icon-png/instagram-comment-icon-png-15.jpg' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Share')}>
                        <Image
                            style={{ height: vh(45), width: vw(45), marginTop: vh(2), marginLeft: vw(-5) }}
                            source={{ uri: 'https://icon-library.net/images/1900531-200_45732.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Saved Pics')}>
                        <Image
                            style={{ height: vh(31), width: vw(30), marginTop: vh(10), marginLeft: vw(215) }}
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/instagram-18/512/196_Flag_Instagram_Interface_Save_Tag-512.png' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.1 }}>
                    <Text style={{ marginLeft: vw(10), fontSize: vh(15) }}>
                        <Text>Liked by</Text>
                        <Text style={{ fontWeight: 'bold' }}> Ileamo_D</Text>
                        <Text> and</Text>
                        <Text style={{ fontWeight: 'bold' }}> thousands of others</Text>
                    </Text>
                    <Text style={{ marginLeft: vw(10) }}>
                        <Text style={{ fontWeight: "bold", fontSize: vh(14) }}>rvcjinsta</Text>
                        <Text style={{ fontSize: vh(14) }}> Bike lovers....</Text>
                    </Text>
                    <Text style={{ marginLeft: vw(10), fontSize: vh(15), color: 'grey' }}>
                        View all Comments
                </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: vh(34), width: vh(34), borderRadius: vh(17), margin: vh(10) }}
                            source={require('../../assets/profilepic.jpg')}
                        />
                        <TextInput
                            style={{ fontSize: vh(15), width: vw(250)}}
                            placeholder="Add a comment..."
                        />
                        <Image
                            style={{ height: vh(22), width: vw(20), marginTop: vh(18)}}
                            source={{ uri: 'https://png2.cleanpng.com/sh/bf23bd3bff4843b4e7c6542158afe37c/L0KzQYm3UsAzN5lpfZH0aYP2gLBuTfxifZhtjNd7LXbkc7a0lBl1cF55fdN7cz3ydn7xjCkubZ50gts2ZX3yhLrqjB4ua51uRdV7eXnxd37sjf9rcV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVcQxPWJqT6cDZECxRIe3U8M4OGY2TaMCNkO2RoKAWcQ4Pl91htk=/kisspng-laughter-face-with-tears-of-joy-emoji-emoticon-cli-crying-emoji-png-transparent-image-5a754051e758d0.4603370515176336179476.png' }} />
                        <Image
                            style={{ height: vh(22), width: vw(20), marginTop: vh(18),marginLeft:vw(10)}}
                            source={{ uri: 'https://png2.cleanpng.com/sh/30232181b29bb1c69ed067e53124ecfd/L0KzQYm3U8I5N5x4iZH0aYP2gLBuTfVud5tuRdpuYYL3Pbr3iP9vbV5xhAhuLXXwf7vwTcViapM4S9cAYUa0SLW9TsEzO2E2TKM6MUW1QoO4V8k2P2c9SKU3cH7q/kisspng-emoji-heart-iphone-love-emoji-5abb33e5a618d6.1230141115222179576803.png' }} />

                    </View>
                </View>
            </View>



        );
    }
}