import { FaBars } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
const Navmenu = () => {
  const menu = useLoaderData();
  return (
    <>
      <div className='block md:hidden'>
        <FaBars className='text-5xl text-secoundary' />
      </div>
      <div className='flex flex-col md:flex-row absolute top-24 md:top-0 right-0 md:static gap-5 md:gap-10 text-right md:text-left  p-8 md:p-0 shadow-lg md:shadow-none'>
        {menu?.map((item) => (
          <Link to={item.path} state={item.name} key={item.id}>
            <span className='text-xl text-black'>{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navmenu;
