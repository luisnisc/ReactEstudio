import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const routeToIndex = {
    '/': 0,
    '/conceptosClave/conceptosClave': 1,
    '/tecnicasAvanzadas/tecnicasAvanzadas': 2,
    '/recienAñadido/recienAñadido': 3,
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