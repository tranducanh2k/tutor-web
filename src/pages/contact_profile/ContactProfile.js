import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import tutorData from '../../data/tutor_data.json';
import Avatar from '@mui/material/Avatar';
import './ContactProfile.css';
import { Button, Rating, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const ContactProfile = () => {

    const {username} = useParams();
    const chosenUser = tutorData.find((t) => t.username === username);

    const [openEnquiry, setOpenEnquiry] = useState(false);

    const handleOpenEnquiry = (e) => {
        setOpenEnquiry(!openEnquiry);
    }
    
    return <div className='contactProfile'>
        <div className='type'>
            {chosenUser.type}
        </div>
        <div className='leftColumn'>
            <div className='card' id='card1'>
                <Avatar sx={{width:'12rem', height:'12rem'}} alt={chosenUser.name} src={chosenUser.image} />
                <div className='column1'>
                    {
                        chosenUser.type === 'tutor'?
                        (<div className='verified'>
                            <CheckIcon sx={{color:'white'}}/> Verified tutor
                        </div>):
                        (<div className='verified'>
                            <CheckIcon sx={{color:'white'}}/> Verified profile
                        </div>)
                    }
                    <div id='name'> {chosenUser.name} </div>
                    <div id='location'> <LocationOnIcon sx={{color:'red'}}/> {chosenUser.location} </div>
                </div>
                <div className='column2'>
                    <div id='gender'> <span>Gender:</span> {chosenUser.gender} </div>
                    <div id='birday'> <span>Birthday:</span> {chosenUser.birthday} </div>
                    <div id='language'> <span>Language:</span> {chosenUser.language} </div>
                    <div id='availability'> <span>Availability:</span> {chosenUser.availability} </div>
                </div>
            </div>
            <div className='card' id='card3'>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Level</th>
                        <th>Price</th>
                    </tr>
                    {
                        chosenUser.subject.map((s) => {
                            return <tr>
                                <td>{s.subject}</td>
                                <td>{s.level}</td>
                                <td>
                                    {chosenUser.type === 'tutor'? (s.price + ' VND'):('-')}
                                </td>
                            </tr>
                        })
                    }
                </table>
            </div>
            <div className='card' id='card4'>
                <span>Introduce</span>
                <p> {chosenUser.introduction} </p>
            </div>
            <div className='card' id='card5'>
                <span>Experience</span>
                <p> {chosenUser.experience} </p> 
            </div>
        </div>
        <div className='rightColumn'>
            <div className='card' id='card2'>
                <Button variant='contained' onClick={(e) => handleOpenEnquiry(e)} 
                        sx={{height:'60px', width: '80%', borderRadius: '30px',
                            boxShadow: 'none', fontSize: '1rem'}}> 
                    CONTACT THIS {chosenUser.type} 
                </Button>
                {
                    openEnquiry && 
                    <div className='enquiryForm'>
                        <TextField variant='standard' sx={{width: '15rem'}} label='Message' rows={4} multiline />
                        <Button variant='contained' color='success'  startIcon={<SendIcon />}>Send</Button>
                    </div>
                }
            </div>
            <div className='card' id='card6'>
                <span>Feedbacks</span>
                {chosenUser.feedback.map((f) => (
                    <div className='feedbackItem'>
                        <Rating value={f.rate} readOnly />
                        <TextField InputProps={{readOnly: true}} value={f.comment} variant='standard' multiline sx={{width:'280px'}}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
};

export default ContactProfile;
