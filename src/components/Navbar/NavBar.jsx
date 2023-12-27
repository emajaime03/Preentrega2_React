import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Spacer, Text, Box, Square, Center, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex color='white' bg='#6a796a' align='center' p='20px' textAlign='center'>
            <Box flex='1'>
                <Link to='/'>TecnoHub</Link>
            </Box>
            <Box w='300px'>
                <Menu>
                    <MenuButton>
                        Filtrar
                    </MenuButton>
                    <MenuList color='black'>
                        <Link to={'/category/procesador'}><MenuItem >Procesadores</MenuItem></Link>
                        <Link to={'/category/mother'}><MenuItem>Mothers</MenuItem></Link>
                        <Link to={'/category/gpu'}><MenuItem>Placas</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Box>
            <Box w='300px' align='center'>
                <CartWidget />
            </Box>
        </Flex>
    )
}

export default NavBar