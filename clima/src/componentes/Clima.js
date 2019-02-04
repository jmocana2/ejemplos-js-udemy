import React, { Component } from 'react';

class Clima extends Component {
  
 

  render() {

    const {name, main, weather} = this.props.resultado
    const kelvin = 273.15;
    const urlIcono = `http://api.openweathermap.org/img/w/${weather[0].icon}.png`

    
    return (
      <div className="row">
        <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
          <div className="card-panel light-blue align-center">
            <span className="white-text">
              <h2>Resultado Clima de </h2>
              <p className="temperatura">
                Actual: {(main.temp - kelvin).toFixed(2)}&deg;C
                <img src={urlIcono} alt="clima" />
              </p>
            </span>
          </div>
        </div>
        <h1>{name}</h1>  
      </div>
    );
  }
}

export default Clima;