import { Link, Routes, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ForumIcon from '@mui/icons-material/Forum';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Account.css';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';
import AccountSettings from '../account_settings/AccountSettings';
import Subjects from '../subjects/Subjects';
import Feedback from '../feedback/Feedback';
import Enquiries from '../enquiries/Enquiries';
import MyStudent from '../my_student/MyStudent';

const AccountTutor = () => {
    return (
        <div className='account'>
                <div className='sideMenu'>
                    <Link to='dashboard' className='item'>
                        <HomeIcon color='action'/> <div>Dashboard</div>
                    </Link>
                    <Link to='my-profile' className='item'>
                        <AssignmentIcon color='action'/> <div>My profile</div>
                    </Link>
                    <Link to='subjects' className='item'>
                        <SchoolIcon color='action'/> <div>My subjects</div>
                    </Link>
                    <Link to='enquiries' className='item'>
                        <ForumIcon color='action'/> <div>Enquiries</div>
                    </Link>
                    <Link to='my-student' className='item'>
                        <LocalLibraryIcon color='action'/> <div>My student</div>
                    </Link>
                    <Link to='feedback' className='item'>
                        <FeedbackIcon color='action'/> <div>Feedback</div>
                    </Link>
                    <Link to='account-settings' className='item'>
                        <ManageAccountsIcon color='action'/> <div>Account settings</div>
                    </Link>
                </div>
                <div className='content'>
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='my-profile' element={<Profile />} />
                        <Route path='account-settings' element={<AccountSettings />} />
                        <Route path='subjects' element={<Subjects />} />
                        <Route path='feedback' element={<Feedback />} />
                        <Route path='enquiries' element={<Enquiries />} />
                        <Route path='my-student' element={<MyStudent />} />
                    </Routes>
                </div>
        </div>
    )
}

export default AccountTutor
