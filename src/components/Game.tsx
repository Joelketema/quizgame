import { Box,Text } from "@chakra-ui/react"
import AccessTime from "@mui/icons-material/AccessTime";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CustomButton from "./CustomButton";

const Game = () => {
  return (
    <Box display={"flex"}
        flexDirection={"column"} justifyContent={"space-between"} marginTop={{base:0,"2xl":-250}} mb={{base:5}} alignItems={"center"} w={"80%"} shadow={"2xl"} rounded={"3xl"} color={"white"}  h={{base:"50%","2xl":"10%"}} bg={"#0DA3D6"}>
          <Box display={"flex"} justifyContent={"space-between"} p={"1%"}  alignItems={"center"} w={"85%"}>
              <CustomButton text={"Cancel"} url={"#"} />
              <AccessTimeIcon sx={{ fontSize: "3rem" }} />  
            </Box>

           
              <Compiler/>
               
           
        </Box>
  )
}

const Compiler = () => {
    return (
        <Box bg={"white"} color="black" w={"100%"} textAlign={"center"}  minHeight={"300px"} maxHeight={"300px"} overflowY={"auto"}>
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