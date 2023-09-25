import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import noroute from '../../assets/404.gif';
const NoRoute = () => {
  useEffect(() => {
    document.title = '404 Error. Route not found!';
  }, []);
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={noroute} className='' />
      <Link to={'/'} state={'Home'}>
        <button className='bg-[#00000050] text-secoundary px-4 py-2 rounded-lg transition active:bg-[#00000030]'>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NoRoute;
