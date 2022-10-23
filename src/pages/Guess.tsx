import { Box,Text,Button } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'
import CountDown from '../components/CountDown'
import { useState } from "react"

const Guess = () => {
  
    return (
        <Box  w={"86vw"}  position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
            <TitleCard text={"Guess the Language"} />
            <Instruction/>
    </Box>
  )
}

const Instruction = () => {

    const handlePlay = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
        setShow(!show)
    }
    const [show, setShow] = useState<boolean>(false)
    
    return (
    <>
        { show?<CountDown setShow={setShow} /> :
    <Box display={"flex"}
        flexDirection={"column"} justifyContent={"center"} gap={"3%"} alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"} h={"50%"} bg={"#0DA3D6"}>
           
            
        <Box bg={"white"} color={"black"} p={"5%"} >
            <Text textAlign={"center"} fontSize={"1.3rem"} fontWeight={"bold"}>Instructions</Text>
            <Text fontWeight={"bold"}>This Game is about testing your focusing and Coordination abilities.
                Click on the Appropertiate Button Naming the Code Snippet Shown on The Screen.</Text>
                
        </Box>
        <Button onClick={handlePlay} bg={"#FFBF00"} minWidth={"200px"} _hover={{ backgroundColor: "#ff8300", color: "white" }}>
            Play
        </Button>
        
    </Box>
            }
            </>
    )
}
export default Guess