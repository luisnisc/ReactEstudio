import React, { useContext } from "react";

const MyContext = React.createContext();

// Proveedor de Contexto en el componente de nivel superior
function MyProvider() {
  return (
    <MyContext.Provider value="Hola desde el contexto">
      <MyChild />
    </MyContext.Provider>
  );
}

// Consumir el Contexto en cualquier componente hijo
function MyChild() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}

export default MyProvider;
