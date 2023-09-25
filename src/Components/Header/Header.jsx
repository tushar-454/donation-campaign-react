import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import Navmenu from './Navmenu';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={`${pathname !== '/' ? 'bg-white' : ''}`}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-5 relative z-50'>
          <Logo />
          <Navmenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
