import { Box, Text,Image } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

type Props = {
    text:String
}

const SideNav = ({ text }: Props) => {
    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}
            h={"100vh"}
            w={"12rem"} shadow={"2xl"} p={"5%"} textAlign={"center"}>
    
            <Box w={"100%"} textAlign={"center"} >
                <Link to={"/"} style={{textAlign:"center"}}>
                    <Image src={"logo.png"} boxSize={"70px"} marginLeft={"25%"} />
                </Link>
            </Box>

            <Box w={"100%"}>
            <Link to={"typing"} style={{width:"100%"}}>
                    <Text>{text}</Text>
            </Link>
            </Box>


            <Box w={"100%"}>
                <Text>Maze Games</Text>
            </Box>

            <Box w={"100%"}>
                <Text>Maze Games</Text>
            </Box>

            <Box w={"100%"}>
                <Text>Maze Games</Text>
            </Box>
        </Box>
    )
}

export default SideNav

