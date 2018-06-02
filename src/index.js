//DOM: Traer obejtos
const buttonCoder = document.getElementById('btnCoder');
const buttonDecipher = document.getElementById('btnDecipher');
const buttonClear = document.getElementById('buttonClear');
const mensajeEntrada =  document.getElementById('msjInput');
const valorFijo = document.getElementById('key');
const mensajeSalida = document.getElementById("msjOut");

//inserta valor en HTML: Encode
const empezarCifrado = () =>{
   mensajeSalida.value = window.cipher.createCipherWithOffset(valorFijo.value).encode(mensajeEntrada.value);
    
}
//Evento click para cifrar:
buttonCoder.addEventListener('click',empezarCifrado);


//Inserta valor en HTMLl: Decode
const empezarDesCifrado = () =>{
   mensajeSalida.value = window.cipher.createCipherWithOffset(valorFijo.value).decode(mensajeEntrada.value);
   
}
//Evento click para descifrar
buttonDecipher.addEventListener('click',empezarDesCifrado);

//Evento limpiar contenido de caja de texto:
buttonClear.addEventListener('click', () => {
    valorFijo.value = '';
    mensajeSalida.value = '';
});
