import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spiral as Hamburger } from 'hamburger-react';
import { clearUser } from '../redux/slices/auth/loginSlice';
import '../modules/NavBar.css';
import {
  FaXTwitter,
  FaFacebookF,
  IoLogoGoogleplus,
  FaInstagram,
  FaPinterestP,
  logo,
} from '../assets';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authLogin.user);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('nav').classList.remove('-translate-x-[100%]');
    } else {
      document.querySelector('nav').classList.add('-translate-x-[100%]');
    }
  }, [isOpen]);

  const handleLogout = () => {
    dispatch(clearUser());
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
    {
      id: 6,
      path: '/removed_mentors',
      name: 'Inactive Mentors',
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-2 z-[99] block lg:hidden bg-white">
        <Hamburger color="#97BF0F" rounded toggled={isOpen} toggle={setOpen} />
      </div>
      <nav className="h-screen w-[90%] md:w-[70%] lg:w-[20%] shadow-lg lg:shadow-mg flex flex-col justify-between items-center -translate-x-[100%] lg:translate-x-0 transition-all duration-500 z-[90] bg-white">
        <div className="flex w-full justify-center items-center">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="navbar_links lg:pl-6 w-full">
          {navlinkData.map((link) => (
            <li
              key={link.id}
              onClick={() => setOpen(false)}
              className="border-b uppercase font-bold text-[#111111] p-0"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive
                  ? 'active_box inline-block w-[100%] h-[100%] py-4 px-4'
                  : 'inline-block w-[100%] h-[100%] bg-gray-50 py-4 px-4')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full mb-4 flex flex-col items-center">
          <button
            type="button"
            onClick={handleLogout}
            className="py-2 px-4 border-b hover:bg-red-500 hover:text-white uppercase font-bold w-[95%] text-left -mr-8"
          >
            Logout
          </button>
          <div className="flex justify-center gap-2 mb-2 mt-4">
            <NavLink
              to="https://github.com/martinkarugaba/mentor_me_now_front_end"
              target="_blank"
              className="hover:text-primary-green focus:text-primary-green"
            >
              <FaXTwitter className="max-h-16" />
            </NavLink>
            <NavLink
              to="https://github.com/martinkarugaba/mentor_me_now_front_end"
              target="_blank"
              className="hover:text-primary-green focus:text-primary-green"
            >
              <FaFacebookF className="max-h-16" />
            </NavLink>
            <NavLink
              to="https://github.com/martinkarugaba/mentor_me_now_front_end"
              target="_blank"
              className="hover:text-primary-green focus:text-primary-green"
            >
              <IoLogoGoogleplus className="max-h-16" />
            </NavLink>
            <NavLink
              to="https://github.com/martinkarugaba/mentor_me_now_front_end"
              target="_blank"
              className="hover:text-primary-green focus:text-primary-green"
            >
              <FaInstagram className="max-h-16" />
            </NavLink>
            <NavLink
              to="https://github.com/martinkarugaba/mentor_me_now_front_end"
              target="_blank"
              className="hover:text-primary-green focus:text-primary-green"
            >
              <FaPinterestP className="max-h-16" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
