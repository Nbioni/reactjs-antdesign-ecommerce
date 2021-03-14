import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Alert, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const RegisterForm = ({ registerUser, error, showRegister}) => {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  
  const submitHandler = e => {
    registerUser(details);
  }

  return (
    <Form
        name="normal_login"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
      >
        { error && <Alert banner message={error} closable/> }
        <Form.Item name="name" rules={[{ required: true, message: 'Please input your Name!',},]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" 
            onChange={e=>setDetails({...details, name: e.target.value})}
            value={details.name} />
        </Form.Item>
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
                Register
              </Button>
            </Col>
            <Col span={8}>Or</Col>
            <Col span={8}><a onClick={e=>showRegister(false)}>Back</a></Col>
          </Row>
        </Form.Item>
      </Form>
  )
}
export default RegisterForm
