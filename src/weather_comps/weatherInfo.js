import React from 'react'


export default function WeatherInfo(props) {
  let item = props.item
  const myStyle = {
    backgroundImage: "url(images/img11.jpg)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    height: "578px"
  };

  return (
    <div className='container-fluid' style={myStyle}>
      <div className='container text-center' >
        {(item.name) ?
          <div className='p-3'>
            <h2 className='display-3 text-light'>Weather app</h2>
            <h1 className=' text-success'> {item.name}</h1>
            <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} width="150" alt="icon" />
            <h4>Condition: {item.weather[0].description}</h4>
            <h4>Temp: {item.main?.temp} celius</h4>
            <h4>Wind speed: {item.wind?.speed} kmh</h4>
          </div> :
          // <h2>Loading...</h2>
          <img src={"/images/hug.gif"} width="150"/>


        }
      </div>

    </div>

  )
}
