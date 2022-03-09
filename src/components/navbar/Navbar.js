import React from 'react';
import homeImg from '../../assets/home.jpg';
import Button from '@mui/material/Button';
import './Navbar.css';
import {Link} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';


const Navbar = ({ showLogin, loggedIn, onClickLogout }) => {
    return (
        <div className='navbar'>
            <div className='upper-navbar'>
                <Link to='/'>
                    <img src={homeImg} alt="home" />
                </Link>
                {
                    !loggedIn && <Button id='login' variant="contained" onClick={showLogin} > Login </Button>
                }
                {
                    !loggedIn &&
                    <Link to='/register'>
                        <Button id='register' variant="outlined" > Register </Button>
                    </Link>
                }
                {
                    loggedIn && 
                    <Link to='/account-tutor'>
                        <Button className='accountBtn' variant='outlined' startIcon={<PersonIcon />}> Account </Button>
                    </Link>
                }
                {
                    loggedIn && 
                    <Link to='/'>
                        <Button className='logout' variant='outlined' color='error' onClick={onClickLogout} > Log out </Button>
                    </Link>
                }
            </div>
            <div className='lower-navbar'>
                <Link to='/'> Home </Link>
                <Link to='/search'> Search </Link>
                <Link to='/student'> For Student </Link>
                <Link to='/tutors'> For Tutors </Link>
                <Link to='/contact'> Contact us </Link>
            </div>
        </div>
    );
}

export default Navbar;
