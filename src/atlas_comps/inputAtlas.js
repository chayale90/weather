import React, { useRef } from 'react'

export default function InputAtlas(props) {
    const inputRef = useRef()
    return (
        <div className='container-fluid bg-warning p-2 '>
            <nav className="container">
                <div className='d-flex col-md-4'>

                    <input type="text" className='form-control' ref={inputRef} placeholder='search for city/town...' />
                    <button onClick={() => {
                        props.doApi(inputRef.current.value)
                    }
                    } className='btn btn-info ms-2'>Search</button>

                </div>
            </nav>
        </div>
    )
}
