import React, {useState} from 'react';
import { Form, Input, Button, Checkbox, Alert, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginForm = ({login, error, showRegister}) => {
  const [details, setDetails] = useState({email: "", password: ""});
  
  const submitHandler = e => {
    login(details);
  }

  return (
    <>
      { error && <Alert banner message={error} closable/> }
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
      >
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!',},]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" 
            onChange={e=>setDetails({...details, email: e.target.value})}
            value={details.email} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!',},]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"
          onChange={e=>setDetails({...details, password: e.target.value})}
          value={details.password} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Row style={{textAlign: "center", alignItems: "center"}}>
            <Col span={8}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Col>
            <Col span={8}>Or</Col>
            <Col span={8}><a onClick={e=>showRegister(true)}>register now!</a></Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
