import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
      },
    ],
  },
]);
