import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {connect} from 'react-redux'

class AddTodo extends Component {

    state = { 
        text:""
    }


    addTodo=(text)=>{
        // will update redux store
        this.props.dispatch({type:'ADD_TODO',text})
        this.setState({text:""})

    }



    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                onChangeText={(text)=> this.setState({text})}
                value={this.state.text}
                style={{borderWidth:1,borderColor:'black',height:hp('3%'),width:wp('60%'),marginTop:hp('1%')}}
                placeholder="Ur input"
                />
                <TouchableOpacity 
                onPress={()=>this.addTodo(this.state.text)}
                style={{marginTop:hp('1.5%'),marginLeft:wp('5%')}}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>

                
            </View>

        );
    }   

    
}
export default connect()(AddTodo);