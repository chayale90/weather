import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './movieItem';

export default function MovieList() {
    const [ar, setAr] = useState([])

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = "https://api.themoviedb.org/3/list/3?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US"
        try {
            let resp = await axios.get(url)
            console.log(resp.data.items);
            setAr(resp.data.items)
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }


    return (
        <div className='container'>
            <h1>List of movies:</h1>
            <div className='row g-3 '>
                {ar.map(item => {
                    return (
                            <MovieItem key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
