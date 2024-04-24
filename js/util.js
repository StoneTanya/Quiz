const decodeHtmlEntity = (str) => {
    return str.replace(/&/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
};