import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import {Box} from "@mui/material";
import {instance} from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';


const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e: {preventDefault: () => void;}) => {
        e.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email,
                    password
                }
                const user = await instance.get('/register')
                await dispatch(login(user));
                console.log()
                console.log(user.data);
                const checkUser = (user: Object) => Object.hasOwn(user, 'email');

                const isRegister = (user.data).some(checkUser);
                console.log(isRegister)
                isRegister ? navigate('/') : alert('Пошел нахуй!')
            } catch (e) {
                return e
            }
        } else {
            if (password === repeatPassword) {
                const userData = {
                    firstName,
                    username,
                    email,
                    password
                }
                const newUser = await instance.post('/register', userData)
                console.log(newUser.data)
            } else {
                throw new Error(AppErrors.passwordDoNotMatch)
            }
        } 
    }

    return (
        <div className='root'>
            <form className='form' onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'                
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    >
                    {
                        location.pathname === '/login' 
                            ? <LoginPage 
                                    setEmail={setEmail} 
                                    setPassword={setPassword}
                                    navigate={navigate}
                                /> : location.pathname === '/register' 
                                ? <RegisterPage 
                                    setEmail={setEmail}
                                    setPassword={setPassword}
                                    setRepeatPassword={setRepeatPassword}
                                    setFirstName={setFirstName}
                                    setUsername={setUsername}
                                    navigate={navigate}
                                    /> 
                                : null
                    }
                </Box>
            </form>
        </div>
    )
};

export default AuthRootComponent;