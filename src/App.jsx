import React from "react";
import {motion} from "framer-motion";
import './App.css';
function App() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5}}
      >
    <div className="mt-36  text-center">
      <div className="text-4xl">Hola, bienvenido a mi página de React!</div>
      <div className="text-xl mt-4">En esta página podras aprender y ver tanto los conceptos clave de React, como unas técnicas un poco mas avanzadas</div>
    </div>
    </motion.div>
    </>
  );
}

export default App;
