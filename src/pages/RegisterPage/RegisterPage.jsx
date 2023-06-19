import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './RegisterPage.module.css';
import { registrationUser } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [user, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegistracion = e => {
    dispatch(registrationUser(user));
  };

  return (
    <div className={css.register}>
      <Form className={css.registerForm} onSubmitCapture={handleRegistracion}>
        <Typography.Title className={css.registerTitle}>
          Register
        </Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Будь ласка введіть своє ім'я ",
            },
          ]}
          label="Name"
          name={'name'}
        >
          <Input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Не вірний email ',
            },
          ]}
          label="Email"
          name={'email'}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
          />
        </Form.Item>

        {/* {err && <div style={{ color: 'red' }}>{err}</div>} */}
        <Button
          type="primary"
          htmlType="submit"
          block
          // onClick={handleRegistracion}
        >
          Зарееструватись
          {/* <Link to={'/login'}>Зарееструватись</Link> */}
        </Button>

        <div className={css.info}>
          Вже зареестровані?
          <Link to={'/login'}>
            <span>Login</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
