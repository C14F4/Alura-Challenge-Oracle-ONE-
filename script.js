/*  
1er  DESAFIO - CHALLENGE ALURA LATAM
------------------------------------

 Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"

Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"

Solo letras minusculas
No se permite acentuación de palabras   

*/

function encriptar()
{
    const texto = document.getElementById('input-texto').value;

    const textoEncriptado = texto.replace(/e/gi, 'enter')
                                 .replace(/i/gi, 'imes')
                                 .replace(/a/gi, 'ai')
                                 .replace(/o/gi, 'ober')
                                 .replace(/u/gi, 'ufat');

    document.getElementById("msg").value = textoEncriptado;
}

function desencriptar()
{
   const textoEncriptado = document.getElementById('input-texto').value;

    const textoDesencriptado = textoEncriptado.replace(/enter/gi, 'e')
                                              .replace(/imes/gi, 'i')
                                              .replace(/ai/gi, 'a')
                                              .replace(/ober/gi, 'o')
                                              .replace(/ufat/gi, 'u');

    document.getElementById("msg").value = textoDesencriptado;
}

function copiar()
{
    let mensaje = document.getElementById('msg');
    mensaje.select();
    document.execCommand('copy');
    alert("¡Texto copiado!");
}

var botonEncriptar = document.getElementById("btn-encriptar"); 
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.getElementById("btn-desencriptar"); 
botonDesencriptar.onclick = desencriptar;

var botonCopiar = document.getElementById("btn-copy"); 
botonCopiar.onclick = copiar;