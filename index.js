// Leer mensaje personalizado desde query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Inicio del tutorial

// Selección de elementos
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const heartElement = document.querySelector('.heart');
const backgroundMusic = document.querySelector('#backgroundMusic');

btnCloseElement.disabled = true;

// Poema de amor
const poema = `
  Querida Luna,
  En cada noche estrellada, tu luz ilumina mi vida,
  Eres el sueño que nunca quiero despertar,
  Tu sonrisa es mi sol en días nublados,
  Y tu amor, mi guía en cada paso que doy.
  Te amo más de lo que las palabras pueden expresar,
  Eres mi todo, mi Luna brillante.
`;

// Evento de apertura
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  // Reproducir música
  backgroundMusic.play();

  // Actualizar el mensaje con el poema
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = poema;

  // Añadir clase para abrir la cubierta
  if (!coverElement.classList.contains('open-cover')) {
    coverElement.classList.add('open-cover');
  }

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    // Abrir papel
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del corazón
    heartElement.style.display = 'block';
    heartElement.classList.add('animating-heart');
  }, 500);
});

// Evento de cierre
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  // Detener música
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0; // Reiniciar la música al inicio

  // Cerrar papel
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar corazón
    heartElement.style.display = 'none';
    heartElement.classList.remove('animating-heart');
  }, 500);
});
