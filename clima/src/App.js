import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {

  state = {
    error: false,
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarAPI()
    }
  }

  consultarAPI = () =>{
    const {ciudad, pais} = this.state.consulta;

    const APPID = '059a8466a87dbd09329bdc7a86c24a38';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APPID}`

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
      .catch(() => this.setState({
        error: true
      }))
  }
  

  consultarDatos = (respuesta) => {
     if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        error: false,
        consulta: {
          ciudad: respuesta.ciudad,
          pais: respuesta.pais
        }
      })
    }
  }

  render() {
    const {error, resultado} = this.state
    return (
      <div className="App">
        <Header />
        <Formulario consultarDatos={this.consultarDatos} />
        {error ?
          (<Error msj="Todos los campos son obligatorios" />)
        :        
          Object.keys(resultado).length && (<Clima resultado={resultado} />)
        }        
      </div>
    );
  }
}

export default App;
