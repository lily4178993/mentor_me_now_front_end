import { NavLink } from 'react-router-dom';
import '../modules/NavBar.css';
import logo from '../assets/logo.jpg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
import instagram from '../assets/instagram.svg';
import pinterest from '../assets/pinterest.svg';

const NavBar = () => {
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
    <nav className="basis-[20%] h-full shadow-md flex flex-col justify-between items-center">
      <div className="flex w-full justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="navbar_links lg:pl-6 w-full">
        {navlinkData.map((link) => (
          <li key={link.id} className="border-b uppercase font-bold text-[#111111] p-0">
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
      <div className="social_media w-full mb-4">
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={google} alt="google logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={pinterest} alt="pinterest logo" />
      </div>
    </nav>
  );
};

export default NavBar;
