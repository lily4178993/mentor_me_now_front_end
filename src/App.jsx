import { Routes, Route, useLocation } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import ReserveMentor from './components/ReserveMentor';
import Reservations from './components/Reservations';
import AddMentor from './components/AddMentor';
import DeleteMentor from './components/DeleteMentor';
import NavBar from './components/Navbar';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reserveMentor" element={<ReserveMentor />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/addMentor" element={<AddMentor />} />
          <Route path="/deleteMentor" element={<DeleteMentor />} />
        </Routes>
      </main>
    </>
  );
}

export default App;