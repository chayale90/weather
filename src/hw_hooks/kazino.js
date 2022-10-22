import React, { useState } from 'react'

export default function Kazino() {


    const [coin, setCoin] = useState(5)
    const [counter, setCounter] = useState("")
    
    const arrDices = ["dice1.jpg","dice2.jpg","dice3.jpg","dice4.jpg","dice5.jpg","dice6.jpg"]
    
    const roll = () => {
        let rnd = Math.floor(Math.random() * 6);
        setCounter(rnd)
        setCoin(coin - 1)
        if(counter-1==4||counter-1==5){
            setCoin(coin +2)
        }
        console.log(coin);
    }
    return (
        <div className='container text-center p-3'>
            <h1 className='display-6'>Kazion Game</h1>
            <h2>coins: {coin}</h2>
            <img src={"/images/"+arrDices[counter]}/>
            <div>
            <button onClick={roll} className='btn btn-info me-2'>Roll</button>
        </div>
        </div>
    )
}
