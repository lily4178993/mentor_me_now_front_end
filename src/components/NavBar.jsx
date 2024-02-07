import { NavLink } from 'react-router-dom';
import '../modules/NavBar.css';
import logo from '../assets/logo.jpg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
import instagram from '../assets/instagram.svg';
import pinterest from '../assets/pinterest.svg';

const NavBar = () => (
  <nav className="basis-[20%]">
    <img src={logo} alt="logo" className="logo" />
    <ul className="navbar_links">
      <li>
        <NavLink to="/mentors" className={({ isActive }) => (isActive ? 'active_box' : '')}>
          Mentors
        </NavLink>
      </li>
      <li>
        <NavLink to="/reserveMentor" className={({ isActive }) => (isActive ? 'active_box' : '')}>
          Reserve Mentor
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active_box' : '')}>
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="/addMentor" className={({ isActive }) => (isActive ? 'active_box' : '')}>
          Add Mentor
        </NavLink>
      </li>
      <li>
        <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active_box' : '')}>
          Delete
        </NavLink>
      </li>
    </ul>
    <div className="social_media">
      <img src={twitter} alt="twitter logo" />
      <img src={facebook} alt="facebook logo" />
      <img src={google} alt="google logo" />
      <img src={instagram} alt="instagram logo" />
      <img src={pinterest} alt="pinterest logo" />
    </div>
    <p className="copyright_text">&#169;Copyright 2024</p>
  </nav>
);

export default NavBar;
