import {useState} from 'react';
import Home from './pages/home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './pages/search/Search';
import Login from './components/login/Login';
import Register from './pages/register/Register';
import AccountTutor from './pages/account/AccountTutor';
import AccountStudent from './pages/account/AccountStudent';
import Profile from './pages/profile/Profile';
import Dashboard from './pages/dashboard/Dashboard';
import AccountSettings from './pages/account_settings/AccountSettings';
import Subjects from './pages/subjects/Subjects';
import Feedback from './pages/feedback/Feedback';
import Enquiries from './pages/enquiries/Enquiries';
import MyStudent from './pages/my_student/MyStudent';
import ContactProfile from './pages/contact_profile/ContactProfile';
import DashboardStudent from './pages/dashboard/DashboardStudent';
import SubjectsStudent from './pages/subjects/SubjectsStudent';
import MyTutor from './pages/my_student/MyTutor';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const onClickLogin = (e) => {
    setLoggedIn(!loggedIn);
    setShowLogin(!showLogin);
  }

  const onClickLogout = (e) => {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar showLogin={(e) => setShowLogin(!showLogin)} loggedIn={loggedIn} onClickLogout={onClickLogout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact-profile/:username' element={<ContactProfile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account-tutor' element={<AccountTutor />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='my-profile' element={<Profile />} />
            <Route path='account-settings' element={<AccountSettings />} />
            <Route path='subjects' element={<Subjects />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='my-student' element={<MyStudent />} />
          </Route>
          <Route path='/account-student' element={<AccountStudent />}>
            <Route path='dashboard' element={<DashboardStudent />} />
            <Route path='my-profile' element={<Profile />} />
            <Route path='account-settings' element={<AccountSettings />} />
            <Route path='subjects' element={<SubjectsStudent />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='my-tutor' element={<MyTutor />} />
          </Route>
        </Routes>
        { showLogin && <Login onClick={onClickLogin} /> }
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
