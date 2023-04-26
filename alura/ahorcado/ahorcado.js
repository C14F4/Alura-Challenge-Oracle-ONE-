var botonIniciarPartida = document.querySelector("#iniciar-juego");
var botonNuevaPartida = document.querySelector("#boton-nueva-partida");
var botonAgregarPalabra = document.querySelector("#nueva-palabra");

var palabras = ["ALURA", "ORACLE", "HTML", "JAVASCRIPT", "FUNCION", "VARIABLE", "CHALLENGE"];
var palabraSecreta;
var incorrectas = "";
var errores = 0;
var aciertos=0;
var letrasPresionadas="";

function agregarPalabra() {
	let palabraNueva = prompt("Nueva palabra:","Ingrese palabra...");
    if (palabraNueva.length > 0) {        
		let palabraNuevaMayuscula= palabraNueva.toUpperCase();
        palabras.push(palabraNuevaMayuscula);
    }
}

function escogerPalabraSecreta() {
    let alteatorio = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[alteatorio];
}

function teclaPresionada(evento) {
    let letra = evento.key.toUpperCase(); 
    //console.log("Presionada: " + letra);
	if (!letrasPresionadas.includes(letra)){
		if (palabraSecreta.includes(letra)){
			letraCorrecta(letra);
		}else{
			letraIncorrecta(letra);
		}
		letrasPresionadas += letra;
	}
};

function letraCorrecta(letra) {
    pincel.font = "21px Arial";
    pincel.fillStyle = "Black";
	let posicion = palabraSecreta.indexOf(letra);
	let cuenta = 0;
	while ( posicion != -1 ) {
		pincel.fillText(letra, 305 + (50 * posicion), 380);
		cuenta += posicion;
		posicion = palabraSecreta.indexOf(letra,cuenta+1);
		aciertos++;
	}
	finJuego();
}

function letraIncorrecta(letra) {
    pincel.font = "21px Arial";
    pincel.fillStyle = "Black";
	if (!incorrectas.includes(letra)){
		incorrectas += letra;
		pincel.fillText(incorrectas, 400, 300);
		dibujarAhorcado();
	}
}

function finJuego(){
	pincel.font = "25px Arial";
    pincel.fillStyle = "red";
	if (errores == 6){
		pincel.fillText("GAME OVER!", 400, 450);
		crearBoton();
	}
	if(aciertos== palabraSecreta.length){
		pincel.fillText("Has GANADO!", 400, 450);
		crearBoton();
	}
}

function crearBoton(){
	const div = document.createElement("div");
	div.style.textAlign = "center";
	
	const divBoton = document.createElement("button");
	divBoton.textContent = "Iniciar nueva partida";
	divBoton.className = "btn";
	divBoton.id = "nuevo-boton";
	
	div.appendChild(divBoton);
	
	document.body.appendChild(div); 
	
	document.getElementById("nuevo-boton").scrollIntoView();
	
	var botonNuevo = document.querySelector("#nuevo-boton");
	botonNuevo.onclick = nuevoJuego;
}

botonAgregarPalabra.onclick = agregarPalabra;
botonIniciarPartida.onclick = nuevoJuego;