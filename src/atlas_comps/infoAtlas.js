import React from 'react'

export default function InfoAtlas(props) {
    let item = props.item
    return (
        <div className='container text-center'>
            {(item.name) ?
                <div className=' p-3'>
                    <h2 className='display-5'>{item.name.common}</h2>
                    <div>POP: {item.population.toLocaleString()} </div>
                    <div>Region: {item.region}</div>
                    <div>Languages: {Object.keys(item.languages)}</div>
                    <div>Coin: { Object.keys(item.currencies)}, {Object.values(item.currencies)[0].name}</div>
                    <div>Capital: {item.capital}</div>
                    <div>borders: {item.borders}</div>

                </div>
                : <h3>Loading...</h3>
            }
        </div>
    )
}
