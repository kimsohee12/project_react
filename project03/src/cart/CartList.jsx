import React from 'react';
import Button from 'react-bootstrap/Button';

const CartList = () => {
  return (
    <div className='cartListBox'>
        <div className='cartList'>
            <img width={'180px'}src='https://lp2.hm.com/hmgoepprod?set=source[/ae/29/ae29826ab3d6e50ae35c549b5186e754bb616c73.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]'/>
            <div className='cartTxtBtn'>
              
              <div className='cartTxt'>
                <p>벨티드 트윌 코트</p>
                <p>사이즈 : m</p>
                <p>19900원</p>
                <p>무료배송</p>
              </div>
             
                <Button className='cartbtn' variant="danger">주문하기</Button>
            
            </div>
              
        </div>
    </div>
  )
}

export default CartList