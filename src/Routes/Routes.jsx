import { createBrowserRouter } from 'react-router-dom';
import Donations from '../Components/Donations/Donations';
import Home from '../Components/Home/Home';
import Statistics from '../Components/Statistics/Statistics';
import Layout from '../Layout/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: () => fetch('menu.json'),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/donation',
        element: <Donations />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
    ],
  },
]);

export default routes;
