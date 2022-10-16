import { Box,Text,Button } from "@chakra-ui/react"
import CustomButton from "./CustomButton";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useState, useEffect,useContext} from "react"
import Countdown from 'react-countdown'
import { LevelContext } from "../context/LevelContext";


const Game = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const secure = useContext(LevelContext)

  const { auth, setAuth } = secure

  console.log(auth)
  
  const Completionist = () => {
    return(
      <Text fontSize={"2xl"} color={"#B3000B"} fontWeight={"bold"}>Time is Up!</Text>
    )
  };

  const renderer = ({ hours, minutes, seconds, completed } : {hours:number,minutes:number,seconds:number,completed:boolean}) => {
    if (completed) {
      
      return <Completionist />;
    } else {
      
      return <Text fontSize={"lg"}>{minutes}:{seconds}</Text>;
    }
  };
  
  return (
    <Box display={"flex"}
        flexDirection={"column"} justifyContent={"space-between"} marginTop={{base:0,"2xl":-250}} mb={{base:5}} alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"}  h={{base:"50%","2xl":"10%"}} bg={"#0DA3D6"}>
          <Box display={"flex"} justifyContent={"space-between"} p={"1%"}  alignItems={"center"} w={"85%"}>
        <CustomButton text={"Home"} url={"back"} />
        {!loading && <Countdown
          
          date={auth.level === "easy" ? Date.now() + 10000 : auth.level === "medium" ? Date.now() + 5000 : auth.level==="hard" ? Date.now() + 3000 : 0}
          renderer={renderer}
        />}
        <Button onClick={()=>console.log('clicked')} bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}}>
            Restart
        </Button>
            </Box>

           
      <Compiler setLoading={setLoading} loading={loading} />
               
           
        </Box>
  )
}

const Compiler = ({ setLoading,loading } :{setLoading:Function,loading:boolean}) => {
  var [load, setLoad] = useState<number>(0)


  useEffect(() => {
            
    setInterval(() => {
        setLoad(load+=25)
    },1000)
    }, [1])

    setInterval(() => {
      if (load >75) {
        load = 5
        setLoading(false)
      }
    }, 10)
  
    return (
        <Box bg={"white"} color="black" w={"100%"} textAlign={"center"}  minHeight={"300px"} maxHeight={"300px"} overflowY={"auto"}>
            
        {loading ?
          <CircularProgress value={load} color='#B3000B' size={'100px'} mt={"2rem"}>
            <CircularProgressLabel>{load}%</CircularProgressLabel>
          </CircularProgress>
          :
        <>
        <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
            <Text>Text goes here</Text>
          </>
        }
        </Box>
    )
}

export default Game