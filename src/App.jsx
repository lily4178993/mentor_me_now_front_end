import { Routes, Route, useLocation } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import ReserveMentor from './components/ReserveMentor';
import Reservations from './components/Reservations';
import AddMentor from './components/AddMentor';
import Delete from './components/Delete';
import NavBar from './components/NavBar';
import './App.css';
import MentorDetails from './components/MentorDetails';

function App() {
  const location = useLocation();

  return (
    <main className="w-full h-auto md:h-[100vh] flex justify-start items-start border-blue-500">
      {location.pathname !== '/' && <NavBar />}
      <section className="border-red-500 h-full lg:w-[80%]">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/mentors" element={<Home />} />
          <Route path="/mentors/:id" element={<MentorDetails />} />
          <Route path="/reserveMentor" element={<ReserveMentor />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/addMentor" element={<AddMentor />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
