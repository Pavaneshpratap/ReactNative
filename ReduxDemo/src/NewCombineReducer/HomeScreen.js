import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View>
                <Text>
                    A:{this.props.a}

                </Text>
                <TouchableOpacity onPress={()=>this.props.UpdateA(this.props.b)}>
                    <Text>
                        Update A
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{marginLeft:40}}>
                <Text>
                    B:{this.props.b}

                </Text>
                <TouchableOpacity onPress={()=>this.props.UpdateB(this.props.a)}>
                    <Text>
                        Update B
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStoreToProps = (store) => {
    return{
        a:store.rA.a,
        b:store.rB.b
    }

}

const mapDispaptchToProps = (dispatch) => {
    return{
        UpdateA: (b)=> dispatch({type:"UPDATE_A",b:b}),
        UpdateB: (a)=> dispatch({type:"UPDATE_B",a:a})

    }
}

export default connect(mapStoreToProps,mapDispaptchToProps)(HomeScreen)