import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeatherInfo from './weatherInfo';
import WeatherInput from './weatherInput'

export default function AppWeather() {
  const [infoObj, setInfoObj] = useState({});

  useEffect(() => {
    doApi("Jerusalem")
  }, [])

  const doApi = async (_townName) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${_townName}&appid=64cd513da356063b49bc3bdd79b3742e&units=metric`;
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoObj(resp.data);
    }
    catch (err) {
      console.log("error", err);
      <div class="pt-md-5 text-center mx-auto" style="min-height:88vh ;">
        <h1 class="p-3 p-md-5 display-4" style="color:white; text-shadow: 2px 2px 2px #0B51CE;">Country/state name unknown</h1></div>
    }
  }


  return (
    <div>
      <WeatherInput doApi={doApi} />
      <WeatherInfo item={infoObj} />
    </div>
  )

}
