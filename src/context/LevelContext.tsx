import { useState,createContext } from "react"


type contextProps = {
    children:React.ReactNode
}

interface IState {
    auth: {level:string,lang:string};
    setAuth: React.Dispatch<React.SetStateAction<{level:string,lang:string}>>;
}
  
export const LevelContext = createContext<IState>({auth:{"level" : "","lang" :""},setAuth:()=>{}})
 
export const LevelProvider = ({ children }: contextProps) => {
    const [auth, setAuth] = useState<{level:string,lang:string}>({
        "level": "",
        "lang":""
    })
    
    return (
        <LevelContext.Provider value={{auth,setAuth}}>
            {children}
        </LevelContext.Provider> 
    )
}

 