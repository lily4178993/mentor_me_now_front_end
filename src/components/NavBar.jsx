import { NavLink } from 'react-router-dom';
import '../modules/NavBar.css';

const NavBar = () => (
  <nav className="">
    <div>Logo</div>
    <ul>
      <li>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-box' : '')}>
          Mentors
        </NavLink>
      </li>
      <li>
        <NavLink to="/reserveMentor" className={({ isActive }) => (isActive ? 'active-box' : '')}>
          Reserve Mentor
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active-box' : '')}>
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="/addMentor" className={({ isActive }) => (isActive ? 'active-box' : '')}>
          Add Mentor
        </NavLink>
      </li>
      <li>
        <NavLink to="/deleteMentor" className={({ isActive }) => (isActive ? 'active-box' : '')}>
          Delete Mentor
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
