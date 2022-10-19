import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeahterInfo from './weatherInfo'
import WeatherInput from './weatherInput'

export default function AppWeather() {
  const [infoObj,setInfoObj] = useState({});

  useEffect(() => {
    doApi("Eilat")
  },[])

  const doApi = async(_townName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_townName}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setInfoObj(resp.data);
  }

  return (
    <div>
      <WeatherInput doApi={doApi} />
      <WeahterInfo item={infoObj} />
    </div>
  )
}
