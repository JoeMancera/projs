import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        if(!player.media.muted){
            // El valor del setter se pasa como valor co como parámetro
            player.media.muted = true;
        }
        player.play();
    }
}

export default AutoPlay