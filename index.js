//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().

import cipher from './cipher.js';

const buttonCod = document.getElementById('cod')
buttonCod.addEventListener('click', functionCrip)

function functionCrip(clickCod){ 
    clickCod.preventDefault();
    let codificar = document.getElementById('text').value;
    codificar = codificar.toUpperCase();
    let desloca = parseInt(document.getElementById('offset').value);
    let textEncode = cipher.encode(desloca,codificar);
    document.getElementById('password').value = `${textEncode}`;
    //textoSenha.innerHTML = textEncode
}

const buttonDescode = document.getElementById('descod')
buttonDescode.addEventListener('click', functionDescrip)

function functionDescrip(clickDescod){
    clickDescod.preventDefault();
    let decodificar = document.getElementById('text').value;
    decodificar = decodificar.toUpperCase();
    let desloc =  parseInt(document.getElementById('offset').value);
    let textDescod = cipher.decode(desloc,decodificar);
    document.getElementById('password').value = `${textDescod}`;
}