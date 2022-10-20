import React from 'react'

export default function Colors(props) {

    const changeColor = () => {
        props.changeTextColor("red")
    }

    return (
        <div>
            <button className='me-2' onClick={changeColor}>Red</button>
            <button className='me-2' onClick={() => {
                props.changeTextColor("blue")
            }}>Blue</button>
            <button className='me-2' onClick={() => {
                props.changeTextColor("white")
            }}>white</button>
        </div>
    )
}
