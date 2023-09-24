import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Logo = () => {
  return (
    <div>
      <Link to={'/'} state={'Home'}>
        <img src={logo} alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
