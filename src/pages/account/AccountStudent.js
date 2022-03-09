import { Link, Routes, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Account.css';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';
import AccountSettings from '../account_settings/AccountSettings';
import Subjects from '../subjects/Subjects';
import Enquiries from '../enquiries/Enquiries';
import MyStudent from '../my_student/MyStudent';
import DashboardStudent from '../dashboard/DashboardStudent';
import SubjectsStudent from '../subjects/SubjectsStudent';
import MyTutor from '../my_student/MyTutor';

const AccountStudent = () => {
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
                    <Link to='my-tutor' className='item'>
                        <LocalLibraryIcon color='action'/> <div>My tutor</div>
                    </Link>
                    <Link to='account-settings' className='item'>
                        <ManageAccountsIcon color='action'/> <div>Account settings</div>
                    </Link>
                </div>
                <div className='content'>
                    <Routes>
                        <Route index element={<DashboardStudent />} />
                        <Route path='dashboard' element={<DashboardStudent />} />
                        <Route path='my-profile' element={<Profile />} />
                        <Route path='account-settings' element={<AccountSettings />} />
                        <Route path='subjects' element={<SubjectsStudent />} />
                        <Route path='enquiries' element={<Enquiries />} />
                        <Route path='my-tutor' element={<MyTutor />} />
                    </Routes>
                </div>
        </div>
    )
}

export default AccountStudent
