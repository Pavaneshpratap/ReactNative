import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import images from '../src/image'

export default class Prashant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle:false

        }
    }

    // toggleImage=()=>{
    //     this.setState({toggle:!this.state.toggle})
    // }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* {console.warn(this.state.toggle)} */}
                
                <Text style={{ fontSize: 35, color: "blue" }}>
                    fdsfsdfsd
                </Text>
                <TouchableOpacity>
                    <View>
                        <Text style={{ color: "blue", fontSize: 35 }}>
                            Jatin
                        </Text>
                        {/* <Image style={{ height: 150, width: 150, borderRadius: 70 }}
                            source={this.state.toggle ? images.girl : images.boy} /> */}

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={()=>this.toggleImage()}
                >
                 
              <Text>
                        Hulk
              </Text>
                </TouchableOpacity>
                
            </View>
        );

    }
}
