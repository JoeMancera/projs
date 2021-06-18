/*
para usuar las herramientas que nos permiten utilizar los Serviceworkers pordemos hacer uso de las
herramientas del navegador, en chrome es en el tab de application -> serviceWorkers

Estos SW son como aplicaciones locales que se intalan en el navegador del usuario.

Cuando se hacen cambios estos se deben de "reinstalar" para eso, en desarrollo habilitamos el check
update no reload

Esto tambien nos ayuda a tener web apps offline, que siempre el usuario tenga nuestra ultima versión
*/
const VERSION = "v1"
// self es especifico, es similar al this pero pasa SW
self.addEventListener('install', event => {
    // pre cache
    event.waitUntil(precache())
})

// creamos el evento para escuchar las peticiones get
self.addEventListener('fetch', event => {
    const request = event.request;

    // Get
    if(request.method !== "GET"){
        return;
    }

    // Buscar en el cache y responder con algo cacheado
    event.respondWith(cacheResponse(request));

    // actualizar cache
    event.waitUntil(updateCache(request))
})

async function precache() {

    // nos devuelve una instancia de cache llamada v1 y pues devuelve una promesa con los objetos
    // por esto se marca con await y la funcion en async
    const cache = await caches.open(VERSION)

    // añadimos recursos indispensables
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/Plugins/AutoPlay.js',
        '/assets/Plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/ejercicio.mp4',
    ])

}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);

    // ver si tenemos cacheada la peticiòn
    const response = await cache.match(request)
    // si si, retornamos el cache si no respondemos con el recurso en internet
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);

    // hacemos la petición al recurso una vez tengamos red de nuevo y actualizamos la cache
    const response = await fetch(request);

    // retornamos la petición y la agregamos a la cache nueva
    return cache.put(request, response)
}