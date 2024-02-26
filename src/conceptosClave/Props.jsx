import React from 'react'
//Un componente que recibe props.
export default function SaludoPersonalizado(props) {
  return (
    <h1>Hola, {props.nombre}!</h1>
  )
}
