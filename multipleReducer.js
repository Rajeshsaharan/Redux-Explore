const redux = require("redux")
const createStore = redux.createStore
const combineReducer = redux.combineReducers


const USER_AUTH = "USER_AUTH"
const LOAD_ALL_USER  = "LOAD_ALL_USER"
function authUser(){
    return {
        type : USER_AUTH,
        info : "auth the user"
    }
}
function loadUser(){
    return {
        type : LOAD_ALL_USER,
        info :"to load all user"
    }
}

//mutiple state

const initialAppState ={
    isloggedIn : false,
    username : ""
}

const initialUserState = {
    users :[],
}

//two reducer 

const AppReducer = (state = initialAppState, action) =>{
   switch(action.type){
    case USER_AUTH:
        return {
            ...state,
            isloggedIn : true,
            username : "rajesh"
        }
    default:
        return state;
   }
}

const UserReducer = (state=initialUserState, action)=>{
    switch(action.type){
        case LOAD_ALL_USER:
            return {
                ...state,
                users : ["rakesh", "amit", "rahul"]
            }
        default:
            return state;

    }

}

//combine both reducer
const rootReducer = combineReducer({
    appState : AppReducer,
    userState : UserReducer
})


const store = createStore(rootReducer) // creating a store

console.log("initial state", store.getState()) //get initial state

const unsubscribe = store.subscribe(()=>console.log("update state", store.getState()))// events trigger whenever state change
store.dispatch(authUser())
store.dispatch(loadUser())
unsubscribe()