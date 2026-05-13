import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/landingpage/Landing';
import Prices from '../pages/prices/Prices';
import Contact from '../pages/contact/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/prices', element: <Prices /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
