import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import{Container, Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productList,setProductList]=useState([])

  //전체 상품 가져오기
  const getProducts=()=>{
    //db.json ->url
    let url = "http://localhost:5000/products"
  axios.get(url).then((res)=>setProductList(res.data))
}

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu,index)=>(
          <Col lg={3} key={index}>
            <ProductCard item={menu}/>
          </Col>
          ))}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll