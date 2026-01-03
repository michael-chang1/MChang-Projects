/* This is the mCipher!
    Made by Michael Chang
*/
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~0123456789".split("");
let key = [...chars];

// Here's the key
function mCipher() {
    for (let i = key.length - 1; i > 0; i--) {
        /*
        Use the line below to make the key randomized.
        --> const j = Math.floor(Math.random() * (i + 1));
        */
        const j = Math.floor(0.32625 * (i+1));
        [key[i], key[j]] = [key[j], key[i]];
    }
}

// The Encrypting Step
function encrypt() {
    const plainText = document.getElementById("userInput").value;
    let cipherText = "";
    for (let letter of plainText) {
        const index = chars.indexOf(letter);
        cipherText += (index !== -1) ? key[index] : letter;
    }
    document.getElementById("outputText").innerText = cipherText;
}

// The Decrypting Step
function decrypt() {
    const cipherText = document.getElementById("userInput").value;
    let plainText = "";
    for (let letter of cipherText) {
        const index = key.indexOf(letter);
        plainText += (index !== -1) ? chars[index] : letter;
    }
    document.getElementById("outputText").innerText = plainText;
}

/* Generate a new key (Only use for randomized key version.)
function resetKey() {
    shuffleKey();
    alert("New random key generated!");
}*/

// View the key
function viewKey(){
    let currentKey = "";
    for (let i = 0; i < chars.length; i++){
        currentKey += chars[i] + " >>> " + key[i] + " | ";
    }
    document.getElementById("outputText").innerText = currentKey;
}

// Start the mCipher.
mCipher();