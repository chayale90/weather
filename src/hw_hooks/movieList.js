import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MovieList() {

    const [ar, setAr] = useState([])



    useEffect(() => {
        doApi();
    }, [])

    const doApi = async() => { 
        let url="https://api.themoviedb.org/3/list/3?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US"
        try{
            let resp= await axios.get(url)
            
            console.log(resp.data);
        }
        catch(err){
            console.log(err);
            alert("There problem, come back later")

        }
    }


    return (
        <div>
            MovieList
        </div>
    )
}
