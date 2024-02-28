import React from "react";
import Suspense from "./recienAñadido/Suspense";
import ModalImage from "react-modal-image";
import SuspenseImage from "../public/Suspense.png";
import OtherComponentSuspenseImage from "../public/OtherComponentSuspense.png";
import "./App.css";
export default function RecienAñadido() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gray-100 p-8 mb-20">
      <div className="text-3xl mb-4">Recién Añadido</div>
      <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-3xl mb-2">Suspense</div>
        <p>Suspense te permite esperar a que se resuelva una promesa antes de renderizar un componente. Aquí tienes un ejemplo utilizando React.lazy para cargar un componente de manera diferida:</p>
        <code>
          <Suspense />
        </code>
        <ModalImage
          small={SuspenseImage}
          large={SuspenseImage}
          className="w-96 mt-4"
        />
        <ModalImage
          small={OtherComponentSuspenseImage}
          large={OtherComponentSuspenseImage}
          className="w-96 mt-4"
        />
      </div>
      </div>
  );
}
