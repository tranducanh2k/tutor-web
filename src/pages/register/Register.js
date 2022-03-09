import React from 'react'
import './Register.css';
import { Button, Select, TextField, FormControl, InputLabel, MenuItem, Box } from '@mui/material';

const Register = () => {
    return (
        <div className='registerBackground'>
            <div className='register'>
                <div className='leftside'>
                    <h1>
                        Register at Tutor.com
                    </h1>
                    <p>
                        Fill the form to become a member of Tutor.com
                    </p>
                </div>
                <div className='rightside'>
                    <h1> Sign up </h1>
                    <Box className='tutor' >
                        <FormControl fullWidth>
                            <InputLabel>Tutor</InputLabel>
                            <Select label="Tutor">
                                <MenuItem value={'Tutor'}>Tutor</MenuItem>
                                <MenuItem value={'Student'}>Student</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField className='username' label='Username' variant='standard' />
                    <TextField className='email' label='Email' variant='standard' />
                    <TextField className='password' label='Password' variant='standard' />
                    <TextField className='confirm' label='Confirm Password' variant='standard' />
                    <Button className='getStarted' variant="contained" >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register
