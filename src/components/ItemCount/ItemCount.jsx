import React from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({ initial }) => {

    const { counter, increment, decrement } = useCounter(initial)

    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <h4>{counter}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount