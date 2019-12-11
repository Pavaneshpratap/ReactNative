export const counterPlus = () =>{
    return (dispatch, getState)=>{
        const {counter} = getState().CounterReducer;
        dispatch({type: 'INCREASE_COUNTER', payload: {counterPlus: counter+1}})
    }
}

export const counterMinus = () =>{
    return (dispatch, getState)=>{
        const {counter} = getState().CounterReducer;
        dispatch({type: 'DECREASE_COUNTER', payload: {counterMinus: counter-1}})
    }
}

    export const Updatedname = (txtt) =>{
        return (dispatch, getState)=>{
            const {name} = getState().CounterReducer;
            dispatch({type: 'UPDATE_NAME', payload: {name: txtt}})
        }
    }

    export const Updatedid = (txtid) =>{
            return (dispatch, getState)=>{
                const {id} = getState().CounterReducer;
                dispatch({type: 'UPDATE_ID', payload: {id: txtid}})
            }
}
    export const UpdateArray = (name) =>{
        return (dispatch, getState)=>{
            const {nameArray} = getState().CounterReducer;
            let emptyArray = nameArray
            emptyArray = emptyArray.slice().concat(name)
            console.warn(emptyArray)
            dispatch({type: 'UPDATE_Array', payload: {nameArray: emptyArray}})
        }
}

    export const apiData = (res) => {
        return (dispatch, getState) => {
            const {nameArray} = getState().CounterReducer
            dispatch( { type: "UPDATE_Array" , payload: { nameArray: nameArray.concat(res) } } )
        }
}