import React, { useState } from 'react';

function ChildComponent(props) {
  return <div>Hola, {props.name}</div>;
}

function ParentComponent() {
  const [name, setName] = useState('Juan');

  return <ChildComponent name={name} />;
}

export default ParentComponent;