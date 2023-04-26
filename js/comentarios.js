function publicarComentario(comentario,i){
    let div = document.createElement("div");
    let clase = (i % 2 == 0)? "comentarioDerecha" : "comentarioIzquierda";
    div.classList = clase;
    let nombre = document.createElement("h2");
    nombre.textContent = comentario.name + ' dice: ';
    div.appendChild(nombre);
    let mail = document.createElement("p");
    mail.textContent = 'E-mail: '+comentario.email;
    div.appendChild(mail);
    let texto = document.createElement("p");
    texto.textContent = '"' + comentario.body+ '"';
    div.appendChild(texto);

    return div;
}

function listaDeComentarios(comentarios){
    
    let  caja = document.querySelector("#cajaComentarios");
    let i;
    for (i=0; i<comentarios.length; i++){
        caja.appendChild(publicarComentario(comentarios[i],i));
    }
}

// Numero al azar entre 0 y 100
let numeroAzar = Math.floor(Math.random() * 100);
const requestURL = 'https://jsonplaceholder.typicode.com/posts/'+numeroAzar+'/comments';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const comentarios = request.response;
    listaDeComentarios(comentarios);
  }

// Muestra un cocktel random
// www.thecocktaildb.com/api/json/v1/1/random.php

// User random 
// https://randomuser.me/api/

// comentarios random
// https://jsonplaceholder.typicode.com/posts/${numeroAzar}/comments


// https://api.weatherbit.io/v2.0/current?lat=-34.6131&lon=-58.3772&lang=es&&key=d71ef4a704e8411db65e86cfbf5d796f
// <img height="50" width="50" alt="Weather API Day Drizzle" style="" src="https://cdn.weatherbit.io/static/img/icons/d02d.png">