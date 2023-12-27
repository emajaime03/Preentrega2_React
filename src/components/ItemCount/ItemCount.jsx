import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Flex, Button } from '@chakra-ui/react'

const ItemCount = ({ initial }) => {

    const { counter, increment, decrement } = useCounter(initial)

    return (
        <Flex flexDirection='row' gap='10px' justifyContent='center'>
            <Button onClick={decrement}>-</Button>
            <Flex>
                <Button>Agregar al carrito {counter}</Button>
            </Flex>
            <Button onClick={increment}>+</Button>
        </Flex>
    )
}

export default ItemCount