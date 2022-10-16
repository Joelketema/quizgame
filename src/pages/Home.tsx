import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
const Home = () => {
  return (
    <Box  w={"86vw"} color={"white"} position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
    justifyContent={"center"} alignItems={"center"}>
          <Image src={"/dev.svg"} boxSize={"250px"} objectFit={"cover"} />
          <Box textAlign={"center"} display={"flex"} gap={"2rem"} flexDirection={"column"} justifyContent={"center"} alignItems={'center'}>
              <Text fontSize={"4xl"}>
                  Game on, Gaming Plateform For Developers.
              </Text>
              <Text textAlign={"center"} fontSize={"small"} fontWeight={"bold"}>Sign Up and Join More than 200 Devs.</Text>
              <Image rounded={'full'} boxSize={"200px"} objectFit={"cover"} src={"https://i.pinimg.com/originals/1b/f1/45/1bf14551aab075b1723569325323c477.gif"} />
          </Box>
        <Image src={"/key.svg"}  boxSize={"250px"} objectFit={"cover"}/>
</Box>
  )
}

export default Home