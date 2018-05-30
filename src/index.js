//DOM: Traer obejtos
const buttonCoder = document.getElementById('btnCoder');
const buttonDecipher = document.getElementById('btnDecipher');
const buttonClear = document.getElementById('buttonClear');
const mensajeEntrada =  document.getElementById('msjInput');
const valorFijo = document.getElementById('key');
const mensajeSalida = document.getElementById("msjOut");

//inserta valor en HTML: Encode
const empezarCifrado = () =>{
    let key1 =  key.value;
    let mensajeEntradita = msjInput.value;
    mensajeSalida.value = window.cipher.encode(key1,mensajeEntradita);
}
//Evento click para cifrar:
buttonCoder.addEventListener('click',empezarCifrado);


//Inserta respuesta en HTMLl: Decode
const empezarDesCifrado = () =>{
    let key1 =  key.value;
    let mensajeEntradita = msjInput.value;
    mensajeSalida.value = window.cipher.decode(key1,mensajeEntradita);
}
//Evento click para descifrar
buttonDecipher.addEventListener('click',empezarDesCifrado);

//Evento limpiar contenido de caja de texto:
buttonClear.addEventListener('click', () => {
    key.value = '';
    msjInput.value = '';
});









/*function hola (){
    return console.log('hola')
}

hola()*/