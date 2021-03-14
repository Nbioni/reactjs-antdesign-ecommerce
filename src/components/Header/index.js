import React from 'react';
import { Layout, Row, Col, Menu, Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;


const HeaderComponent = ({logout, user, changePage}) => {
  return (
    <Header className="header">
        <Row>
          <Col>
              <img alt="logo" className="logo" src="/image/logo-growth-hackers.png" />
          </Col>
          <Col>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
              <Menu.Item key="Home" onClick={e=>changePage("Home")}>Home</Menu.Item>
              <Menu.Item key="Favorites" onClick={e=>changePage("Favorites")}>Favorites</Menu.Item>
            </Menu>
          </Col>
          <Col flex="auto" className="welcome">
            <h2>Welcome, <span>{user.name}</span>
              <Tooltip placement="bottom" title="Logout">
                <Button shape="circle" type="link" icon={<LogoutOutlined />} onClick={logout} />
              </Tooltip>
            </h2>
          </Col>
        </Row>
      </Header>
  )
}
export default HeaderComponent
