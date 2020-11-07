//src/cipher.js: aqui você deve implementar o objeto cipher, o qual já está exportado no boilerplate. Este objeto (cipher) deve conter dois métodos:
//cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
//cipher.decode(offset, string): offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.

const cipher = {
 encode: function(offset, codificar){
   if (typeof offset != "number" || typeof codificar != "string"){
     //throw new TypeError()
   }
   else{
   let MsgReturn = "";
   let alphabetSize = 26;
   let firstAscii = 65;
   for(let cont = 0; cont < codificar.length; cont ++) {
      const CodA = codificar.charCodeAt (cont);
    let codificado = ((CodA - firstAscii + offset) % alphabetSize) + firstAscii;
    if (CodA <= 64 || CodA >= 91) {
    codificado = CodA;
    } MsgReturn += String.fromCharCode(codificado);
    }
  return MsgReturn
    }
 },  
  decode: function(offset, decodifica){
  if (typeof offset != "number" || typeof decodifica != "string"){
     // throw new TypeError()

  }else{
   let MsgReturn = "";
   let alphabetSize = 26;
   let firstAscii = 65;    
   for(let cont = 0; cont < decodifica.length; cont ++) {
      const CodB = decodifica.charCodeAt (cont);
    let recodificado = ((CodB - firstAscii - (offset % alphabetSize) + alphabetSize) % alphabetSize) + firstAscii;
    if (CodB <= 64 || CodB >= 91) {
    recodificado = CodB;
    } MsgReturn += String.fromCharCode(recodificado);

   }
     return MsgReturn
  }
}
};

export default cipher;