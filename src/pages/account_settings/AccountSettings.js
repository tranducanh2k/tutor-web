import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [confirmPassword, setConfirmPassword] = useState(true);

  const comparePassword = (e) => {
    setConfirmPassword(document.getElementById('newPassword').value===document.getElementById('confirmPassword').value);
  }

  return <div className='accountSettings'>
    <div className='title'>
      Change password
    </div>
    <div className='mainField'>
      <div className='row'>
        <TextField id='username' label='Username' variant='standard' 
                  InputProps={{readOnly: true,}} defaultValue="ducanhcules0411"/>
        <TextField required id='currentPassword' label='Current password' variant='standard'
                  type='password' />
      </div>
      <div className='row'>
        <TextField required error={!confirmPassword} id='newPassword' label='New password' variant='standard' type='password' />
        <TextField required error={!confirmPassword} id='confirmPassword' label='Confirm new password' variant='standard' type='password' helperText={!confirmPassword && 'Please re-enter new password'}/>
        {console.log(confirmPassword)}
      </div>
      <Button id='saveButton' color='success' variant='contained' onClick={comparePassword}> Save </Button>
    </div>
  </div>;
};

export default AccountSettings;

