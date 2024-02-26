import React from "react";
export default class CicloDeVida extends React.Component {
    constructor(props) {
      super(props);
      this.state = { contador: 0 };
    }
  
    componentDidMount() {
      console.log('El componente se ha montado');
    }
  
    componentDidUpdate() {
      console.log('El componente se ha actualizado');
    }
  
    componentWillUnmount() {
      console.log('El componente se va a desmontar');
    }
  
    render() {
      return (
        <div>
          <p>Has hecho click {this.state.contador} veces</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => this.setState({ contador: this.state.contador + 1 })}>
            Haz click en mí
          </button>
        </div>
      );
    }
  }