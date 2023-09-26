import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Layout = () => {
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    document.title = `Donation campaign ${state !== null ? `| ${state}` : ''}`;
  }, [state]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
