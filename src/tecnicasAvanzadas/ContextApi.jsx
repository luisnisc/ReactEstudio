import React, { useContext } from "react";


// Crear un Contexto
const MyContext = React.createContext();

// Proveedor de Contexto en el componente de nivel superior
function MyProvider() {
  return (
    <MyContext.Provider value="Hola desde el contexto">
      <MyComponent />
    </MyContext.Provider>
  );
}

// Consumir el Contexto en cualquier componente hijo
export default function MyChild() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}