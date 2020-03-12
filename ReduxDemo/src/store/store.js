import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxTest from '../ReduxTest'
import reducer from '../reducer/reducer'
import thunk from 'redux-thunk'


export default class stateStore extends Component {
    render(){
        return(
            <Provider store={store}>
                <ReduxTest/> 
            </Provider>
        );
    }
}

const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.warn(`caught in middleware ${JSON.stringify(result)}`)
            return result;
        }
    }
} 


const store = createStore(reducer,applyMiddleware(thunk))