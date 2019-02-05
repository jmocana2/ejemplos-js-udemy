const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  usuarios: []
}

const createReducer = (state = initialState, action) => {
  if(action.type === 'AGREGAR_USUARIO'){
    return {
      ...state,
      usuarios: action.nombre
    }
  }

  return state;
}

const store = createStore(createReducer);

store.subscribe(() => {
  console.log("Algo cambio...", store.getState());
})

store.dispatch({type: 'AGREGAR_USUARIO', nombre: 'marcos'});

console.log(store.getState());