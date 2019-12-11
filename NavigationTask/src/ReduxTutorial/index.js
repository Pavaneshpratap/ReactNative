import React , {Component} from 'react'
import { Provider } from 'react-redux';
import Home from './screen/Home'
import store from './store/index'

// import {} from 'react-native'

export default class Reduxtask12 extends Component {

    

    render(){
        return(
            <Provider store={store}>
           <Home/>
           </Provider>
        );
    }
} 