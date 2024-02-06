import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
