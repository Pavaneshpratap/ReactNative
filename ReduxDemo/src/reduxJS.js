const {createStore} = require('redux');


const initialState = {
    age:21,
    name:"Pavan",
    class:"4th"
}


const myReducer = (state = initialState,action) => {
    const newState = {...state}

    if(action.type==="Add"){
        newState.age += action.val,
        newState.name="shivam",
        newState.class="5th"

    }
    if(action.type==="Somthing"){
        
        newState.class="5th"

    }

    return newState

}

const store = createStore(myReducer);

//Action
store.dispatch({type:"Add",val:5})
store.dispatch({type:"Somthing"})

console.log(store.getState());

