import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const nav = useNavigate()
  
  //상품 클릭시 해당 상품의 디테일 페이지로 이동
  const showDetail =()=>{
    nav(`/product/${item.id}`)
  }

  return (
    <div className="card" onClick={showDetail}>
        <img className='cardImg' src={item?.img}/>
        <div  className="choice">{item?.choice==true?"Conscious choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div  className="new-product">{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard