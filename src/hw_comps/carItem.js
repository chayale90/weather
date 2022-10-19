import React, { Component } from 'react'

export default class CarItem extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className='col-md-6'>
        <div className='p-2 border'>
          <h2>{item.company} {item.model}</h2>
          <div>Price:{Number(item.price).toLocaleString()} NIS</div>
          <div>Year:{item.year}</div>
          <button className='btn btn-info'>More info</button>
        </div>
      </div>
    )
  }
}
