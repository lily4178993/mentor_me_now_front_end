import React, { useState, useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  IoMdArrowRoundBack, FaXTwitter, FaFacebookF, IoLogoGoogleplus, FaInstagram, FaPinterestP,
} from '../assets';
import { setUser, userLogin } from '../redux/slices/auth/loginSlice';
import AlertStatus from '../components/AlertStatus';
import bgVideo from '../assets/video.mp4';

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
    <div className="h-full w-full flex justify-center items-center absolute ">
      <NavLink to="/" type="button" className="absolute z-40 top-4 left-4 text-white hover:text-primary-green focus:text-primary-green text-4xl">
        <IoMdArrowRoundBack />
      </NavLink>
      <div className="absolute z-30 p-5 text-white bg-primary-green/50 backdrop-blur-sm rounded-xl md:w-1/2 md:h-1/2 md:items-center md:rounded-none flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 uppercase">Log In</h1>
        {authError && (
          <AlertStatus alertMessage={authError} className="text-primary-orange" />
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
              className="py-2 px-4 rounded bg-primary-green hover:bg-primary-green/80 focus:bg-primary-green/80 text-white"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute w-full h-full bg-black/70 z-20" />
      <video
        autoPlay
        loop
        muted
        className="z-0 w-full h-full object-cover"
      >
        <source
          src={bgVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-40 bottom-2 text-white text-center">
        <div className="flex justify-center gap-2 mb-2 ">
          <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green"><FaXTwitter className="max-h-16" /></NavLink>
          <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green"><FaFacebookF className="max-h-16" /></NavLink>
          <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green"><IoLogoGoogleplus className="max-h-16" /></NavLink>
          <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green"><FaInstagram className="max-h-16" /></NavLink>
          <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green"><FaPinterestP className="max-h-16" /></NavLink>
        </div>
        <p className="text-sm">@cc - 2024</p>
      </div>
    </div>
  );
};

export default Login;
