function armarCajas(pizza){
    // Se crean los elementos que contiene la caja
    let li = document.createElement("li");
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let imagen = document.createElement("img");

    //Se carga los datos contenido en la etiqueta img dentro del div2
    imagen.src = pizza.imagen;
    imagen.classList = "imagenComida";
    div2.appendChild(imagen);

    // Se agrega el div2 al div principal dentro del item
    div.appendChild(div2);

    // Se cargan los datos de nombre, descripcion y precio dentro del div3
    // que son contenidos dentro del div principal
    let nombre = document.createElement("h2");
    nombre.textContent = pizza.nombre;
    div3.appendChild(nombre);
    let descripcion = document.createElement("p");
    descripcion.textContent = pizza.descripcion;
    div3.appendChild(descripcion);
    let precio = document.createElement("p");
    precio.textContent = "$" + pizza.precio;
    precio.classList = "producto-precio";
    div3.appendChild(precio);

    // Se agrega el div3 al div principal del item
    div.appendChild(div3);

    // Se carga el div principal al item li
    li.appendChild(div);

    return li;
}

function armarCajas2(pizza){
    li = document.createElement("li");
    let codigoCaja = '<div><div><img class="imagenComida" src="'+
    pizza.imagen+
    '" alt=""></div><div><h2>'+
    pizza.nombre+'</h2><p>'
    +pizza.descripcion+
    '</p><p>'
    +pizza.precio+
    '</p></div></div>';
    li.innerHTML = codigoCaja;
    return li;
}
    
function crearListaDePizzas(pizzas){
    
    let  caja = document.querySelector("#opcionComidas");
    let uLista = document.createElement("ul");
    let i;
    for (i=0; i<pizzas.length; i++){
        uLista.appendChild(armarCajas(pizzas[i]));
    }
    caja.appendChild(uLista);
}

const requestURL = './js/articulos.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const menu = request.response;
    console.log(menu);
    console.log(menu.pizzas.length);
    crearListaDePizzas(menu.pizzas)
  }