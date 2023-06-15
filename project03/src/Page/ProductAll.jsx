import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import{Container, Row,Col} from 'react-bootstrap'

const ProductAll = () => {
  const [productList,setProductList]=useState([])
  const getProduct=()=>{
    let url = "http://localhost:5000/products"
  axios.get(url).then((res)=>setProductList(res.data))
}


  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(
          <Col lg={3}>
            <ProductCard item={menu}/>
          </Col>
          ))}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll