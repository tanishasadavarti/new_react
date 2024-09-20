import { createContext, useState } from "react";


let authdata={
    isAuth:false,
    token:null
}
 export const Authcontext = createContext()

function AuthContextProvider({children}) {
    const [auth, setauth] = useState(authdata)

    const loginUser =(value)=>{
        setauth({isAuth:true,token:value})
    }
    const logoutUser = ()=>[
        setauth({isAuth:false,token:null})
    ]
    return <Authcontext.Provider value={{loginUser,logoutUser,auth}}>
        {children}
    </Authcontext.Provider>
}

export default AuthContextProvider;
