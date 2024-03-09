import { useEffect, useState } from 'react';

function OtherComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula una carga de datos con una promesa que se resuelve después de 2 segundos
    new Promise(resolve => setTimeout(() => resolve('Datos cargados'), 2000))
      .then(data => setData(data));
  }, []);

  if (data === null) {
    // Si los datos aún no se han cargado, no devuelve nada
    return <div>Cargando...</div>;
  }

  return <div>{data}</div>;
}

export default OtherComponent;