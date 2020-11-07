//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().

import cipher from './cipher.js';

const buttonCod = document.getElementById('cod')
buttonCod.addEventListener('click', functionCrip)

function functionCrip(clickCod){ 
    clickCod.preventDefault();
    const textValue = document.getElementById('text').value;
    textValue = textValue.toUppeCase();
    const desloca = parseInt(document.getElementById('offset').value)
    let textCodificado = cipher.encode(textValue, desloca);
    const textoSenha = document.getElementById('password').value = `${textCodificado}`;
    textoSenha.innerHTML = textCodificado
}

const buttonDescode = document.getElementById('descod')
buttonDescode.addEventListener('click', functionDescrip)

function functionDescrip(clickDescod){
    clickDescod.preventDefault();
    const decodificar = document.getElementById('text').value.toUppeCase()
    decodificar = decodificar.toUppeCase();
    //console.log(decodificar)
    let volta =  parseInt(document.getElementById('offset').value)
    //console.log(volta)
    const textDescod = cipher.decode(volta,decodificar);
    document.getElementById('password').value = `${textDescod}`;
}