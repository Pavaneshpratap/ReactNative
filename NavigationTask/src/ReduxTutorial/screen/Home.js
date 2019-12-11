import React , {Component} from 'react';
import {Text,View,TouchableOpacity,TextInput,FlatList,StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {counterPlus, counterMinus, Updatedname, Updatedid, UpdateArray, apiData} from '../action/index'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import axios from 'axios'


class Home extends Component {


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                //debugger
                // console.log(res.data)
                this.props.apiData(res.data)
                // console.warn(res.data)
                
            })
    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
                style={Styles.btn}
                onPress={()=>this.props.counterPlus()}
                >
                    <Text style={Styles.txt}>
                        Increase
                    </Text>
                </TouchableOpacity>
                <Text style={{marginLeft:50,fontSize:20}}>
                    {this.props.counter}
                </Text>
                <TouchableOpacity
                style={Styles.btn}
                onPress={()=>this.props.counterMinus()}
                >
                    <Text style={Styles.txt}>
                        Decrease
                    </Text>
                </TouchableOpacity>


                <TextInput
                onChangeText={(txtt)=>{this.props.Updatedname(txtt)

                }}
                style={{margin:20,height:30,width:160,backgroundColor:"skyblue"}}
                placeholder="Your Name"
                />
                <TextInput
                onChangeText={(txtid)=>{this.props.Updatedid(txtid)}}
                style={{margin:20,height:30,width:160,backgroundColor:"skyblue"}}
                placeholder="Your Id"
                />
                <TouchableOpacity 
                onPress = {()=> {this.props.UpdateArray(this.props.name)}}
                style={{marginLeft:80}}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>
                <Text style={{margin:20}}>
                {this.props.name}
                </Text>
                <Text style={{margin:20}}>
                    {this.props.id}
                    
                </Text>

                <View style={{height:hp('30%'),width:wp('80%'),backgroundColor:'lightgreen'}}>

                <FlatList
                        data={this.props.nameArray}
                        keyExtractor={(item, index) => Math.random().toString()}
                        renderItem={({ item }) => (
                            <View style={{marginBottom:20,backgroundColor: 'skyblue' 
                                
                            }} >
                                <Text style={{ fontSize: 20, color: 'black' }}>
                                    {item.userId}
                                </Text>
                                <Text style={{ fontSize: 20, color: 'black' }}>
                                    {item.title}
                                </Text>
                                
                            </View>
                        )}
                    />
                    {/* {console.warn("nameArray",this.props.nameArray)} */}
                    







                </View>
                    
                
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {counter,name,id,nameArray} = state.CounterReducer
    
    // console.warn("within state", counter)
    return {
        counter,name,id,nameArray
    }
}

function mapDispatchToProps(dispatch){
    return {
        counterPlus : () => dispatch(counterPlus()),
        counterMinus : () => dispatch(counterMinus()),
        Updatedname : (txtt) => dispatch(Updatedname(txtt)),
        Updatedid : (txtid) => dispatch(Updatedid(txtid)),
        // UpdateArray : (res) => dispatch(UpdateArray(res)),
        apiData: (res) => dispatch(apiData(res))

}

}
// console.warn("updateArray",UpdateArray[0])




const Styles = StyleSheet.create({
    txt:{
        fontSize:20
    },
    btn:{
        marginLeft:20
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(Home)