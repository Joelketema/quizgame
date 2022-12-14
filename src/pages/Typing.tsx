import React from 'react'
import { Box,Text,Button } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'
import { Select } from '@chakra-ui/react'
import CustomButton from '../components/CustomButton'
import Game from '../components/Game'
import { useState,useContext } from "react"
import { LevelContext } from "../context/LevelContext";
import toast from "react-hot-toast"

const Typing = () => {

    const [next,setNext] = useState<number>(Number(localStorage.getItem("next")) | 0)
    const [level,setLevel] = useState<string>("")
    const [lang, setLang] = useState<string>("")
    
    const secure = useContext(LevelContext)
    const { auth, setAuth } = secure

    const handleNext = (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        console.log((event.target as Element).innerHTML)

        if ((event.target as Element).innerHTML === "Next") {     
           
            if (level !== "" && lang !== "") {
                setAuth({
                "level": level,
                "lang": lang
                })
               
                setNext(1)
                localStorage.setItem("next","1")
            }
            else toast.error("Please Pick Level and Language")
           
        }
        else {
            setNext(0)
            localStorage.setItem("next","0")
        }
        
    }
    console.log(next)
    return (
        <Box  w={"86vw"}  position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
            <TitleCard text={"Speed Test"} />
            {
                next ===1 ? <Game /> : <SelectOption setLang={setLang} setLevel={setLevel} level={level} lang={lang} />
            } 
            <Button onClick={handleNext} bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}}>
            {next===1 ? "Back" : "Next"}
            </Button> 
    </Box>
  )
}

const SelectOption = ({setLevel,setLang,level,lang} : {setLevel:Function, setLang:Function,level:string,lang:string}) => {

    
    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setLevel(event.target.value)

    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setLang(event.target.value)
    }

    return (
        <Box display={"flex"}
        flexDirection={"column"} justifyContent={"center"} gap={"3%"} alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"}  h={"50%"} bg={"#0DA3D6"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"50%"}>
                {/* <Text  fontSize={"1.1rem"} minWidth={"50%"}>Pick Level</Text> */}
                <Select color={"black"} placeholder={"Pick Level"} value={level} bg={"white"} onChange={handleLevelChange}>
                    <option value={"easy"}>Junior</option>
                    <option value={"medium"}>Intermidate</option>
                    <option value={"hard"}>Senior</option>
                </Select>
            </Box>

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"50%"}>
                {/* <Text fontSize={"1.1rem"} minWidth={"50%"}>Pick Programming Language</Text> */}
                <Select color={"black"} value={lang} placeholder={"Pick Programming Language"} bg={"white"} onChange={handleLanguageChange}>
                    <option value={"cpp"}>C++</option>
                    <option value={"js"}>Javascript</option>
                    <option value={"python"}>Python</option>
                </Select>
            </Box>
        </Box>
    )
    
}



export default Typing