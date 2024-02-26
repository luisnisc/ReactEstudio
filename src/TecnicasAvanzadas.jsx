import React from 'react'
import ParentComponent from './tecnicasAvanzadas/FlujoUnidireccionalDatos'
import MyButton from './tecnicasAvanzadas/ManejoEventos'
import Hook from './tecnicasAvanzadas/Hook';
import ModalImage from "react-modal-image";
import MyChild from './tecnicasAvanzadas/ContextApi'
import './App.css';
export default function TecnicasAvanzadas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 space-y-8 bg-gray-100 p-8">
    <div className="text-3xl mb-4">Tecnicas Avanzadas</div>
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
    <div className="text-3xl">Fluje unidireccional de datos</div>
    <p>
    En React, los datos fluyen hacia abajo desde los componentes padres a los componentes hijos a través de las props. Aquí tienes un ejemplo:
    </p>
    <ModalImage
          small="../public/FlujoDeDatos.png"
          large="../public/FlujoDeDatos.png"

          className="w-96 mt-4"
        />
    <ParentComponent />
    </div>
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
    <div className="text-3xl">Manejo de eventos</div>
    <p>
    En React, puedes manejar eventos como clics o cambios de entrada utilizando funciones de manejo de eventos. Aquí tienes un ejemplo:
    </p>
    <ModalImage
          small="../public/ManejoEventos.png"
          large="../public/ManejoEventos.png"

          className="w-96 mt-4"
        />
    <MyButton />
    </div>
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
    <div className="text-3xl">Hooks</div>
    <p>
    Los Hooks son una característica de React que te permite usar el estado y otras características de React sin escribir una clase. Aquí tienes un ejemplo utilizando el Hook useState:
    </p>
    <ModalImage
          small="../public/Hooks.png"
          large="../public/Hooks.png"

          className="w-96 mt-4"
        />
    <Hook />
    </div>
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
    <div className="text-3xl">Context API</div>
    <p>
    La API de Contexto te permite compartir valores entre todos los componentes de tu aplicación, sin tener que pasar props manualmente a cada nivel. Aquí tienes un ejemplo:
    </p>
    <ModalImage
          small="../public/ContextAPI.png"
          large="../public/ContextAPI.png"

          className="w-96 mt-4"
        />
    <MyChild />
    </div>
    </div>
  )
}
