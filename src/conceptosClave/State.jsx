import React, {useState} from "react";
//Componente que usa useState para crear un contador simple
export default function State() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setContador(contador + 1)}>Haz click en mí</button>
    </div>
  );
}
