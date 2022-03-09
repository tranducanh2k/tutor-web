import {useState} from 'react'
import './EnquiryItem.css';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '@mui/material';

const EnquiryItem = ({ from, to, timestamp, content  }) => {

    const [openContent, setOpenContent] = useState(false);

    const handleContent = (e) => {
        setOpenContent(!openContent);
    }

    return (
        <div className='enquiryItem'>
            <div className='leftSide'  onClick={(e) => handleContent(e)}>
                <div className='timestamp'>{ timestamp }</div>
                <div className='from'>From: <span>{from}</span></div>
                <div className='to'>To: <span>{to}</span></div> 
                { openContent && 
                <div className='contentEnquiry'>
                    Message: <span>{content}</span>
                </div> }
            </div>
            <div className='rightSide'>
                <Button>
                    <CheckIcon color='success' />
                </Button>
                <Button>
                    <HighlightOffIcon color='error' />
                </Button>
            </div>
        </div>
    )
}

export default EnquiryItem