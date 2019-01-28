function Seguro(marca, anio, tipo){
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo
}

function Interfaz(){

}

/** select with 20 last years */
const selectAnios = document.getElementById('anio');

const max = new Date().getFullYear(),
      min = max - 20;

      console.log(max)

for (let i = max; i > min; i--){
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}

const formularioSeguro = document.getElementById('cotizar-seguro');

formularioSeguro.addEventListener('submit', function(e){
  e.preventDefault();
  
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;
  
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;
  
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const interfaz = new Interfaz;

  if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
    console.log('obligatorio rellenar todos los datos')
  }else{
    console.log('datos correctos');
  }
})

