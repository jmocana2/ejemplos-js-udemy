const generarNombre = document.getElementById('generar-nombre');

//genera un listado de 5 nombres según los filtros aplicados a la API
function obtenerNombres(origen, genero, nNombres){
  const resultado = document.getElementById('resultado');
  let url = ''
  url += 'https://uinames.com/api/?'
  if(origen){
    url += `region=${origen}&`;
  }
  if(genero){
    url += `gender=${genero}&`;
  }
  if(nNombres > 0){
    url += `amount=${nNombres}&`;
  }
  
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true)
  xhr.onload = function(){
    if(this.status === 200){
      const nombres = JSON.parse(this.responseText);
      let ui = `<h2>Nombres generados</h2>
      <ul class='lista'>`;

      nombres.map((nombre) =>{
        ui += `<li>${nombre.name}</li>`
      })
      ui += `</ul>`;
      resultado.innerHTML = ui;

    }
  }
  xhr.send();
  

}

/** Eventos */
generarNombre.addEventListener('submit', function(e){
  e.preventDefault();

  //Capturamos valores del formulario
  const origenSelect = document.getElementById('origen');
  const origen = origenSelect.options[origenSelect.selectedIndex].value
  const generoSelect = document.getElementById('genero');
  const genero = generoSelect.options[generoSelect.selectedIndex].value
  const nNombres = document.getElementById('numero').value

  obtenerNombres(origen, genero, nNombres);
})