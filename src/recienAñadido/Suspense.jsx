import React from 'react'

const OtherComponent = React.lazy(() => import('./OtherComponent'));

export default function Suspense() {
  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}
