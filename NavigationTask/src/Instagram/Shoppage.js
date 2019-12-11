import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import { vh, vw } from '../Constants'
import { LongPressGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler'
import Modal from "react-native-modal";
import Popup from './Popup'

// const fun = this.props.send

export default class Shoppage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shopdata: [],

        }
    }





    componentDidMount() {

        fetch('https://randomuser.me/api/?page=3&results=100')
            .then((response) => response.json())
            .then(responseJson => {
                // console.warn(responseJson.results[0]);
                this.setState({
                    shopdata: responseJson.results,
                })
                // console.warn(this.state.shopdata);
                // console.warn("Waoo!");


                // console.warn("dsfsdfd",this.state.dataSource[0].picture.large);

            })
            .catch((error) => {
                console.log(error)
            });


    }


    Longpress = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert("I'm being pressed for so long");
        }
    };


    DoubleTap = event => {
        // console.warn('heey');

        if (event.nativeEvent.state === State.ACTIVE) {
            this.setState(() => ({
                isModalVisible: !this.state.isModalVisible
            }), () => {
                this.setState({
                    isModalVisible: !this.state.isModalVisible
                })

            })
        }
    };

    callPopup = (image) => {
        return (
            <Popup sendpic={image} />
        )
    }


returnView(img){
    console.warn('data',img);
    return(
        <View style={{flex:1}}>
                <View style={{flex:0.1,backgroundColor:"grey"}}>
                    <Text>
                        heyrrrr
                    </Text>
                </View>
                <Image style={{height:200,width:200}}
               source={{uri : img}}/>
                
                
            </View>
    )
}
    renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <LongPressGestureHandler
                    onHandlerStateChange={this.DoubleTap}
                    minDurationMs={800}>
                    <View>
                        {/* <TouchableWithoutFeedback
                    onPress={this.DoubleTap}
                    // numberOfTaps={2}
                    
                    > */}
                        <TouchableOpacity
                            onPress={() => this.returnView(item.picture.large)}>
                            <Image
                                style={{ height: vh(121), width: vw(121), marginTop: vh(3), marginLeft: vw(3) }}
                                source={{ uri: item.picture.large }}
                            >
                            </Image>
                        </TouchableOpacity>

                        {/* </TouchableWithoutFeedback> */}
                    </View>

                    {/* <Image
            style={{height:vh(121),width:vw(121),marginTop:vh(3),marginLeft:vw(3)}}
            source={{uri:item.picture.large}}
            /> */}
                </LongPressGestureHandler>

            </View>



        )


    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.12, flexDirection: "row", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image
                                style={{ height: vh(20), width: vw(40), marginTop: vh(50) }}
                                source={{ uri: "https://static.thenounproject.com/png/390380-200.png" }} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: vh(48), fontSize: vh(20), fontWeight: '600', marginLeft: vw(10) }}>
                            Shop
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => alert('Shop')}>
                            <Image
                                style={{ height: vh(26), width: vw(25), marginTop: vh(45) }}
                                source={require('../../assets/Shop.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert('Saved pics')}>
                            <Image
                                style={{ height: vh(26), width: vw(26), marginTop: vh(45), marginLeft: vw(15), marginRight: vw(10) }}
                                source={{ uri: "https://cdn3.iconfinder.com/data/icons/instagram-18/512/196_Flag_Instagram_Interface_Save_Tag-512.png" }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    style={{ height: vh(1) }}
                    numColumns={3}
                    keyExtractor = {(item,index) => (item+Math.random().toString())}
                    data={this.state.shopdata}
                    renderItem={this.renderItem}
                />
                <Modal isVisible={this.state.isModalVisible} animationInTiming={2000}
                    // animationInTiming='300'
                    // animationOutTiming='100'
                    animationIn={'bounceIn'}
                    // coverScreen={true}
                    hasBackdrop={false}
                    // swipeDirection={'right'}
                    coverScreen={false}
                    // animationOutTiming="300"
                    animationOut={'fadeOut'}
                // style={{ position: "absolute", marginStart: 150 , marginTop: 150}}
                >
                    <View style={{ height: vh(400), backgroundColor: "white" }}>

                        {/* <Image
                                        style={{ height: 100, width: 110, opacity: 0.8 }}
                                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" }}
                                    />
                                    <Text>
                                        gello
                                    </Text> */}
                        <Popup/>
                    </View>
                </Modal>

            </View>
        );
    }
}

