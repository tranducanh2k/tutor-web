import { Button, TextField } from '@mui/material';
import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';

const Login = ({ onClick }) => {
    return (
        <div className='login'>
            <TextField className='username' label='Username' variant='outlined' />
            <TextField className='password' label='Password' variant='outlined' />
            <Link to='/account-tutor'>
                <Button className='loginButton' color='success' variant='contained' onClick={onClick}> Login </Button>
            </Link>
        </div>
    )
}

export default Login
