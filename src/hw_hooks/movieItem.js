import React, { useState } from 'react'

export default function MovieItem(props) {
    const [showInfo, setshowInfo] = useState(false)
    let item = props.item;

    return (
        <div className='col-md-6'>
            <div className='shadow p-3 overflow-hidden h-100'>
                <img className='w-25 float-start me-2' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="movie" />
                <h2>{item.title}</h2>
                <div>Date: {item.release_date}</div>
                <div>Score: {item.vote_average}</div>
                <button onClick={() => { setshowInfo(!showInfo) }} className='btn btn-info my-2'>More Info</button>
                {showInfo && <p>{item.overview}</p>}
            </div>
        </div>
    )
}
