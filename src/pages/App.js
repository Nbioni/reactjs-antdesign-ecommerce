import React, {useState} from 'react';
import LoginPage from './login';
import HomePage from './home';
import {postUser, getUser} from '../services/loginService';

function App() {

  const [user, setUser] = useState({id:"", name:"", email:""});
  const [error, setError] = useState("");

  const login = async details => {
    const response = await getUser(details.email, details.password);
    if(response){
      setUser({id:response._id, name: response.name, email: response.email });
    }else{
      setError("Email and Password do not match!");
    }
  }
  const logout = () => {
    setUser({id:"", name:"", email:""});
  }
  
  const registerUser = async details => {
    const response = await postUser(details.name, details.email, details.password);
    setUser({
      id: response._id,
      name: response.name,
      email: response.email
    });
  }

  return (
    <div className="App">
      {user.email ? 
        <HomePage logout={logout} user={user} />
      : 
        <LoginPage login={login} error={error} registerUser={registerUser}/>
      }
    </div>
  );
}

export default App;
