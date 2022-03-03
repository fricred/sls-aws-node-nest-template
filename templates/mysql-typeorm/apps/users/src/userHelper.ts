const crypto = require('crypto');

export const generatePassword = () =>{
    
    const pLength = 20;

    var keyListAlpha="abcdefghijklmnopqrstuvwxyz",
        keyListAlphaUC="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        keyListInt="123456789",
        keyListSpec="!@+><#_",
        password='';
    var len = Math.ceil(pLength/2);
    len = len - 1;
    var lenSpec = pLength-2*len;

    for (let i=0;i<len;i++) {
        password+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
        password+=keyListAlphaUC.charAt(Math.floor(Math.random()*keyListAlphaUC.length));
        password+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
    }

    for (let i=0;i<lenSpec;i++)
        password+=keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');

    return password;

}