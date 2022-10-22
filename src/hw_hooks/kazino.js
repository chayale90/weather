import React, { useState } from 'react'

export default function Kazino() {


    const [coin, setCoin] = useState(5)
    const [counter, setCounter] = useState("")
    const [gameOver, setgameOver] = useState(false)

    const arrDices = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"]

    const roll = () => {
        let rnd = Math.floor(Math.random() * 6);
        console.log(rnd);
        setCounter(rnd)
        setCoin(coin - 1)

        // אם עושים תנאי רגיל צריך לזכור שהאחריי הסט סטייט המשתנה בסטייט לא מעודכן
        // עדיין בפונקציה עצמה
        // if(this.state.counter+1 > 5){
        //   this.setState({counter:0});
        // }

        if (counter >= 4) {
            setCoin(coin + 2)
        }
        if (coin + 1 <= 0) {
            setgameOver(true)
        }
    }
    return (
        <div className='container text-center p-3'>
            <h1 className='display-6'>Kazion Game</h1>
            <h2>coins: {coin}</h2>
            <img src={"/images/" + arrDices[counter]} />
            <div>
                <button onClick={roll} className='btn btn-info me-2'>Roll</button>
            </div>
        </div>
    )
}
