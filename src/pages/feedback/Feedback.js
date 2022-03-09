import { Rating, TextField } from '@mui/material';
import React from 'react';
import './Feedback.css'

const Feedback = () => {
    //fake data
    const feedbacks = [{comment:'great teacher', rate: 4},
                        {comment:'great teacher', rate: 3},
                        {comment:'great teacher', rate: 4},{comment:'great teacher', rate: 0}];

    return <div className='feedback'>
        <div className='title'>
            Feedback
        </div>
        <div className='mainDiv'>
            {feedbacks.map((f) => (
                <div className='feedbackItem'>
                    <Rating value={f.rate} readOnly />
                    <TextField InputProps={{readOnly: true}} value={f.comment} variant='standard' multiline/>
                </div>
            ))}
        </div>
    </div>;
};

export default Feedback;
