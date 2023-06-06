import React from 'react'

const WeatherBox = ({weather, icon}) => {
  return (
    <div className='WeatherBox'>
      <div>{weather?.name}</div>

      

      <h2>{parseInt(weather?.main.temp-273)}℃/ 230화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox