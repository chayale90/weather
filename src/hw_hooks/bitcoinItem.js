import React from 'react'

export default function BitcoinItem(props) {
    let item = props.item
    return (
        <div className='col-6' >
            <div className='border p-2'>
                <img src={`https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${item.id}.png`} alt="bitcoin"/>
                <h2>{item.name}</h2>
                <div>value: {Number(item.price_usd).toLocaleString()}</div>
            </div>
        </div>
    )
}
