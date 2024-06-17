import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homepage/Home';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import FacultyProfile from './components/faculty-profile/FacultyProfile';
import HodProfile from './components/hod-profile/HodProfile';
import AdminProfile from './components/admin-profile/AdminProfile'; // Import AdminProfile
import RequestPage from './components/requestpage/RequestPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ErrorPage from './components/ErrorPage';
import { UserProvider } from './UserContext';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/hod-profile" element={<HodProfile />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/request-guest-lecture" element={<RequestPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default App;
