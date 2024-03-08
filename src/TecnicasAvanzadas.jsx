import React from "react";
import ParentComponent from "./tecnicasAvanzadas/FlujoUnidireccionalDatos";
import MyButton from "./tecnicasAvanzadas/ManejoEventos";
import Hook from "./tecnicasAvanzadas/Hook";
import ModalImage from "react-modal-image";
import MyChild from "./tecnicasAvanzadas/ContextApi";
import FlujoDeDatosImage from "../public/FlujoDeDatos.png";
import ManejoEventosImage from "../public/ManejoEventos.png";
import HooksImage from "../public/Hooks.png";
import ContextAPIImage from "../public/ContextAPI.png";
import { motion } from "framer-motion";
import "./App.css";

export default function TecnicasAvanzadas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen mt-16 space-y-8 bg-gray-100 p-8 mb-20">
        <div className="text-3xl mb-4">Tecnicas Avanzadas</div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
          <div className="text-3xl">Flujo unidireccional de datos</div>
          <p>
            En React, los datos fluyen hacia abajo desde los componentes padres
            a los componentes hijos a través de las props. Aquí tienes un
            ejemplo:
          </p>
          <ModalImage
            small={FlujoDeDatosImage}
            large={FlujoDeDatosImage}
            className="w-96 mt-4"
          />
          <ParentComponent />
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
          <div className="text-3xl">Manejo de eventos</div>
          <p>
            En React, puedes manejar eventos como clics o cambios de entrada
            utilizando funciones de manejo de eventos. Aquí tienes un ejemplo:
          </p>
          <ModalImage
            small={ManejoEventosImage}
            large={ManejoEventosImage}
            className="w-96 mt-4"
          />
          <MyButton />
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
          <div className="text-3xl">Hooks</div>
          <p>
            Los Hooks son una característica de React que te permite usar el
            estado y otras características de React sin escribir una clase. Aquí
            tienes un ejemplo utilizando el Hook useState:
          </p>
          <ModalImage
            small={HooksImage}
            large={HooksImage}
            className="w-96 mt-4"
          />
          <Hook />
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
          <div className="text-3xl">Context API</div>
          <p>
            La API de Contexto te permite compartir valores entre todos los
            componentes de tu aplicación, sin tener que pasar props manualmente
            a cada nivel. Aquí tienes un ejemplo:
          </p>
          <ModalImage
            small={ContextAPIImage}
            large={ContextAPIImage}
            className="w-96 mt-4"
          />
          <MyChild />
        </div>
      </div>
    </motion.div>
  );
}
