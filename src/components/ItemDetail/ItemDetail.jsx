import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, price, category }) => {
    return (
        <div className=''>
            <h1>{name}</h1>
            <div>
                <p>Categoria: {category}</p>
                <p>Precio: ${price}</p>
            </div>
            <div>
                <ItemCount initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail