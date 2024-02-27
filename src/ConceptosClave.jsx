import React from "react";
import Saludo from "./conceptosClave/ComponenteSimple";
import State from "./conceptosClave/State";
import CicloDeVida from "./conceptosClave/CicloDeVida";
import Props from "./conceptosClave/Props";
import ModalImage from "react-modal-image";
import "./App.css";

export default function ConceptosClave() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 space-y-8 bg-gray-100 p-8">
      <div className="text-3xl mb-4">Conceptos Clave</div>
      <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-3xl mb-2">Componente Simple</div>
        <p>Este es un componente simple en el cual hay un saludo:</p>
        <code>
          <Saludo />
        </code>
        <ModalImage
          small="../public/ComponenteBasico.png"
          large="../public/ComponenteBasico.png"
          className="w-96 mt-4"
        />
      </div>
      <br />
      <hr />
      <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-3xl">Estado</div>

        <p>
          En este ejemplo podemos ver el uso de useState, el cual nos permite
          crear un contador simple
        </p>
        <ModalImage
          small="../public/State.png"
          large="../public/State.png"
          className="w-96 mt-4"
        />
        <code>
          <State />
        </code>
      </div>

      <br />
      <hr />
      <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-3xl">Ciclo de vida</div>
        <p>
          En este ejemplo podemos el ciclo de vida de un componente (ver la
          terminal del navegador), como podemos ver, <br />
          cada vez que le damos click al boton, el componente se actualiza para
          mostrar el número de pulsaciones
        </p>
        <code>
          <CicloDeVida />
        </code>
        <ModalImage
          small="../public/CicloDeVida.png"
          large="../public/CicloDeVida.png"
          className="w-96 mt-4"
        />
      </div>
      <br />
      <hr />
      <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-2xl mb-2">Saludo con Props</div>
        <p>
          En este caso vemos un componente simple, el cual hace un saludo, pero
          este es algo distinto al primero,
          ya que en este se usa props para introducir el nombre.
        </p>
        <p>
          Para este ejemplo, el nombre introducido es Pedro, pero este puede ser
          cambiado por cualquier otro nombre.
        </p>
        <p>
          <strong>Usamos el componente poniendo el nombre que queramos para el saludo:</strong>
        </p>
        <ModalImage
          small="../public/usoDeProps.png"
          large="../public/usoDeProps.png"
          className="w-96 mt-4"
        />

        <ModalImage
          small="../public/Props.png"
          large="../public/Props.png"
          className="w-96 mt-4"
        />
        <Props nombre="Pedro" />
      </div>
    </div>
  );
}
