// pega os elementos
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list  = document.getElementById('todo-list');

// adicionar tarefa (submit do form ou clique no botão)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texto = input.value.trim();
  if (!texto) return; // evita itens vazios

  // cria o <li> dinamicamente
  const li = document.createElement('li');
  li.textContent = texto;

  // adiciona na <ul>
  list.appendChild(li);

  // limpa o input e volta o foco
  input.value = '';
  input.focus();
});

// REMOVER tarefa com DELEGAÇÃO DE EVENTOS:
// em vez de colocar um "click" em cada <li> criado,
// colocamos UM listener na <ul> e checamos o alvo.
list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;      // clicou fora de um <li>
  li.remove();          // remove o item clicado
});
