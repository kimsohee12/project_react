import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState} from 'react'
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


//1. 앱이 실행되자마자 현재 위치기반 지역 날씨가 보인다
//2.  날씨 정보에는 도시, 날씨, 섭씨,화씨 , 날씨 상태 정보가 들어간다.
//3. 다섯개의 버튼 1.현재 위치 나머지는 다른 도시 위치 
//4. 도시 버튼을 클릭할 때마다 도시의 날씨가 나온다.
//5. 현재 위치 버튼을 누르면 다시 현재 위치 기반 날씨가 나온다
//6. 데이터를 들고 오는동안 로딩 스피너가 돈다.

function App() {
  const[weather, setWeather]=useState(null);



 const getCurrentLocation=()=>{
  navigator.geolocation.getCurrentPosition((position) => {
     let lat =position.coords.latitude;
     let lon = position.coords.longitude;
     getWeatherByCurrentLocation(lat,lon)

    });
 }


 const getWeatherByCurrentLocation = async(lat,lon)=>{
  let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f0ccde11adbb3613d9b39e8d3c784c8`

  let response = await fetch(url);
  let data =  await response.json()
  console.log('data',data);
  setWeather(data)
}

  useEffect(()=>{
    getCurrentLocation();

  },[])

  return (
    <div>

      <div className='container'>
        <WeatherBox weather = {weather}/><br/>

        <WeatherButton/>
      </div>
    </div>
  );
}

export default App;
