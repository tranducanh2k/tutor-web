import React from 'react';
import './MyStudent.css';
import Contact from '../../data/contact.json';
import ContactItem from '../../components/contact_item/ContactItem';

const MyStudent = () => {

    return <div className='myStudent'>
        <div className='title'>
            My Student
        </div>
        <div className='mainDiv'>
            {
                Contact.map((c) => {
                    return <ContactItem key={c.id} student={c.student} dayStarted={c.dayStarted} />
                })
            }
        </div>
    </div>;
};

export default MyStudent;
