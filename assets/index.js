// Importamos el archivo donde tenemos el core del player
import MediaPlayer from './MediaPlayer.js'

// declaramos los objetos con los que trabajaremos
const video = document.querySelector('video');
const button = document.querySelector('button');

// declaramos el player y le enviamos el objeto que vamos a configurar
const player = new MediaPlayer({ el: video });

// le colocamos el evento al boton para que ejecute el método recien creado
button.onclick = () => player.play();