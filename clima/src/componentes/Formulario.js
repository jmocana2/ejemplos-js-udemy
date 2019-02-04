import React, { Component } from 'react';

class Formulario extends Component {

  //crear refs
  ciudadRef = React.createRef();
  paisRef = React.createRef();

  crearClima = (e) => {
    e.preventDefault();

    const info = {
      ciudad: this.ciudadRef.current.value,
      pais: this.paisRef.current.value
    }

    this.props.consultarDatos(info)
  }

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.crearClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input type="text" id="ciudad" ref={this.ciudadRef}/>
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef}>
                  <option value="" defaultValue>Elige un país</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="pais">País</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-2 buscador">
                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..."/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;