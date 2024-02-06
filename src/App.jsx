import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
