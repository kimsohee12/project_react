import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown } from "react-bootstrap";


const ProductDetail = () => {
  let {id} = useParams()
  const [product,setProduct] = useState(null);

  const getProductDetail=()=>{
    let url = `http://localhost:5000/products/${id}`
    axios.get(url).then((res)=>setProduct(res.data))
}
  
  useEffect(()=>{
    getProductDetail()
  },[])


  return (
    <div className='detailBox'>
        <img className='cardDetailImg' src={product?.img}/>
        <div className='txtDetail'>
          <div className="new-productDetail">{product?.new==true?"신제품":""}</div>
          <div className='titleDetail'>{product?.title}</div>
          <div className='priceDetail'> ￦{product?.price}</div>
          <div  className="choiceDetail">{product?.choice==true?"Conscious choice":""}</div>
          <select>
            <option>사이즈 선택</option>
            
              <option>{product?.size[0]}</option>
              <option>{product?.size[1]}</option>
              <option>{product?.size[2]}</option>
              
          </select>
          <br/>
          <button type="button" className="btn btn-dark">추가</button>
        </div>

    </div>
  )
}

export default ProductDetail