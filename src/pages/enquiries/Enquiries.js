import React, { useState } from 'react';
import EnquiryItem from '../../components/enquiry_item/EnquiryItem';
import CancelClassEnquiryItem from '../../components/enquiry_item/CancelClassEnquiryItem';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import './Enquiries.css';

const Enquiries = () => {
    const enquiriesList = [{id:1, 
                            from: 'ducanh1', 
                            to: 'lebong1', 
                            timestamp: '2022-01-01T00:00:00', 
                            content: 'can i be your student'},
                        {id:1, from: 'ducanh2', to: 'lebong1', timestamp: '2022-01-01T00:00:00', content: 'can i be your student'}];
    const cancelClassEnquiriesList = [{id:1, classId: 1, from: 'ducanh1', to: 'lebong1', timestamp: '2022-01-01T00:00:00', content: 'i want to cancel the class'}]

    const [enquiries, setEnquiries] = useState(enquiriesList);
    const [cancelEnquiries, setCancelEnquiries] = useState(cancelClassEnquiriesList);

    return <div className='enquiries'>
        <div className='title'>
            Enquiries
        </div>
        <div className='instruction'>
            <InfoIcon /> You can accept enquiries to start learning with a tutor/student or reject enquiries
        </div>
        <div className='mainDiv'>
            {
                enquiries.map((enq) => {
                    return <EnquiryItem key={enq.id} from={enq.from}
                            to={enq.to} timestamp={enq.timestamp} content={enq.content} />
                })
            }
            <div className='cancelClassDiv'>
                Cancel Class Enquiries
            </div>
            <div className='instruction'>
                <WarningIcon color='error' /> Accept these enquiries to cancel your class
            </div>
            {
                cancelEnquiries.map((e) => {
                    return <CancelClassEnquiryItem key={e.id} timestamp={e.timestamp}
                            from={e.from} to={e.to} classId={e.classId} content={e.content} />
                })
            }
        </div>
    </div>;
};

export default Enquiries;
