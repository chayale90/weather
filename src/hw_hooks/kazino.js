import React, { useState } from 'react'

export default function Kazino() {


    const [coin, setCoin] = useState(5)
    const [counter, setCounter] = useState(0)

    const arrDices = ["dice1.jpg","dice2.jpg","dice3.jpg","dice4.jpg","dice5.jpg","dice6.jpg"]

    const roll = () => {
        setCoin(coin - 1)
    }
    return (
        <div className='container text-center p-3'>
            <h1 className='display-6'>Kazion Game</h1>
            <h2>{coin}</h2>
            <img src={"/images/"+arrDices[3]}/>
            <button onClick={roll} className='btn btn-info me-2'>Roll</button>
        </div>
    )
}
