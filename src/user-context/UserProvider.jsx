import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({user, children}) {
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    const user = useContext(UserContext);
    if(!user) {
        console.log('No User')
        throw new Error("User not found");
    }
    return user;
}

