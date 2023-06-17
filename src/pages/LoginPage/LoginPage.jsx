import { Button, Divider, Form, Input, message, Typography } from 'antd';
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
//import { Link, useNavigate } from "react-router-dom";

//import './login.scss';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import { login } from "../../store/auth";
import css from './LoginPage.module.css';
import { useState } from 'react';
import { loginUser } from 'redux/auth/authOperations';

const LoginPage = () => {
  //const { login } = useContext(AuthContext);
  // const { login } = useSelector((state) => state.authReducer.authSlice);
  const dispatch = useDispatch();

  const [user, setInputs] = useState({
    username: '',
    password: '',
  });
  // const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const SocialLogin = name => {
    message.success('Вхід через ' + name);
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(loginUser(user));
    //navigate('/');
  };

  return (
    // <div className={css.login}>
    //   <form onSubmit={handleLogin}>
    //     <input type="text" name="name" onChange={handleChange} />
    //     <input type="email" name="email" onChange={handleChange} />
    //     <input type="password" name="password" onChange={handleChange} />
    //     <button type="submit">login</button>
    //   </form>
    // </div>
    <div className={css.login}>
      <Form className={css.loginForm}>
        <Typography.Title className={css.loginTitle}>Login</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: 'text',
              message: "Не вірнe ім'я ",
            },
          ]}
          label="email"
          name={'email'}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Будь ласка введіть свій пароль ',
            },
          ]}
          label="Password"
          name={'password'}
        >
          <Input.Password
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Login
        </Button>
        <Divider style={{ borderColor: 'green' }}>or Login with</Divider>
        <div className={css.socialLogin}>
          <GoogleOutlined
            className={css.pointer}
            name="google"
            onClick={() => SocialLogin('Google')}
            style={{ color: 'red' }}
          />
          <FacebookFilled
            className={css.pointer}
            onClick={() => SocialLogin('Facebook')}
            style={{ color: 'blue' }}
          />
          <TwitterOutlined
            className={css.pointer}
            onClick={() => SocialLogin('Twitter')}
            style={{ color: 'cyan' }}
          />
        </div>
        <div className={css.info}>
          Ще не рееструвались?
          <Link to={'/register'}>
            <span>Register</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
