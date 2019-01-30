class Seguro{
  constructor(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo
  }

  cotizarSeguro(){
  
    let cantidad;
    const base = 2000
  
    switch (this.marca){
      case '1':{
        cantidad = base * 1.15;
        break;
      }
      
      case '2':{
        cantidad = base * 1.05;
        break
      }
  
      case '3':{
        cantidad = base * 1.35;
        break
      }    
    }
  
    const diferenciaAnyo = new Date().getFullYear() - this.anio;
    
    cantidad -= ((diferenciaAnyo * 3) * cantidad) / 100;
  
    if(this.tipo === "basico"){
      cantidad *= 1.30;
    }else{
      cantidad *= 1.50;
    }
    
    return cantidad;
  }

}

class Interfaz{

  mostrarError(error, tipo){
    const div = document.createElement('div');
    if(tipo === "error"){
      div.classList = "error";
    }else{
      div.classList = "correcto";    
  
    }
    div.innerHTML = error;
    formulario.insertBefore(div, document.querySelector(".form-group"));  
  }

  mostrarResumen(seguro, cantidad){

    const resultado = document.getElementById('resultado');
    const cargando = document.querySelector('#cargando img');
    let marca;
  
    switch(seguro.marca){
      case '1': 
      marca = 'Americano';
      break;
      case '2': 
      marca = 'Asiático';
      break;
      case '3': 
      marca = 'Europeo';
      break;
    }
  
    const div = document.createElement('div');
    const resumen = `
      <p>Marca: ${marca}</p>
      <p>Año: ${seguro.anio}</p>
      <p>Tipo: ${seguro.tipo}</p>
      <p>Total: ${cantidad} &euro;</p>
    `
    div.innerHTML = resumen;
    cargando.style.display = 'block';
    setTimeout(function(){
      resultado.appendChild(div);
      cargando.style.display = 'none';
    }, 3000)
  }
}
/** select with 20 last years */
const selectAnios = document.getElementById('anio');

const max = new Date().getFullYear(),
      min = max - 20;

for (let i = max; i > min; i--){
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;
  
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;
  
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const interfaz = new Interfaz;
  const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo )

  if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
    interfaz.mostrarError('Es obligatorio rellenar todos los campos', 'error')
  }else{
    const resultado = document.querySelector('#resultado div');
    if(resultado !== null){
      resultado.remove();
    }

    const cantidad = seguro.cotizarSeguro()
    interfaz.mostrarResumen(seguro, cantidad)
  }
})

