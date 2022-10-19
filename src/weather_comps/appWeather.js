import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeahterInfo from './weatherInfo'
import WeatherInput from './weatherInput'

export default function AppWeather() {
  const [infoObj, setInfoObj] = useState({});

  useEffect(() => {
    doApi("Eilat")
  }, [])

  const doApi = async (_townName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_townName}&appid=64cd513da356063b49bc3bdd79b3742e&units=metric`;
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
