 import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/landingpage/Landing';
import Prices from '../pages/prices/Prices';
import Contact from '../pages/contact/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Este es el diseño principal (Header + Outlet + Footer)
    children: [
      {
        index: true, // Esto reemplaza al path: '/' para la página de inicio
        element: <Landing />,
      },
      {
        path: 'prices', // Eliminamos la barra '/' inicial porque ya está en el padre
        element: <Prices />,
      },
      {
        path: 'contact', 
        element: <Contact />,
      },
    ],
  },
]);