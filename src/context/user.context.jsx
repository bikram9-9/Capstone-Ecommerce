import {createContext} from 'react';

//actual value you want to access
export const UserContext = createContext({

})



//provider is the actual component
//.Provider will wrap around any other component that needs access to the data

export const UserProvider = ({children})=> {
    return <UserContext.Provider>
        {children  }
    </UserContext.Provider>
}