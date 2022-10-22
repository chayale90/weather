import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfoAtlas from './infoAtlas'
import InputAtlas from './inputAtlas'

export default function AppAtlas() {

    const [infoObj, setInfoObj] = useState({})

    useEffect(() => {
        doApi("israel");
    }, [])


    const doApi = async (_country) => {
        let url = `https://restcountries.com/v3.1/name/${_country}`
        let resp = await axios.get(url)
        console.log(resp.data[0]);
        setInfoObj(resp.data[0])

    }

    return (
        <div>
            <InputAtlas doApi={doApi} />
            <InfoAtlas item={infoObj}/>
        </div>
    )
}
