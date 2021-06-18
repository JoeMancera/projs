class AutoPause {
    // como el threshold lo vamos a utilizar en varias partes creamos un contructor para tenerlo a mano
    constructor() {
        this.threshold = 0.25;

        // this permanente, para que no combie la instancia del objeto
        this.handlerIntersection = this.handlerIntersection.bind(this);

        // realizamos lo mismo que con el intersection, para que sea global
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player) {

        // Como necesitamos el player debemos de guardar la instacia 
        this.player = player


        // Creamos el observador
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold // Umbral o porcetaje del elemento observado y la intersección del contenedor
        })

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange)
    }

    // le pasamos al handler intersector los objetos que estamos observando, en este caso el media
    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold
        
        if(isVisible){
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    handlerVisibilityChange(){
        const isVisible = document.visibilityState === "visible";

        if(isVisible){
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;