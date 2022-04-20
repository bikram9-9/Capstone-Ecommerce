import {createContext,useState} from 'react';

//actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null
})



//provider is the actual component
//.Provider will wrap around any other component that needs access to the data

export const UserProvider = ({children})=> {
const [currentUser, setCurrentUser] = useState(null);
const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}