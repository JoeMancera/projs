function AutoPlay() {
    AutoPlay.prototype.run = function (player) {
        if(!player.muted){
            // El valor del setter se pasa como valor co como parámetro
            player.muted = true;
        }
        player.play();
    }
}

export default AutoPlay