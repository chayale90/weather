import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BitcoinItem from './bitcoinItem';

export default function BitcoinList() {

    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php"
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            setAr(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }


    return (
        <div className='container '>
            <h1>List of bitcoin:</h1>
            <div className='row g-3'>
                {ar.map(item => {
                    return (
                        <BitcoinItem key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
