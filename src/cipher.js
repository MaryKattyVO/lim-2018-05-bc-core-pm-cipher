window.cipher = { 

    encode: (offset , string) => {
        let keyNew = parseInt(offset);
        let textOut = "";

        for(let i = 0; i < string.length; i++){
            const convertToAsqui = string.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut += String.fromCharCode((convertToAsqui - 65+keyNew)%26 + 65);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut += String.fromCharCode((convertToAsqui - 97+keyNew)%26 + 97);
            }
            else {
                textOut += string[i];
               
            }
        }
        return textOut;
    },

    decode: (offset , string) => {
        let keyNew = parseInt(offset);
        let textOut = "";

        for(let i = 0; i < string.length; i++){
            const convertToAsqui = string.charCodeAt(i);

            if(convertToAsqui >= 65 && convertToAsqui <= 90){
                textOut += String.fromCharCode((convertToAsqui - 65 - keyNew +  26*2)%26 + 65);
            }
            else if(convertToAsqui >= 97 && convertToAsqui <= 122){
                textOut += String.fromCharCode((convertToAsqui - 97 - keyNew +  26*2)%26 + 97);
            }
            else {
                textOut += string[i];
            }
       
        }
        return textOut;
    }, 

    createCipherWithOffset: (offset) => {
        const result = {

        encode: (string)=>{
            return  cipher.encode(offset,string);
        },
        decode: (string)=>{

            return cipher.decode(offset,string);
        } 
    }
    return result;
    }
}


