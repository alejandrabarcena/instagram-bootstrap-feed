const galleryGrid = document.getElementById('gallery-grid');

const photos = [
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug1.png",
    caption: "🐶🌈 Patsy soñando con nubes en forma de croqueta. #PugDreams"
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug2.png",
    caption: "🏃‍♀️🌳 Patsy saliendo a correr al parque con estilo techie y cute."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug3.png",
    caption: "🍽️🥣 Desayunando croquetas Nupec con mucho glamour matutino."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug4.png",
    caption: "🎾📚 Jugando con su pelota mientras mamá codea en el bootcamp."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug5.png",
    caption: "🏖️🐾 Nadando en un paseo espiritual por Tepoztlán. Zen total."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug6.png",
    caption: "🍌✨ Patsy disfrutando un plátano como snack saludable post yoga."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug7.png",
    caption: "💻🐾 Patsy soñando con ser una dev como mamá. #CodeLikeAPug"
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug8.png",
    caption: "🏖️🌺 Disfrutando la playa, explorando la arena con patitas curiosas."
  },
  {
    url: "https://raw.githubusercontent.com/alejandrabarcena/instagram-bootstrap-feed/main/pug9.png",
    caption: "🌞🌊 Otro día de sol, sal y pelitos mojados. Vida pugplayera."
  }
];

function renderGallery() {
  galleryGrid.innerHTML = '';
  photos.forEach(photo => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${photo.url}" class="card-img-top" alt="pug post">
        <div class="card-body">
          <p>${photo.caption}</p>
        </div>
      </div>`;
    galleryGrid.appendChild(col);
  });
}

function addPost() {
  const image = document.getElementById('imageURL').value.trim();
  const caption = document.getElementById('captionText').value.trim();
  if (image && caption) {
    photos.unshift({ url: image, caption });
    renderGallery();
    document.getElementById('imageURL').value = '';
    document.getElementById('captionText').value = '';
    const modal = bootstrap.Modal.getInstance(document.getElementById('newPostModal'));
    modal.hide();
  }
}

document.addEventListener('DOMContentLoaded', renderGallery);
