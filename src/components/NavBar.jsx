import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/slices/auth/loginSlice';
import '../modules/NavBar.css';
import {
  FaXTwitter, FaFacebookF, IoLogoGoogleplus, FaInstagram, FaPinterestP, FaEquals, logo,
} from '../assets';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authLogin.user);
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const navlinkData = [
    {
      id: 1,
      path: '/mentors',
      name: 'Mentors',
    },
    {
      id: 2,
      path: '/reserveMentor',
      name: 'Reserve Mentor',
    },
    {
      id: 3,
      path: '/reservations',
      name: 'Reservations',
    },
    {
      id: 5,
      path: '/addMentor',
      name: 'Add Mentor',
    },
    {
      id: 6,
      path: '/remove_mentor',
      name: 'Remove Mentors',
    },
  ];

  return (
    <>
      <button type="button" title="menu" aria-label="menu" onClick={toggleNav} className="absolute top-2 left-2 text-3xl text-primary-green lg:hidden">
        <FaEquals />
      </button>
      <nav className={`transition-all duration-300 ${isNavExpanded ? 'basis-[20%]' : 'w-0 overflow-hidden'} h-full shadow-md flex flex-col justify-between items-center z-50`}>
        <div className="flex w-full justify-center items-center">
          <img src={logo} alt="logo" className="logo" />
        </div>
        {isNavExpanded && (
        <>
          <ul className="navbar_links lg:pl-6 w-full">
            {navlinkData.map((link) => (
              <li key={link.id} className="uppercase font-bold text-[#111111] p-0">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive
                    ? 'active_box inline-block w-[100%] h-[100%] py-4 px-4'
                    : 'inline-block w-[100%] h-[100%] py-4 px-4 hover:bg-primary-green/50 hover:text-white hover:drop-shadow-xl focus:bg-primary-green/50 focus:text-white focus:drop-shadow-xl')}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="w-full mb-4 flex flex-col items-center">
            <button type="button" onClick={handleLogout} className="py-2 px-4 mb-8 border-b hover:bg-red-500 hover:text-white hover:drop-shadow-xl focus:bg-red-500 focus:text-white focus:drop-shadow-xl uppercase font-bold w-[91.5%] text-left -mr-[1.5rem]">
              Logout
            </button>
            <div className="flex justify-center gap-2 mb-2 mt-4">
              <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green hover:-translate-y-2 focus:-translate-y-2"><FaXTwitter className="text-xl" /></NavLink>
              <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green hover:-translate-y-2 focus:-translate-y-2"><FaFacebookF className="text-xl" /></NavLink>
              <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green hover:-translate-y-2 focus:-translate-y-2"><IoLogoGoogleplus className="text-xl" /></NavLink>
              <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green hover:-translate-y-2 focus:-translate-y-2"><FaInstagram className="text-xl" /></NavLink>
              <NavLink to="https://github.com/martinkarugaba/mentor_me_now_front_end" target="_blank" className="hover:text-primary-green focus:text-primary-green hover:-translate-y-2 focus:-translate-y-2"><FaPinterestP className="text-xl" /></NavLink>
            </div>
            <p>@cc - 2024</p>
          </div>
        </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
