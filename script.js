// Obtener la etiqueta de encabezado
const header = document.querySelector('header');

// Obtener la tabla del correo electrónico
const emailTable = document.querySelector('.Antonio3');

// Agregar un evento de clic a la tabla del correo electrónico
emailTable.addEventListener('click', () => {
  // Cambiar el color de fondo de la página
  document.body.style.backgroundColor = getRandomColor();
});

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
