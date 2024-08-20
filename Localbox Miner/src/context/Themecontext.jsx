import { useState } from "react";
import { createContext } from "react";


export const themecontext=createContext()

export function ThemeContextProvideFunction({children}){
    const [theme,settheme]=useState("light")

    const themeupdaterfunction=()=>{
        settheme(theme=="light"?"dark":"light")
    }

    return(
        <themecontext.Provider value={{theme,themeupdaterfunction}}>{children}</themecontext.Provider>
    )
}