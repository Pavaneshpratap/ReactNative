import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import HomeScreen from '../HomeScreen'
import reducer from './reducer'
import reducerA from './reducerA'
import reducerB from './reducerB'



export default class storeReducer extends Component {
    render(){
        return(
            <Provider store={store}>
                <HomeScreen/>
            </Provider>

        );
    }
}
const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB
})

const store = createStore(rootReducer)
