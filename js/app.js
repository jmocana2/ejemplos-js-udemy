/** select with 20 last years */
const selectAnios = document.getElementById('anio');

const max = new Date().getFullYear(),
      min = max - 20;

for (let i = max; i > min; i--){
  let option = createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}

