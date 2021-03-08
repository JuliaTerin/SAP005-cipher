
const cipher = {
 encode: function(offset, codificar){
   if (typeof offset != "number" || typeof codificar != "string"){
     throw new TypeError()
   }
   else{
   const MsgReturn = "";
   const alphabetSize = 26;
   const firstAscii = 65;
   for(const cont = 0; cont < codificar.length; cont ++) {
      const CodA = codificar.charCodeAt (cont);
    const codificado = ((CodA - firstAscii + offset) % alphabetSize) + firstAscii;
    if (CodA <= 64 || CodA >= 91) {
    codificado = CodA;
    } MsgReturn += String.fromCharCode(codificado);
    }
  return MsgReturn
    }
 },  
  decode: function(offset, decodifica){
  if (typeof offset != "number" || typeof decodifica != "string"){
     throw new TypeError()

  }else{
   const MsgReturn = "";
   const alphabetSize = 26;
   const firstAscii = 65;    
   for(const cont = 0; cont < decodifica.length; cont ++) {
      const CodB = decodifica.charCodeAt (cont);
    const recodificado = ((CodB - firstAscii - (offset % alphabetSize) + alphabetSize) % alphabetSize) + firstAscii;
    if (CodB <= 64 || CodB >= 91) {
    recodificado = CodB;
    } MsgReturn += String.fromCharCode(recodificado);

   }
     return MsgReturn
  }
}
};

export default cipher;
