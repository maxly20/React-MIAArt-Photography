import './Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav class='navbar'>
      <Link to='/'>
        <img class='logo' src={Logo} alt='' />
      </Link>
      <ul class='nav-links'>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/portfolio'>portfolio</Link>
        </li>
        <li>
          <Link to='/gallery'>gallery</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
