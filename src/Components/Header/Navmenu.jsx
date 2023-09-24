import { Link, useLoaderData } from 'react-router-dom';

const Navmenu = () => {
  const menu = useLoaderData();
  return (
    <div className='flex gap-10'>
      {menu?.map((item) => (
        <Link to={item.path} state={item.name} key={item.id}>
          <span className='text-xl text-black'>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navmenu;
