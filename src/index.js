const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');
const btnClear = document.getElementById('btnClear');
const msjInput =  document.getElementById('msjInput');
const key = document.getElementById('key');
const msjOut = document.getElementById("msjOut");

//Encode;
const startEncode = () =>{
    msjOut.value = window.cipher.createCipherWithOffset(key.value).encode(msjInput.value);
    
}
btnEncode.addEventListener('click', startEncode);

//Decode;
const startDecode = () =>{
    msjOut.value = window.cipher.createCipherWithOffset(key.value).decode(msjInput.value);
   
}
btnDecode.addEventListener('click',startDecode);

btnClear.addEventListener('click', () => {
    key.value = '';
    msjInput.value = '';
    msjOut.value = '';
});


