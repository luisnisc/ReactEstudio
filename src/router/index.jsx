import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ConceptosClave from '../ConceptosClave';
import TecnicasAvanzadas from '../TecnicasAvanzadas';
import Layout from '../Layout';
import RecienAñadido from '../RecienAñadido';

const routeToIndex = {
  '/': 0,
  '/conceptosClave': 1,
  '/tecnicasAvanzadas': 2,
  '/recienAñadido': 3,
  // Agrega más rutas según sea necesario
};

const RouteTransition = ({ children }) => {
  const location = useLocation();
  const [prevPath, setPrevPath] = React.useState(location.pathname);

  // Calcula la dirección de la animación basándose en la ruta
  const direction = routeToIndex[location.pathname] > routeToIndex[prevPath] ? 1 : -1;

  React.useEffect(() => {
    setPrevPath(location.pathname);
  }, [location]);

  const variants = {
    initial: { x: direction > 0 ? 100 : -100, opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { x: direction > 0 ? -100 : 100, opacity: 0 }
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <RouteTransition>
            <App />
          </RouteTransition>
        ),
      },
      {
        path: '/conceptosClave/:loc',
        element: (
          <RouteTransition>
            <ConceptosClave />
          </RouteTransition>
        ),
      },
      {
        path: '/tecnicasAvanzadas/:loc',
        element: (
          <RouteTransition>
            <TecnicasAvanzadas />
          </RouteTransition>
        ),
      },
      {
        path: '/recienAñadido/:loc',
        element: (
          <RouteTransition>
            <RecienAñadido />
          </RouteTransition>
        ),
      },
    ],
  },
]);

export default router;