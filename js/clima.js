function climaAhora(clima){
    let ubicacion = document.createElement("h2");
    let tiempo = document.createElement("img");
    let temperatura = document.createElement("p");
    let p = document.createElement("p");

    ubicacion.textContent = "Hoy en " + clima.city_name;
    tiempo.src = "https://cdn.weatherbit.io/static/img/icons/"+clima.weather.icon+".png"
    temperatura.textContent = `${clima.weather.description} y ${clima.app_temp}°C`;
    p.textContent = "UN DIA ESPECIAL PARA UNA PIZZA"

    let cajaClima = document.querySelector("#clima");
    cajaClima.appendChild(ubicacion);
    cajaClima.appendChild(tiempo);
    cajaClima.appendChild(temperatura);
    cajaClima.appendChild(p);
}

const requestURL2 = 'https://api.weatherbit.io/v2.0/current?lat=-34.6131&lon=-58.3772&lang=es&key=d71ef4a704e8411db65e86cfbf5d796f';
const request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() {
    const clima = request2.response;
    console.log(clima)
    console.log(clima.data[0])
    climaAhora(clima.data[0]);
  }
