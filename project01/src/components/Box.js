import React from 'react'

const Box = (props) => {
  

  return (
    <div className='box'>
      {" "}
        <h3>{props.title}</h3>
        <img className='item-img' src={props.item&&props.item.img}></img>
        <h3>{props.result}</h3>
    </div>
  )
}

export default Box