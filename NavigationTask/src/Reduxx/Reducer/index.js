import {combineReducers, createStore} from 'redux'
import ContentReducer from './ContentReducer'

const AppReducers = combineReducers({
    ContentReducer,
})

const rootReducer = (state,action) => {
    return AppReducers(state,action)
} 
let store = createStore(rootReducer);
export default store;