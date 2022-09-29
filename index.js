const redux = require("redux")
const createStore = redux.createStore
//actions 


const USER_AUTH = "USER_AUTH"

//return action object
function authUser(){
   return {
    type : USER_AUTH,
    info : "for auth"  
   }
}

//define initial state object


const appState = {
    islogged : false,
    username : ""
}


//reducer function

const reducer  = (state = appState, action)=>{
    switch(action.type){
        case USER_AUTH:
            return {
                ...state, //for remaining property
                islogged : true,
                username : "myusername"
            } // important we returning new array not mutating state array
        default:
            return state
    
        }
}

const store = createStore(reducer) // creating a store

console.log("initial state", store.getState()) //get initial state

const unsubscribe = store.subscribe(()=>console.log("update state", store.getState()))// events trigger whenever state change
store.dispatch(authUser())
unsubscribe()