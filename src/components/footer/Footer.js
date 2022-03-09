import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Instagram />
                <Facebook />
                <Twitter />
                <LinkedIn />
            </div>
            <p> &copy; 2021 tutor.com</p>
        </div>
    )
}

export default Footer
