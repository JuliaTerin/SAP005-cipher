//src/index.js: aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode().

import cipher from './cipher.js';

console.log(cipher);

const offset = document.getElementById("offset");
const cripto = document.getElementById("cod").addEventListener("click", functionCrip);
const descripto = document.getElementById("descod").addEventListener("click", functionDescrip);

function functionCrip(msg,offset) {
    cont codgerado = toUpperCase(document.getElementById('msg').value);
    cripOk= //conta
    document.getElementById('password').value = cripOk;
}

function functionDescrip() {
    let Amsg = toUpperCase(document.getElementById('msg').value);
    cripOk= //conta
    document.getElementById('password').value = cripOk;
/*(codigoDaLetra = desloc) % 26 que é o tam do alfabeto
  ((codigoDaLetraASC - 65 + desloc) % 26) + 65