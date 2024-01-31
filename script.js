var encryptButton = document.querySelector('.btn-encriptar');
var decryptButton = document.querySelector('.btn-desencriptar');
var contentBoy = document.querySelector('.content-boy');
var contentParagraph = document.querySelector('.content-paragraph');
var result = document.querySelector('.content-result');

encryptButton.onclick = encriptar;
decryptButton.onclick = desencriptar;

function encriptar() {
   ocultarPalavra();
   var caixaTexto = recuperarTexto()
   result.textContent = encriptarTexto(caixaTexto); 
}

function desencriptar() {
    ocultarPalavra();
    var caixaTexto = recuperarTexto()
    result.textContent = desencriptarTexto(caixaTexto);
}

function recuperarTexto() {
    var caixaTexto = document.querySelector(".text-box-two")
    return caixaTexto.value
}

function ocultarPalavra() {
    contentBoy.classList.add("ocultar");
    contentParagraph.classList.add("ocultar");
}

function encriptarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}
