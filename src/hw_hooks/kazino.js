import React, { useState } from 'react'

export default function Kazino() {


    const [coin, setcoin] = useState(5)

    const arDice = []

    const roll = () => {
        setcoin(coin - 1)
    }
    return (
        <div className='container text-center p-3'>
            <h1 className='display-6'>Kazion Game</h1>
            <h2>{coin}</h2>
            <button onClick={roll} className='btn btn-info me-2'>Roll </button>
        </div>
    )
}
