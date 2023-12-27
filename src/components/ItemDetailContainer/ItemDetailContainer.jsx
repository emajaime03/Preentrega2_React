import React from 'react'
import { getProductById } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <Flex justifyContent='center'>
            <ItemDetail {...product} />
        </Flex>
    )
}

export default ItemDetailContainer