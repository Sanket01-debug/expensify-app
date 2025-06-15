import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Form,Input,message} from "antd";
import axios from 'axios';
import Spinner from '../components/Spinner.js';

const Register=()=>{
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);

  // Submit Handler
  const submitHandler=async(values)=>{
    try{
      setLoading(true);
      await axios.post("/user/register",values);
      message.success('User Registered Successfully');
      setLoading(false);
      navigate('/login');
    }catch(error){
      setLoading(false);
      message.error('Something went wrong');
    }
  };

  //prevent for login user
  useEffect(()=>{
    if (localStorage.getItem('user')){
      navigate("/");
    }
  },[navigate]);

  return(
    <>
      <div className='register-page align-items-center justify-content-center'>
        {loading&&<Spinner />}

        <Form className='register-form' layout='vertical' onFinish={submitHandler}>
          <h2>Register Page</h2>
          <Form.Item label="Name" name="name">
            <Input/>
          </Form.Item>

          <Form.Item label="E-mail" name="email">
            <Input type='email'/>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password'/>
          </Form.Item>

          <div className='d-flex justify-content-between'>
            <Link to='/login'>Already Registered, Please Login</Link>
          </div>
          <div className='p-2'></div>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-primary'>Register</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register;