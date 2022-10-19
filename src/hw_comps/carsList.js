import React, { Component } from 'react'
import axios from "axios";
import CarItem from './carItem';

export default class CarsList extends Component {
  state = { ar: [] }
  componentDidMount() {
    this.doApi();
  }

  doApi = async () => {
    let url = "https://project-yarin.herokuapp.com/cars?perPage=10";
    let resp = await axios.get(url);
    console.log(resp.data);
    this.setState({ ar: resp.data });
  }

  render() {
    return (
      <div className='container'>
        {/* g-3 -> ריווח בין הדבים הפנימיים
        בבוטסרטאפ, מחייב שיהיה דיב שעוטף את הדיב
        עם הבורדר */}
        <div className="row g-3">
          {this.state.ar.map(item => {
            return (
              <CarItem key={item._id} item={item} />
            )
          })}
        </div>
      </div>
    )
  }
}
