//funcion para encriptar texto
function encriptar(){
    
    let texto = document.getElementById("text").value.toLowerCase();

    //i toma letras mayusculas y minusculas
    //g toma toda la linea o la oracion
    //m toma multiples lineas

    let textoEncriptado = texto.replace(/e/img,"enter"); 
    textoEncriptado = textoEncriptado.replace(/i/img,"imes"); 
    textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    textoEncriptado = textoEncriptado.replace(/o/img,"ober"); 
    textoEncriptado = textoEncriptado.replace(/u/img,"ufat");
    
    //innerHTML insertar nuevo contenido en un contenedor
    
    document.getElementById("pizarra_encriptador").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "block";

    
    
    
    if(texto == ""){
        document.getElementById("subsection-none").style.display = "inherit";
    }else{
        document.getElementById("subsection-none").style.display = "none";
    }

}

//boton encriptador
let botonEncriptador = document.getElementById("btn_encriptador");
botonEncriptador.onclick = encriptar;

//funcion para descriptar texto

function desEncriptar(){
    
    let texto = document.getElementById("text").value.toLowerCase();

    //i toma letras mayusculas y minusculas
    //g toma toda la linea o la oracion
    //m toma multiples lineas

    let textoEncriptado = texto.replace(/enter/img,"e"); 
    textoEncriptado = textoEncriptado.replace(/imes/img,"i"); 
    textoEncriptado = textoEncriptado.replace(/ai/img,"a"); 
    textoEncriptado = textoEncriptado.replace(/ober/img,"o"); 
    textoEncriptado = textoEncriptado.replace(/ufar/img,"u"); 

    document.getElementById("pizarra_encriptador").innerHTML = textoEncriptado;
}

//boton desEncriptador
let botonDesencriptador = document.getElementById("btn_desencriptador");
botonDesencriptador.onclick = desEncriptar;

//funcion para copia texto
function copiar(){

    let contenido = document.getElementById("pizarra_encriptador");
    contenido.select();
    document.execCommand("copy");

    let texto = document.getElementById("text").value.toLowerCase();

    text.value = "";
    text.focus();

    alert("texto copiado con exito");
}

//boton para copiar

let botonCopia = document.getElementById("copiar");

botonCopia.onclick = copiar;