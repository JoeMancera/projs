// creamos un prototipo de MediaPlayer
function MediaPlayer(config){
    this.media = config.el;
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.play = function(){
    if(!this.media.paused){
        this.media.pause()
    } else {
        this.media.play();
    }
}

// Exportamos el mòdulo como default para no colocar del otro lado el mismo nombre y entre { }
export default MediaPlayer