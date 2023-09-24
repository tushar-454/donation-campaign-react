import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Layout from '../Layout/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: () => fetch('menu.json'),
    children: [
      {
        path: '/donation',
        element: <Header />,
      },
    ],
  },
]);

export default routes;
