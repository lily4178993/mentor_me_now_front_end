import React, { useState, useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, userLogin } from '../redux/slices/auth/loginSlice';
import AlertStatus from '../components/AlertStatus';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error: authError } = useSelector((state) => state.authLogin);
  const [username, setUsername] = useState('');
  const [, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/mentors');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resultAction = await dispatch(userLogin(username));
      const user = unwrapResult(resultAction);
      dispatch(setUser(user));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium mb-4">Log In</h1>
        {authError && (
          <AlertStatus alertMessage={authError} className="text-primary-red" />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              className="rounded p-2 px-4 border"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 rounded bg-primary-green hover:bg-primary-green/80 text-white"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
