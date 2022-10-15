import React from 'react'

import { Box } from '@chakra-ui/react'
import CustomButton from './CustomButton'

const TopHeader = () => {
  return (
      <Box p={"1%"} display={"flex"} justifyContent={"flex-end"} alignItems={'center'} w={"100%"} position={"absolute"} bg={"#293745"} color={"white"} top={0} zIndex={1}>
          <CustomButton text={"Sign Up"} url={"signup"} />      
    </Box>
  )
}

export default TopHeader