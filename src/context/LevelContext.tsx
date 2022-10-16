import { useState,createContext } from "react"


type contextProps = {
    children:React.ReactNode
}
interface authType {
    level?: string,
    lang?:string
}
  
interface IState {
    auth: any;
    setAuth: React.Dispatch<React.SetStateAction<object>>;
}
  
export const LevelContext = createContext<IState>({auth:{"level" : "","lang" :""},setAuth:()=>{}})
 
export const LevelProvider = ({ children }: contextProps) => {
    const [auth, setAuth] = useState<object|authType>({
        "level": "",
        "lang":""
    })
    
    return (
        <LevelContext.Provider value={{auth,setAuth}}>
            {children}
        </LevelContext.Provider> 
    )
}

 