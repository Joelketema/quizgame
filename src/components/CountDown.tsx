import { Box,Text } from "@chakra-ui/react"
import { useState,useEffect } from "react"

const CountDown = ({ setShow }: { setShow: (show:boolean)=>void }) => {
    var [number, setNumber] = useState<number>(3)
    const [scale,setScale] = useState(1)

    const countdown = new Audio("/countdown.mp3")

    useEffect(()=>{
        let myInterval = setInterval(() => {
            countdown.play()
                if (number >=0) {
                    setNumber(number--)
                    
                    if(number === 2) setScale(0.5)
                    if (number === 1) setScale(1)
                    if (number === 0) setScale(0.5)
                    
                }
            if (number < 0) {
                    setScale(1)
                    setShow(false)
                    clearInterval(myInterval)
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
               
              };
        },[1000]);
      
    
  return (
      <Box bg={"black"} transform={`scale(${scale})`} color={"white"} transition={"all ease 300ms"} position={"absolute"} top={"30%"} p={"5%"} w={"20%"} textAlign={"center"} rounded={"full"} >
          <Text fontSize={"x-large"} p={"30%"}>{number}</Text>
      </Box>
  )
}

export default CountDown