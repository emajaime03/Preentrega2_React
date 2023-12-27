import React from 'react'
import { IoMdCart } from "react-icons/io";
import { Box, Flex } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Flex justify='center'>
      <IoMdCart size='30px' />
      <Box bg='white' w='fit-content' color='black' borderRadius='10px' p='3px' fontSize='12px' h='fit-content'>3</Box>
    </Flex>
  )
}

export default CartWidget