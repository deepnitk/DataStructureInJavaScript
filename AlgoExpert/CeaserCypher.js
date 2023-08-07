function caesarCipherEncryptor(string, key) {
    return string.split('')
      .map((_, ind) => {
        const cypheredLetter = string.charCodeAt(ind) + (key%26);
        return String.fromCharCode((cypheredLetter > 122 ? cypheredLetter - 26 : cypheredLetter));
      })
        .join('');
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  