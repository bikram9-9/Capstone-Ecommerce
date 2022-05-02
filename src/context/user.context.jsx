// import { onAuthStateChangedListener } from 'firebase/auth';
import {createContext,useEffect,useReducer} from 'react';

//actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null
});

export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

//reducers return new object based on current state and action
const userReducer = (state,action) =>{
    console.log(action);
    const{type,payload} = action;
  
       switch(type){
            case USER_ACTION_TYPES.SET_CURRENT_USER: 
                return{
                    currentUser: payload
                }

            default: 
                throw new Error('UNHANDLED TYPE IN userReducer')
        }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children})=> {
// const [currentUser, setCurrentUser] = useState(null);
const [{currentUser}, dispatch] = useReducer(userReducer,INITIAL_STATE)

const setCurrentUser = (user) =>{
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
}
const value = {currentUser, setCurrentUser};
// useEffect(()=>{
//     const unsubscribe = onAuthStateChangedListener((user)=>{
//     console.log(user);
//     return unsubscribe
//     })
// },[]);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

//*------------------------------------------------------------------------------------

