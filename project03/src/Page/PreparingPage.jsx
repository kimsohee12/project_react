import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const PreparingPage = () => {
    const nav = useNavigate()
    const homClick=()=>{
        nav('/')
    }
  return (
    <div className='readyBox'>
        <img src='https://www.mobifren.com/resource/img/common/ready.gif' className='readyImg'></img>
        <Button variant="danger" onClick={homClick} className='homClick'>홈으로 돌아가기</Button>
    </div>
  )
}

export default PreparingPage