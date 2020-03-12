const initialState = {
    age:21,
    history:[]
}

const reducer = (state=initialState,action) => {
    const newState = {...state}

    switch(action.type){
        case "AGE_UP":
                // newState.age += action.val
                
                    newState.age += action.val
                    newState.loading=false
                    
                    // ...state,
                    // age:state.age+action.val,
                    // history:state.history.concat({id:Math.random(),age:state.age+action.val})
                break;
        case "AGE_DOWN":
                newState.age -= action.val
                // return{
                //     ...state,
                //     age:state.age-action.val,
                //     history:state.history.concat({id:Math.random(),age:state.age-action.val})
                // }
                break;
        case "DEL_ITEM":
                return{
                    ...state,
                    history:state.history.filter(el=>el.id !== action.key)
                }
        case "LOADING":
           newState.loading = true;
            break;
    }

    // if (action.type==="AGE_UP"){
    //     newState.age++;
    // }
    // if (action.type==="AGE_DOWN"){
    //     newState.age--;
    // }

    return newState

}

export default reducer;
