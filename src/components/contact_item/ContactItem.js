import { useState } from 'react'
import { Button, TextField } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SendIcon from '@mui/icons-material/Send';
import './ContactItem.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const ContactItem = ({ student, dayStarted }) => {

    const [openCancelForm, setOpenCancelForm] = useState(false);
    const [openTimetable, setOpenTimetable] = useState(false);

    const handleCancelForm = (e) => {
        setOpenCancelForm(!openCancelForm);
    }

    const handleTimetable = (e) => {
        setOpenTimetable(!openTimetable);
    }

    return (
        <div className='contactItem'>
            <div className='upperDiv'>
                <div className='leftSide'>
                    <div className='name'>Student: <span>{student}</span> </div>
                    <div className='dayStarted'>Day started: <span>{dayStarted}</span></div>

                    {
                        openCancelForm && 
                        <div className='cancelForm'>
                            <TextField multiline sx={{width: '60%'}} variant='standard' rows={4} label='Message' />
                            <Button variant='contained' color='success' startIcon={<SendIcon />}>
                                Send
                            </Button>
                        </div>
                    }
                </div>
                <div className='rightSide'>
                    <Button variant='contained' startIcon={<MeetingRoomIcon />}>
                        Enter Classroom
                    </Button>
                    <Button color='error' onClick={(e) => handleCancelForm(e)}>
                        Cancel Class
                    </Button>
                    <Button variant='text' onClick={(e) => handleTimetable(e)}>
                        Timetable
                    </Button>
                </div>
            </div>
            {
                openTimetable && 
                <div className='schedule'>
                    <ScheduleComponent>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            }
        </div>
  )
}

export default ContactItem