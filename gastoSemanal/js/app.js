const cantidadPresupuesto = prompt("Introduzca un presupuesto");
const formulario = document.getElementById('agregar-gasto');
let miPresupuesto;

//Manejo de datos
class Presupuesto{
  constructor(presupuesto){
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }

  //Restante
  presupuestoRestante(cantidad = 0){
    return this.restante -= Number(cantidad);
  }
}

// Manipulación de la UI
class Interfaz{
  //Nuevo presupuesto
  insertarPresupuesto(miPresupuesto){
    const txtPresupuesto = document.getElementById('total');
    const txtRestante = document.getElementById('restante');

    txtPresupuesto.innerHTML = miPresupuesto.presupuesto;
    txtRestante.innerHTML = miPresupuesto.restante;
  }

  //Gestión de alertas
  insertarAlerta(msj, tipo){
    const wrapperAlert = document.createElement('div');
    wrapperAlert.classList = 'txt-center alert';

    console.log(msj)
    
    if(tipo === 'error'){
      wrapperAlert.classList = 'alert-danger';
    }else{
      wrapperAlert.classList = 'alert-success';
    }

    wrapperAlert.innerHTML = `<p>${msj}</p>`;
    document.querySelector('.primario').insertBefore(wrapperAlert, formulario);

    setTimeout(function(){
      wrapperAlert.remove();
    }, 3000)
  }

  //Crear el listado de gastos
  crearListadoGastos(nombre, gasto){
    const list = document.querySelector('#gastos .list-group');
    const item = document.createElement('li');
    item.classList = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `${nombre} <span class='badge badge-primary badge-pill'>${gasto}</span>`
    list.appendChild(item);
  }

  //Actualizar restante
  actualizarRestante(){
    const restante = document.getElementById('restante');    
    const wrapperRestante = document.querySelector('.restante'); 
    restante.innerHTML = miPresupuesto.restante;

    // Si el restante está por debajo del 25% del presupuesto peligro!
    if(miPresupuesto.presupuesto / 4 > miPresupuesto.restante){
      wrapperRestante.classList.remove('alert-primary', 'alert-warning');
      wrapperRestante.classList.add('alert-danger');
    }else if(miPresupuesto.presupuesto / 2 > miPresupuesto.restante){
      wrapperRestante.classList.remove('alert-primary');
      wrapperRestante.classList.add('alert-warning');
    }

  }
}

// Eventos
document.addEventListener('DOMContentLoaded', function(){
  if(cantidadPresupuesto === null || cantidadPresupuesto === ''){
    window.location.reload();
  }else{
    miPresupuesto = new Presupuesto(cantidadPresupuesto);
    const ui = new Interfaz()
    ui.insertarPresupuesto(miPresupuesto)
  }
})

formulario.addEventListener('submit', function(e){
  e.preventDefault();

  const gasto = document.getElementById('gasto').value;
  const cantidad = document.getElementById('cantidad').value;

  const ui = new Interfaz;

  if(gasto === '' || cantidad === ''){
    ui.insertarAlerta('Todos los campos son obligatorios', 'error')
  }else{
    ui.insertarAlerta('Los datos son correctoss', 'success');
    ui.crearListadoGastos(gasto, cantidad);
    miPresupuesto.presupuestoRestante(cantidad);
    ui.actualizarRestante();
  }


})