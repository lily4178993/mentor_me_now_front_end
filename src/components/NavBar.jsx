import { NavLink } from 'react-router-dom';
import '../modules/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div>Logo</div>
    <ul className="navbar_links">
      <li>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active_box' : '')}>
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
  </nav>
);

export default NavBar;
