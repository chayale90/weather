import React, { useState } from 'react'

export default function CounterSimple() {
    const [counter, setCounter] = useState(0)


    const addOne = () => {
        (counter >= 5) ? setCounter(0) : setCounter(counter + 1)
    }

    const reduceOne = () => {
        (counter <= 0) ? setCounter(5) : setCounter(counter - 1)
    }

    return (
        <div className='container text-center'>
            <h2>{counter}</h2>
            <button onClick={addOne} className='me-2'>+</button>
            <button onClick={reduceOne}>-</button>
        </div>
    )
}
