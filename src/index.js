//Capturando variables :DOM
const msjInput =  document.getElementById('msjInput');
const buttonCoder = document.getElementById('btnCoder');
const buttonDecipher = document.getElementById('btnDecipher');
const key = document.getElementById('key');

//Agregando evento :Boton encriptar
buttonCoder.addEventListener('click', encode);

//Agregando evento :Boton encriptar
buttonDecipher.addEventListener('click', decode);
/*//Escuchando Evento: Boton Desencriptar
BtnDesencriptar.addEventListener('clik', cipher.encode());*/