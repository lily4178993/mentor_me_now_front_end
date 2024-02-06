import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import './App.css';
import Home from './pages/Home';

const App = () => (
  <>
    <main>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  </>
);

export default App;
