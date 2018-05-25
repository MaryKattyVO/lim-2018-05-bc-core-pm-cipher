//METODO CIFRAR
const encode = () =>{
    const keyNew = parseInt(key.value);
    const messageC = msjInput.value;
    var textOut = "";
    for(let i = 0; i < messageC.length; i++){
        var c = (messageC.charCodeAt(i)-65+keyNew)%26+65;
        textOut = textOut + String.fromCharCode(c);
    }
    document.getElementById("msjOut").innerHTML=textOut;

}
//METODO DECIFRAR
const decode = () =>{
    const keyNew = parseInt(key.value);
    const messageC = msjInput.value;
    var textOut = "";
    for(let i = 0; i < messageC.length; i++){
        var c = (messageC.charCodeAt(i)-65-keyNew+26*2)%26+65;
        textOut = textOut + String.fromCharCode(c);
    }
    document.getElementById("msjOut").innerHTML=textOut;
}

