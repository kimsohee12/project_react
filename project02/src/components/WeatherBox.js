import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className='WeatherBox'>
      <div>{weather?.name}</div>
      <h2>현재 온도 {parseInt(weather?.main.temp-273)}℃</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox