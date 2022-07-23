function rot13(str) {

    var alph =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

    var alphabets = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alph.length; j++){
            if(str[i] === alph[j]){
                resultStr.push(alphabets[j]);
            }
        }
    }
    return resultStr.join("");
};

rot13("SERR CVMMN!");