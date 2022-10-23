import { Box,Text,Button } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'

const Maze = () => {
  
    return (
        <Box  w={"86vw"}  position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
            <TitleCard text={"Maze"} />

    </Box>
  )
}

export default Maze