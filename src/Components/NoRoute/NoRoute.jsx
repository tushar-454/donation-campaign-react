import { Link } from 'react-router-dom';
import noroute from '../../assets/404.gif';
const NoRoute = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={noroute} className='' />
      <Link to={'/'}>
        <button className='bg-[#00000050] text-secoundary px-4 py-2 rounded-lg transition active:bg-[#00000030]'>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NoRoute;
