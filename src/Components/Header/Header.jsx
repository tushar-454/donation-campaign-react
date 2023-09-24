import Logo from './Logo';
import Navmenu from './Navmenu';

const Header = () => {
  return (
    <header className='z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-5 relative'>
          <Logo />
          <Navmenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
