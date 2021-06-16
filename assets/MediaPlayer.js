// creamos un prototipo de MediaPlayer
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function () {
    // vamos a agregarle setter y getters
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,

        get muted(){
            return this.media.muted;
        },

        set muted(value){
            this.media.muted = value;
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.play = function(){
    this.media.play();
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

// Generamos los métodos de el prototipo que creamos
MediaPlayer.prototype.togglePlay = function(){
    if(!this.media.paused){
        this.pause();
    } else {
        this.play();
    }
}

// Generamos metodo para que se mute o se demutee el video
MediaPlayer.prototype.toggleMute = function(){
    this.media.muted = !this.media.muted;
}

// Exportamos el mòdulo como default para no colocar del otro lado el mismo nombre y entre { }
export default MediaPlayer