import React, { useEffect, useState } from 'react'

export default function Kazino() {


    const [begin, setBegin] = useState(true)
    const [coin, setCoin] = useState(5)
    const [counter, setCounter] = useState(-1)
    const [win, setWin] = useState(false)
    const arrDices = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"]


    const roll = () => {
        let rnd = Math.floor(Math.random() * 6);
        console.log(rnd);
        setCounter(rnd)
        setCoin(coin - 1)
        setWin(false)
        setBegin(false)
        // אם עושים תנאי רגיל צריך לזכור שהאחריי הסט סטייט המשתנה בסטייט לא מעודכן
        // עדיין בפונקציה עצמה
        // if(this.state.counter+1 > 5){
        //   this.setState({counter:0});
        // }
        // האם זה תקף לHooks?

        if (counter >= 4) {
            setWin(true)
            setCoin(coin + 2)

        }
        if (coin <= 0) {
            setCoin(0)
            setCounter(0)
            setWin(false)
        }
    }
    return (
        <div className='container text-center p-3'>
            <h1 className='display-6'>Kazino Game</h1>
            <h2>coins: {coin}</h2>
             <div>
                <button onClick={roll} className='btn btn-info me-2'>Roll</button>
            </div>
            <div className='p-2'>
            {
                (coin <= 0) ? 
                <h3>Go bring more money</h3> : 
                <img src={"/images/" + arrDices[counter]} />
                &&
                (begin) ? 
                <h3></h3> : 
                <img src={"/images/" + arrDices[counter]} />
            }
            {
                (counter >= 4) ?
                    <h2 style={{ color: "green" }}>Win</h2> :
                    <h2 style={{ color: "red" }}>lose</h2>
                        &&
                        (begin) ?
                        <h2 style={{ color: "green" }}></h2> :
                        <h2 style={{ color: "red" }}>lose</h2>
            }
           </div>
        </div>
    )
}
