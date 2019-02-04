import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  state = {
    error: false
  }

  consultarDatos = (respuesta) => {
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        error: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Formulario consultarDatos={this.consultarDatos} />
      </div>
    );
  }
}

export default App;
