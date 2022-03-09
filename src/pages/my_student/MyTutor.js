import React from 'react';
import './MyStudent.css';
import Contact from '../../data/contact.json';
import ContactItemStudent from '../../components/contact_item/ContactItemStudent';

const MyTutor = () => {
    return <div className='myStudent'>
        <div className='title'>
            My Tutors
        </div>
        <div className='mainDiv'>
            {
                Contact.map((c) => {
                    return <ContactItemStudent key={c.id} tutor={c.tutor} dayStarted={c.dayStarted} />
                })
            }
        </div>
    </div>;
}

export default MyTutor