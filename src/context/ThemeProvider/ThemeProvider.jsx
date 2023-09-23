import { createContext } from "react";

export const ThemeContex = createContext();

export default function ThemeProvider({children}){
    return(
        <ThemeContex.Provider value={{

            
        }}>

{   children}
        </ThemeContex.Provider>
    )
}