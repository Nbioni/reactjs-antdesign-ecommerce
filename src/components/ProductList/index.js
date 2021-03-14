import React from 'react';
import {  Row, Col } from 'antd';
import Product from '../Product';


const ProductList = ({productList, setFavorite}) => {
  return ( 
    <Row gutter={[16, 24]}>
      { productList.map((product,index) => {
        return <Col span={8} key={index}>
          <Product product={product} setFavorite={setFavorite}/>
        </Col>
      })}
    </Row>
  )
}

export default ProductList
