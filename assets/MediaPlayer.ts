// creamos un prototipo de MediaPlayer

// Refactorizamos para que typescript nos resuelva esto como una clase
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayer();
        this.initPlugins();
    }

    // Aquí ninicializamos el video
    initPlayer(){
        this.container = document.createElement('div');

        // para que el ad se vea correctamente se debe de aplicar estilos
        this.container.style.position = 'relative';
        // tomamos el media y movemos este al contenedor
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        // vamos a agregarle setter y getters
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,

            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    // Generamos los métodos de el prototipo que creamos
    play() {
        this.media.play();
    }
    // Generamos los métodos de el prototipo que creamos
    pause() {
        this.media.pause();
    }
    // Generamos los métodos de el prototipo que creamos
    mute() {
        this.media.muted = true;
    }
    // Generamos los métodos de el prototipo que creamos
    unmute() {
        this.media.muted = false;
    }
    // Generamos los métodos de el prototipo que creamos
    togglePlay() {
        if (!this.media.paused) {
            this.pause();
        } else {
            this.play();
        }
    }
    // Generamos metodo para que se mute o se demutee el video
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}

// Exportamos el mòdulo como default para no colocar del otro lado el mismo nombre y entre { }
export default MediaPlayer