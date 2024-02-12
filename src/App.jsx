import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReserveMentor from './components/ReserveMentor';
import AddMentor from './components/AddMentor';
import NavBar from './components/NavBar';
import MentorDetails from './components/MentorDetails';
import RemoveMentorsPage from './pages/RemoveMentorsPage';
import RemovedMentorsList from './pages/RemovedMentorsList';

function App() {
  const isAuthenticated = useSelector((state) => state.authLogin.isAuthenticated);

  return (
    <main className="w-full h-auto md:h-[100vh] flex justify-start items-center border-blue-500">
      { isAuthenticated && <NavBar /> }
      <section className="h-full lg:w-[80%] flex">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/mentors" /> : <SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/mentors" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/mentors/:id" element={isAuthenticated ? <MentorDetails /> : <Navigate to="/login" />} />
          <Route path="/reserveMentor" element={isAuthenticated ? <ReserveMentor /> : <Navigate to="/login" />} />
          <Route path="/reservations" element={isAuthenticated ? <Reservations /> : <Navigate to="/login" />} />
          <Route path="/addMentor" element={isAuthenticated ? <AddMentor /> : <Navigate to="/login" />} />
          <Route path="/remove_mentor" element={isAuthenticated ? <RemoveMentorsPage /> : <Navigate to="/login" />} />
          <Route path="/removed_mentors" element={isAuthenticated ? <RemovedMentorsList /> : <Navigate to="/login" />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
