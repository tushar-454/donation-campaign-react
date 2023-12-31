import { useState } from 'react';
import { FaBars, FaBarsStaggered } from 'react-icons/fa6';
import { NavLink, useLoaderData } from 'react-router-dom';
const Navmenu = () => {
  const [navShow, setNavShow] = useState(false);
  const menu = useLoaderData();
  const handleNavShow = () => {
    setNavShow(!navShow);
  };
  const handleHideNav = () => {
    setNavShow(false);
  };
  return (
    <>
      <div className='block md:hidden'>
        {navShow ? (
          <FaBarsStaggered
            onClick={handleNavShow}
            className='text-5xl text-secoundary'
          />
        ) : (
          <FaBars
            onClick={handleNavShow}
            className='text-5xl text-secoundary'
          />
        )}
      </div>
      <div
        className={`flex flex-col md:flex-row absolute top-24 md:top-0 right-0 md:static gap-5 md:gap-10 text-right md:text-left  p-8 md:p-0 shadow-lg md:shadow-none transition scale-y-0 md:scale-y-100 origin-top backdrop-blur-lg md:backdrop-blur-0 w-full md:w-fit z-50 ${
          navShow && 'scale-y-100'
        }`}
      >
        {menu?.map((item) => (
          <NavLink
            to={item.path}
            state={item.name}
            key={item.id}
            onClick={handleHideNav}
          >
            {({ isActive }) => (
              <span
                className={`text-xl text-black ${
                  isActive && 'text-primary underline underline-offset-4'
                }`}
              >
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navmenu;
