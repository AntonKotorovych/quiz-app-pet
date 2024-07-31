import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
