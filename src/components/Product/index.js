import React, {useState} from 'react';
import { Card, Button, Tooltip } from 'antd';
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;

const Product = ({product, setFavorite}) => {

  const renderFavoriteIcon = (favoriteId) => {
    console.log(favoriteId);
    if(favoriteId){
      return <Tooltip placement="top" title="Favorite"><HeartFilled/></Tooltip>
    }else{
      return <HeartOutlined/>
    }
  }
  return (
  <Card
    hoverable
    cover={<img alt={product.category} src={product.image} key={product.id}/>} 
  >
    <Button shape="circle" className={product.favoriteId ? "favorited-btn": "favorite-btn"} icon={renderFavoriteIcon(product.favoriteId)} onClick={e=>setFavorite(product)}/>
    <Meta title={product.title} description={product.description} />
  </Card>
  )
}

export default Product
