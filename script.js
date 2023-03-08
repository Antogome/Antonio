// Obtener la etiqueta de encabezado
const header = document.querySelector('header');

// Agregar un evento de clic al encabezado
header.addEventListener('click', () => {
  // Cambiar el color de fondo del encabezado
  header.style.backgroundColor = getRandomColor();
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
