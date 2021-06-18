// Importamos el archivo donde tenemos el core del player
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './Plugins/AutoPlay.js'
import AutoPause from './Plugins/AutoPause.js'


// declaramos los objetos con los que trabajaremos
const video = document.querySelector('video');
const btnPlay = document.querySelector('#btn-play');
const btnMute = document.querySelector('#btn-mute');

// declaramos el player y le enviamos el objeto que vamos a configurar
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
});

// le colocamos el evento al boton para que ejecute el método recien creado
btnPlay.onclick = () => player.togglePlay();

// le colocamos el evento de mute o unmuted
btnMute.onclick = () => player.toggleMute();

// Si el navegador soporta serviceWorkers
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(
        error => { console.log(error.message); }
    )
}