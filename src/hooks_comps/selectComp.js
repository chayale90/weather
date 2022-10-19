import React, { useRef, useState } from 'react'

export default function SelectComp() {
  const [color,setColor] = useState("silver");
  

  const selectRef = useRef();

  return (
    <div className='container'>
      <h2  style={{color:color}}>Choose your favorite color:</h2>
      <select defaultValue="gold" ref={selectRef}  onChange={() => {
        setColor(selectRef.current.value)
      }} className='form-select'>
        <option value="">Select your favorite color</option>
        <option value="red">Red</option>
        <option value="gold">Gold</option>
        <option value="green">Green</option>
      </select>
    </div>
  )
}
