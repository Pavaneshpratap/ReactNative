import {combineReducers} from 'redux'

const initialState = {
    counter:0,
    name:'',
    id:'',
    nameArray:[]
    
}


const CounterReducer = (state=initialState,action) => {

    switch(action.type){
        case 'INCREASE_COUNTER':
            return {...state, counter: action.payload.counterPlus}
        case 'DECREASE_COUNTER':
                return {...state, counter: action.payload.counterMinus}
        case 'UPDATE_NAME' :
                return {...state, name:action.payload.name}
        case 'UPDATE_ID' :
                return {...state, id:action.payload.id}
        case 'UPDATE_Array' :
                return {...state, nameArray:action.payload.nameArray}
        // case 'fetch_api_data':
        //     return {...state, nameArray:action.payload.nameArray}
        }
return state
}

export const reducer = combineReducers({
    CounterReducer: CounterReducer
})