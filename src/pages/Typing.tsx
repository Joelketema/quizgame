import React from 'react'
import { Box,Text,Button } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'
import { Select } from '@chakra-ui/react'
import CustomButton from '../components/CustomButton'
import Game from '../components/Game'
import { useState } from "react"

const Typing = () => {

    const [next,setNext] = useState(false)
    
    return (
        <Box  w={"86vw"} position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
            <TitleCard text={"Speed Test"} />
            {
                next ?  <Game/> : <SelectOption />
            } 
            <Button onClick={()=>setNext(!next)} bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}}>
            {next ? "Back" : "Next"}
            </Button>
    </Box>
  )
}

const SelectOption = () => {
    return (
        <Box display={"flex"}
        flexDirection={"column"} justifyContent={"center"} gap={"3%"} alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"}  h={"50%"} bg={"#0DA3D6"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"50%"}>
                <Text  fontSize={"1.1rem"} minWidth={"50%"}>Pick Level</Text>
                <Select color={"black"} bg={"white"}>
                    <option value={"easy"}>Junior</option>
                    <option value={"medium"}>Intermidate</option>
                    <option value={"hard"}>Senior</option>
                </Select>
            </Box>

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"50%"}>
                <Text fontSize={"1.1rem"} minWidth={"50%"}>Pick Programming Language</Text>
                <Select color={"black"} bg={"white"}>
                    <option value={"cpp"}>C++</option>
                    <option value={"js"}>Javascript</option>
                    <option value={"python"}>Python</option>
                </Select>
            </Box>
        </Box>
    )
    
}



export default Typing