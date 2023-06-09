import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  console.log(cities);
  return (
    <div>   
      
       <Button variant="warning">CurrentLocation</Button>
       {cities.map((item,index)=>(
         <Button variant="outline-primary" key={index}
         onClick={()=>{setCity(item)}}
         >{item}</Button>
       ))}
    </div>
  )
}

export default WeatherButton