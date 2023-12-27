import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { Alert, AlertIcon, Flex, Heading } from '@chakra-ui/react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch((error) => {
                return (
                    <Alert status='error'>
                        <AlertIcon />
                        There was an error processing your request
                    </Alert>
                )
            })
    }, [categoryId])

    return (
        <Flex flexDirection='column' justifyContent='center' p='20px'>
            <Heading textAlign='center' p='20px'>{greeting}</Heading>
            <Heading textAlign='center' p='20px'>{categoryId}</Heading>
            <ItemList products={products} />
        </Flex>
    )
}

export default ItemListContainer