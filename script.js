// Mostrar alerta cuando se hace clic en una imagen del grid
document.querySelectorAll('.patsy-grid img').forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(`🐾 Esta es la foto #${index + 1} de Patsy. ¡Qué ternura! 💖`);
  });
});

// Agregar un efecto de "like" al hacer doble clic en la imagen vertical
const postImage = document.querySelector('.post-image');
if (postImage) {
  postImage.addEventListener('dblclick', () => {
    alert('❤️ ¡Le diste like al post de Patsy!');
  });
}
