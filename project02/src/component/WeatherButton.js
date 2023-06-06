import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>   
       <Button variant="outline-primary">Paris</Button>
       <Button variant="outline-warning">Current Location</Button>
       <Button variant="outline-success">New York</Button>
    
    </div>
  )
}

export default WeatherButton