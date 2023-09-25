import { createBrowserRouter } from 'react-router-dom';
import DonationCardDetails from '../Components/DonationCardDetails/DonationCardDetails';
import Donations from '../Components/Donations/Donations';
import Home from '../Components/Home/Home';
import Statistics from '../Components/Statistics/Statistics';
import Layout from '../Layout/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: () => fetch('/menu.json'),
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/Donations.json'),
      },
      {
        path: '/donation',
        element: <Donations />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/:category/:id',
        element: <DonationCardDetails />,
        loader: () => fetch('/Donations.json'),
      },
    ],
  },
]);

export default routes;
