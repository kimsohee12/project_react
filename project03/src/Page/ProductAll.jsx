import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import{Container, Row,Col} from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList,setProductList]=useState([]);
  const [query, setQuery] = useSearchParams();
  // const [productSearch,setProductSearch]=useState(null)

  //전체 상품 가져오기
  const getProducts=()=>{
    let searchQuery = query.get('q')||""
    console.log('쿼리',searchQuery); 
    //db.json ->url
    let url = `http://localhost:5000/products?q=${searchQuery}`
  axios.get(url).then((res)=>setProductList(res.data))
}

  useEffect(()=>{
    getProducts()
  },[query])
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