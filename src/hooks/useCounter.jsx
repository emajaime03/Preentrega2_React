import React from 'react'
import { useState } from 'react'

const useCounter = (initial) => {

    const [counter, setCounter] = useState(initial)

    const increment = () => {
        setCounter((counter) => counter + 1)
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter((counter) => counter - 1)
        }
    }


    return {
        counter,
        increment,
        decrement
    }
}

export default useCounter