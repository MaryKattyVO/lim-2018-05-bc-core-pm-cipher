//METODO CIFRAR
window.cipher = { 

    //Metodo cifrar:    
    encode: (offset , string) => {
        let keyNew = parseInt(offset);
        let textOut = "";

        for(let i = 0; i < string.length; i++){
            let convertToAsqui = string.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut = textOut + String.fromCharCode((convertToAsqui - 65+keyNew)%26 + 65);
                console.log(textOut);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut = textOut + String.fromCharCode((convertToAsqui - 97+keyNew)%26 + 97);
            }
            else if(convertToAsqui == 32){
                textOut = textOut + String.fromCharCode(32);
            }
        }
        return textOut;
    },

    //METODO DESCIFRAR:
    decode: (offset , string) => {
        let keyNew = parseInt(offset);
        let textOut = "";

        for(let i = 0; i < string.length; i++){
            let convertToAsqui = string.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut = textOut + String.fromCharCode((convertToAsqui - 65 - keyNew +  26*2)%26 + 65);
                console.log(textOut);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut = textOut + String.fromCharCode((convertToAsqui - 97 - keyNew +  26*2)%26 + 97);
            }
            else if(convertToAsqui == 32){
                textOut = textOut + String.fromCharCode(32);
            }
       
        }
        return textOut;
    }, 


    createCipherWithOffset: (offset) => {
        const result = {

        encode: (string)=>{
           // cipher.encode(offset,string);
            return  cipher.encode(offset,string);
        },
        decode: (string)=>{

            return cipher.decode(offset,string);
        } 
    }
    console.log();
    return result;
    }
}


