import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Action';
import {useNavigate} from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {message} = useSelector(state=>state.user);

  const [ph, setPh] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = ()=>{
    dispatch(loginUser(ph, pass));
  }

  useEffect(()=>{
    if(message && message == "Login successfull") navigate("/");
    // else navigate("/register");
  }, [message])
  return (
    <div className='box register'>
        <br/>
        <br/>
        <h1 className='letter'>Login Page</h1>
        <br />
        <br />
      
      <FloatingLabel
        controlId="floatingInput"
        label="Phone no"
        className="mb-3"
      >
        <Form.Control value={ph} onChange={(e)=>setPh(e.target.value)} type="text" placeholder="987654321" required/>
      </FloatingLabel>
      <br />

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" required />
      </FloatingLabel> 
      <br />
      <Button onClick={handleLogin}>Login</Button>

    </div>
  );
}

export default Login;