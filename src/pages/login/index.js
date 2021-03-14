import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { Card } from 'antd';

const LoginPage = ({login, error, registerUser}) => {
  const [register, setRegister] = useState(false);
  
  const showRegister = show => {
    setRegister(show);
  }

  return (
    <div className="site-card-border-less-wrapper login-page">
      { register ?
        <Card title="Register" bordered={false} style={{ width: 300 }}>
          <RegisterForm registerUser={registerUser} error={error} showRegister={showRegister}/>
        </Card>
      : 
        <Card title="Login" bordered={false} style={{ width: 300 }}>
          <LoginForm login={login} error={error} showRegister={showRegister}/>
        </Card>
      }
    </div>
    
  )
}

export default LoginPage
