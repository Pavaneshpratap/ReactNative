import React , {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {connect} from 'react-redux'


class CounterApp extends Component {

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>this.props.increasecounter()}
                >
                    <Text style={Styles.txt}>
                        Increase
                    </Text>
                </TouchableOpacity>
                <Text style={Styles.txt}>
                    {this.props.counter}
                </Text>
                <TouchableOpacity
                onPress={()=>this.props.decreasecounter()}
                >
                    <Text style={Styles.txt}>
                        Decrease
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
// self  = this;
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increasecounter : () => dispatch({type:'INCREASE_COUNTER'}),
        decreasecounter : () => dispatch({type:'DECREASE_COUNTER'})

}
}




const Styles = StyleSheet.create({
    txt:{
        fontSize:20
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)