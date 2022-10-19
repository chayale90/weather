import React, { Component } from 'react'
import CarsList from './carsList'
import ParentComp from './parentComp'

export default class AppHw extends Component {
  render() {
    return (
      <React.Fragment>
        <CarsList />
        <hr/>
        <ParentComp />
      </React.Fragment>
    )
  }
}
