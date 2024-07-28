import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Layout from 'components/Layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
  },
]);
