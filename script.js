
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar() {
    var texto = document.getElementById("inputx").value.toLowerCase();
    var txtCifrado= texto.replace(/e/igm, "enter");
    var txtCifrado= txtCifrado.replace(/i/igm, "imes");
    var txtCifrado= txtCifrado.replace(/a/igm, "ai");
    var txtCifrado= txtCifrado.replace(/o/igm, "ober");
    var txtCifrado= txtCifrado.replace(/u/igm, "ufat");
    
    document.getElementById("inspector2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display ="inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputx").value.toLowerCase();
    var txtCifrado= texto.replace(/enter/igm, "e");
    var txtCifrado= txtCifrado.replace(/imes/igm, "i");
    var txtCifrado= txtCifrado.replace(/ai/igm, "a");
    var txtCifrado= txtCifrado.replace(/ober/igm, "o");
    var txtCifrado= txtCifrado.replace(/ufat/igm, "u");
    
    document.getElementById("inspector2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display ="inherit";
}

function copy (){
var contenido= document.querySelector("#texto2");
contenido.select();
document.execCommand("copy");
alert("texto copiado");


}

//terminado
