import { Box, Text,Image } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

type Props = {
    text:string
}

const SideNav = ({ text }: Props) => {
    return (
        <Box bg={"#293745"} color={"white"} display={"flex"} overflow={"hidden"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"}
            h={"100vh"} 
            w={{base:"12rem",md:"12rem",lg:"12rem",xl:"12rem","2xl":"20rem"}} shadow={"2xl"} p={"5%"} textAlign={"center"} zIndex={4}>
    
            <Box w={"100%"} textAlign={"center"}  >
                <Link to={"/"} style={{textAlign:"center"}}>
                    <Image src={"logo.png"} boxSize={"70px"} marginLeft={"25%"} />
                </Link>
            </Box>

            <Box w={"100%"} bg={"#B3000B"} p={"5%"} rounded={"lg"}>
            <Link to={"typing"} style={{width:"100%"}}>
                    <Text>{text}</Text>
            </Link>
            </Box>


            <Box w={"100%"} _hover={{backgroundColor:"#B3000B"}}  p={"5%"} rounded={"lg"}>
                <Text>Maze Games</Text>
            </Box>

            <Box w={"100%"} _hover={{backgroundColor:"#B3000B"}}  p={"5%"} rounded={"lg"}>
                <Text>Maze Games</Text>
            </Box>

            <Box w={"100%"} _hover={{backgroundColor:"#B3000B"}}  p={"5%"} rounded={"lg"}>
                <Text>Maze Games</Text>
            </Box>
        </Box>
    )
}

export default SideNav

