import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Layout = () => {
  const { state } = useLocation();
  useEffect(() => {
    document.title = `Donation campaign | ${state}`;
  }, [state]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
