import React from 'react';
import { Layout, Row, Col, Button, List, Typography, Divider, Input, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const SiderMenu = ({changeStore, changeCategory, categories, searching}) => {
  return ( 
    <Sider className="site-layout-background" width={300}>
      <Search placeholder="Search for products, brands and more" onSearch={searching} style={{ width: 250 }} />
      <Divider orientation="left">Stores</Divider>
      <Row>
        <Col>
          <a className="fakestore-btn" onClick={e=>changeStore("FakeStore")}>
            <img width={24} size='large' src="/image/logo-fakestoreapi.png"/>
              FakeStore
          </a>
        </Col>
        <Col></Col>
      </Row>
      <Divider orientation="left">Categories</Divider>
      <Row><a onClick={e=>changeCategory("")}>All</a></Row>
        {categories.map((category, index)=>{
          return <Row key={index}><a onClick={e=>changeCategory(category)}>{category}</a></Row>
        })}
    </Sider>
  )
}

export default SiderMenu
