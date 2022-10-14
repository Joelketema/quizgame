import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import TitleCard from '../components/TitleCard'
import { Select } from '@chakra-ui/react'

const Typing = () => {
    return (
        <Box  w={"85vw"} position={"absolute"} right={0} h={"100vh"} display={"flex"}
        flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <TitleCard text={"Speed Test"} />
            <SelectOption/>
    </Box>
  )
}

const SelectOption = () => {
    return (
        <Box>
            <Box>
                <Text>Pick Level</Text>
                <Select>
                    <option value={"easy"}>Junior</option>
                    <option value={"medium"}>Intermidate</option>
                    <option value={"hard"}>Senior</option>
                </Select>
            </Box>

            <Box>
                <Text>Pick Programming Language</Text>
                <Select>
                    <option value={"cpp"}>C++</option>
                    <option value={"js"}>Javascript</option>
                    <option value={"python"}>Python</option>
                </Select>
            </Box>
        </Box>
    )
    
}

export default Typing