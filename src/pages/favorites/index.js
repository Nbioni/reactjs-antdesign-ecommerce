import React, {useState, useEffect} from 'react';
import { getProducts } from '../../services/fakestoreService'; 
import { Card, Space,Row, Col, Layout, Divider } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import {getFavorites, getFavoritesByUserId} from '../../services/favoritesService';
import ProductList from '../../components/ProductList';

const { Header, Footer, Sider, Content } = Layout;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const FavoritesPage = ({user, setFavorite }) => {
  const [storeKey,setStoreKey] = useState(""); 
  const [favorites,setFavorites] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      if(storeKey){
        const request = await getFavoritesByUserId(user.id, storeKey);
        console.log(request)
        setFavorites(request);
        return request;
      }else{
        const request = await getFavorites();
        console.log(request)
        setFavorites(request);
        return request;
      }
    }
    fetchData();
  },[storeKey])

  const renderFavorites = () => {
    switch(storeKey){
      case "FakeStore":
        return (
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ProductList productList={favorites}/>
          </Content>
        )
    }
  }

  const changeStoreKey = (storeKey) =>{
    setStoreKey(storeKey);
  }
  const removeFavorite = async (product) => {
    const newFavorites = favorites.filter(item => item !== product);
    console.log(newFavorites);
    setFavorites(newFavorites);
    await setFavorite(product);
  }

  return ( 
    <div className="site-card-border-less-wrapper">
      <Card title="FakeStore" hoverable bordered={false} style={{ width: 300 }} onClick={e=>changeStoreKey("FakeStore")}>
        <Row>
          <Col span={8}>
            <img alt="FakeStore" src="/image/logo-fakestoreapi.png" width="64px" />
          </Col>
          <Col span={16}>
            <p>Loja virtual com diversos produtos</p>
            <IconText icon={HeartOutlined} text="156" key="list-vertical-star-o" />
          </Col>
        </Row>
      </Card>

      <Divider orientation="left">My Favorites</Divider>

      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <ProductList productList={favorites} setFavorite={removeFavorite}/>
      </Content>
    </div>
  )
}
export default FavoritesPage;
