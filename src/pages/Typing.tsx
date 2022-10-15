import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'
import { Select } from '@chakra-ui/react'
import CustomButton from '../components/CustomButton'

const Typing = () => {
    return (
        <Box  w={"85vw"} position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
            <TitleCard text={"Speed Test"} />
            <SelectOption />
            <CustomButton text={"Next"} />
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