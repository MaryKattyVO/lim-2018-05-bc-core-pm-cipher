//METODO CIFRAR
window.cipher = { 

    //Metodo cifrar:    
    encode: (offset , string) => {
        const keyNew = parseInt(offset.value);
        const msjToCipher = string.value;
        let textOut = "";

        for(let i = 0; i < msjToCipher.length; i++){
            let convertToAsqui = msjToCipher.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut = textOut + String.fromCharCode((convertToAsqui - 65+keyNew)%26 + 65);
                console.log(textOut);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut = textOut + String.fromCharCode((convertToAsqui - 97+keyNew)%26 + 97);
            }
       
        }
        return textOut;
    },

    //Metodo descifrar:
    decode: (offset , string) => {
        const keyNew = parseInt(offset.value);
        const msjToCipher = string.value;
        let textOut = "";

        for(let i = 0; i < msjToCipher.length; i++){
            let convertToAsqui = msjToCipher.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut = textOut + String.fromCharCode((convertToAsqui - 65 - keyNew +  26*2)%26 + 65);
                console.log(textOut);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut = textOut + String.fromCharCode((convertToAsqui - 97 - keyNew +  26*2)%26 + 97);
            }
       
        }
        return textOut;
    }   
    


}



