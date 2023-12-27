import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, price }) => {
    return (
        <div className=''>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item