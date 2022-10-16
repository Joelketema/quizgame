import { Box,Text } from "@chakra-ui/react"
import AccessTime from "@mui/icons-material/AccessTime";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Game = () => {
  return (
    <Box display={"flex"}
        flexDirection={"column"} justifyContent={"space-between"}  alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"}  h={"50%"} bg={"#0DA3D6"}>
          <Box display={"flex"} justifyContent={"flex-end"} p={"1%"}  alignItems={"center"} w={"85%"}>
              <AccessTimeIcon sx={{fontSize:"3rem"}} />  
            </Box>

           
              <Compiler/>
               
           
        </Box>
  )
}

const Compiler = () => {
    return (
        <Box bg={"white"} color="black" w={"100%"} textAlign={"center"}  minHeight={"200px"} maxHeight={"200px"} overflowY={"auto"}>
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
        </Box>
    )
}

export default Game