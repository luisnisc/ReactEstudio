import React from 'react'
import Suspense from './recienAñadido/Suspense';
import ModalImage from 'react-modal-image';
export default function RecienAñadido() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 space-y-8 bg-gray-100 p-8">
    <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center w-160">
        <div className="text-3xl">Suspense</div>
        <p>
        Suspense te permite esperar a que se resuelva una promesa antes de renderizar un componente. Este es un ejemplo utilizando React.lazy para cargar un componente de manera diferida:
        </p>
        <code>
          <Suspense />
        </code>
        <ModalImage
          small="../public/Suspense.png"
          large="../public/Suspense.png"
          className="w-96 mt-4"
        />
        <ModalImage
            small="../public/OtherComponentSuspense.png"
            large="../public/OtherComponentSuspense.png"
            className="w-96 mt-4"
        />
      </div>
    </div>
  )
}
