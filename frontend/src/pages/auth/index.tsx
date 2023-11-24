import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { useStyles } from './styles';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
  });

  const handleSubmitForm = async (data: any) => {
    console.log('data - ', data);
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.get('/register');
        await dispatch(login(user));
        console.log();
        console.log(user.data);
        const checkUser = (user: Object) => Object.hasOwn(user, 'email');

        const isRegister = user.data.some(checkUser);
        console.log(isRegister);
        isRegister ? navigate('/') : alert('Пошел нахуй!');
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.confirmPassword) {
        const userData = {
          firstName: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
        };
        const newUser = await instance.post('/register', userData);
        console.log(newUser.data);
      } else {
        throw new Error(AppErrors.passwordDoNotMatch);
      }
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px #202020'}>
          {location.pathname === '/login' ? (
            <LoginPage navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <RegisterPage navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
