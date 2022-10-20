import React, { useState } from 'react'
import Colors from './colors'

export default function AppColor() {

  const [color,setColor ]= useState("silver")

  const changeTextColor = (_color) => { 
    setColor(_color)
  }

  return (
    <div className='container text-center p-3'>
        <h1 style={{background:color}}> Welcome to costum event</h1>
        <Colors changeTextColor={changeTextColor}/>
        </div>
  )
}
