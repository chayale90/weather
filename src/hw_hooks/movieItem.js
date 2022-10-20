import React from 'react'

export default function MovieItem(props) {
    let item = props.item;

    return (
        <div className='col-6'>
        <div className='border p-3'>
            <img src={"https://image.tmdb.org/t/p/eifGNCSDuxJeS1loAXil5bIGgvC.jpg"} alt="movie"/>
            <h2>{item.title}</h2>
            <div>Date: {item.release_date}</div>
            <div>Score: {item.vote_average}</div>
        </div>
        </div>
    )
}
