import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import MainPage from './components/mainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
}

export default App;
