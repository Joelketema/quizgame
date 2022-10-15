import React from 'react'
import { Box, Text } from '@chakra-ui/react'

type Props = {
    text:String
}
const TitleCard = ({text}:Props) => {
  return (
      <Box>
          <Text fontSize={"2rem"} color={"white"}>{text}</Text>
    </Box>
  )
}

export default TitleCard