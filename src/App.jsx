import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spiral as Hamburger } from 'hamburger-react';
import Login from './pages/Login';
import SplashScreen from './pages/SplashScreen';
import SignUpForm from './components/SignUpForm';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReserveMentor from './components/ReserveMentor';
import AddMentor from './components/AddMentor';
import NavBar from './components/NavBar';
import MentorDetails from './components/MentorDetails';
import RemoveMentorsPage from './pages/RemoveAMentor';
import RemovedMentorsList from './pages/RemovedMentorsList';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(
    (state) => state.authLogin.isAuthenticated,
  );
  return isAuthenticated ? children : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  const isAuthenticated = useSelector(
    (state) => state.authLogin.isAuthenticated,
  );

  return (
    <main className="w-full h-auto md:h-[100vh] flex justify-start items-center overflow-hidden border-blue-500">
      <div className="lg:w-[20%] -translate-x-[100%] lg:translate-x-0 transition-all duration-500 ">
        {isAuthenticated && <NavBar />}
      </div>
      <section className="h-full lg:w-[80%] flex">
        <div>
          <Hamburger color="97BF0F" rounded />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/mentors" /> : <SplashScreen />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUpForm />} />
          <Route
            path="/mentors"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/:id"
            element={
              <ProtectedRoute>
                <MentorDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reserveMentor"
            element={
              <ProtectedRoute>
                <ReserveMentor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addMentor"
            element={
              <ProtectedRoute>
                <AddMentor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/remove_mentor"
            element={
              <ProtectedRoute>
                <RemoveMentorsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/removed_mentors"
            element={
              <ProtectedRoute>
                <RemovedMentorsList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </section>
    </main>
  );
};

export default App;
