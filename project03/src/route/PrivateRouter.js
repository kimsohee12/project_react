import React from 'react'
import ProductDetail from '../Page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({authenticate, cart, setCart}) => {
  //로그인 o ->  디테일 페이지로 이동 로그인x -> 로그인 페이지로 이동
  return authenticate == true? <ProductDetail cart={cart} setCart ={setCart}/> : <Navigate to = "/login"/>
}

export default PrivateRouter