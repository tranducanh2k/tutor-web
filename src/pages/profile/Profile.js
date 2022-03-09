import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react'
import './Profile.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from '@mui/lab';

const Profile = () => {

    const [value, setValue] = React.useState(new Date('2022-01-01T00:00:00'));
    const [avatarImg, setAvatarImg] = useState('');

    const handleChangeCalendar = (newValue) => {
        setValue(newValue);
    };

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setAvatarImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className='profile'> 
            <div className='title'>
                My profile
            </div>
            <div className='mainDiv'>
                <div className='column1'>
                    <TextField id='name' label='Name' variant='standard' />
                    <TextField id='location' label='Location' variant='standard' />
                    <TextField multiline id='introduction' label='Introduce yourself' variant='standard' rows={9} />
                    <TextField multiline id='experience' label='Your experience' variant='standard' rows={4} />
                    <TextField multiline id='language' label='Your language' variant='standard' />
                </div>
                <div className='column2'>
                    <form className='imgChooser'>
                        <img id='avatar' src={avatarImg} alt='' />
                        <label id='avatarLabel'>Upload your profile picture here</label>
                        <input id='avatarInput' accept='image/*' type='file' onChange={(e) => imageHandler(e)} />
                    </form>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                label="Gender"
                            >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'LGBT'}>LGBT</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker label='Birthday' inputFormat='MM/dd/yyyy' 
                            value={value}
                            onChange={handleChangeCalendar}
                            renderInput={(params) => <TextField {...params} />}/>
                    </LocalizationProvider>
                    <TextField multiline id='availability' label='Your availability' variant='standard' rows={4} />
                </div>
            </div>
            <div className='buttonRow'>
                <Button variant='outlined' color='error'> Cancel </Button>
                <Button variant='contained' color='success'> Save </Button>
            </div>
        </div>
    )
}

export default Profile
