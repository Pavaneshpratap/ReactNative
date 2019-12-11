import React , {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import CounterApp from './CounterApp'
import { createStore } from 'redux'
import {Provider} from 'react-redux'


const initialState = {
    counter:0
}


const reducer = (state=initialState,action) => {

    switch(action.type){
        case 'INCREASE_COUNTER':
            return {counter:state.counter+1}
        case 'DECREASE_COUNTER':
            return {counter:state.counter-1}
    }
return state
}


const store = createStore(reducer)

export default class Reduxtask extends Component {

    

    render(){
        return(
            <Provider store={store}>
           <CounterApp/>
           </Provider>
        );
    }
}

const Styles = StyleSheet.create({
    txt:{
        fontSize:20
    }
})