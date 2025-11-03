const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Tambah tugas baru
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Klik untuk tandai selesai
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Klik kanan untuk hapus
  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
