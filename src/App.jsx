import { Routes, Route, useLocation } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import ReserveMentor from './components/ReserveMentor';
import Reservations from './components/Reservations';
import AddMentor from './components/AddMentor';
import NavBar from './components/NavBar';
import MentorDetails from './components/MentorDetails';
import RemoveMentors from './pages/RemoveMentors';

function App() {
  const location = useLocation();

  return (
    <main className="w-full h-auto md:h-[100vh] flex justify-start items-center border-blue-500">
      {location.pathname !== '/' && <NavBar />}
      <section className="h-full lg:w-[80%] flex">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/mentors" element={<Home />} />
          <Route path="/mentors/:id" element={<MentorDetails />} />
          <Route path="/reserveMentor" element={<ReserveMentor />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/addMentor" element={<AddMentor />} />
          <Route path="/remove-mentor" element={<RemoveMentors />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
