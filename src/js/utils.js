//A front-end encryption module that uses the AES-256-CBC encryption method.

import CryptoJS from 'crypto-js'
export default {
    encrypt(word, keyStr){
        keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
        var key  = CryptoJS.enc.Utf8.parse(keyStr);
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return encrypted.toString();
    },
    decrypt(word, keyStr){
        keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
        var key  = CryptoJS.enc.Utf8.parse(keyStr);
        var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}
