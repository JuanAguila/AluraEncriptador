const textArea = document.querySelector(".textEncriptador");
const textDescriptador = document.querySelector(".textDesncriptador");


function fnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    textDescriptador.value = textEncriptado
    textDescriptador.style.backgroundImage = "none"
}

function encriptar(strEncriptador){

    let arrayCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncriptador = strEncriptador.toLowerCase()

    for(let i = 0; i < arrayCod.length; i++){
        if(strEncriptador.includes(arrayCod[i][0])){
            strEncriptador = strEncriptador.replaceAll(arrayCod[i][0],arrayCod[i][1])
        }
    }
    return strEncriptador
}

function fnDesencriptar(){
    const textDesencriptado = desEncriptar(textArea.value)
    textDescriptador.value = textDesencriptado
}

function desEncriptar(strDesencriptador){

    let arrayCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strDesencriptador = strDesencriptador.toLowerCase()

    // if (texto.length != 0 && (/^[a-z\s]+$/.test(texto)) ) {
    //     document.getElementById("mensaje").value = textoCifrado;
    //     encriptado.style.display = "none"; 
    // }else {
    //     muñeco.src = "img/muñeco.png";
    //     tituloMensaje.textContent = "Solo permite letras minúsculas y sin acéntos";
    //     parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    //     alert("Solo permite letras minúsculas y sin acéntos")
    // }

    for(let i = 0; i < arrayCod.length; i++){
        if(strDesencriptador.includes(arrayCod[i][0])){
            strDesencriptador = strDesencriptador.replaceAll(arrayCod[i][1],arrayCod[i][0])
        }
    }
    return strDesencriptador
}

function copiar(){

   var copiando = document.querySelector(".textDesncriptador"); 
    
   copiando.select();
   copiando.setSelectionRange(0,99999);

   navigator.clipboard.writeText(copiando.value);

   alert("ha copiado el texto: "+copiando.value);
    
}