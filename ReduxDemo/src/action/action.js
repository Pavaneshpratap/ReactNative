export const ageUPAsync = (val1) => {
    return{type:"AGE_UP",val:val1 }
}

export const ageUP = val1 => {
    return dispatch => {  
        dispatch(loading());
        setTimeout(()=>{
            val1++;
            dispatch(ageUPAsync(val1))
        },5000)
    }
}
export const ageDOWN = (val1) => {
    return{type:"AGE_DOWN",val:val1 }
}

export const loading = () => {
    return {
        type:"LOADING"
    }
}