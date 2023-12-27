import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card, CardBody, Heading, Divider, Text, Box, Stack } from '@chakra-ui/react'

const ItemDetail = ({ name, price, category, description }) => {
    return (
        <Card maxW='sm' margin='50px'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>Categoría: {category}</Text>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <Text paddingLeft='20px' paddingBottom='10px' color='blue.600' fontSize='2xl'>
                ${price}
            </Text>
            <Divider />
            <Box p='20px'>
                <ItemCount initial={1} />
            </Box>
        </Card>
    )
}

export default ItemDetail