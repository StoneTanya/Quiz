const decodeHtmlEntity = (str) => {
  return str.replace(/&[#a-z0-9]+;/gi, function (dec) {
    return String.fromCharCode(dec);
  });
};
// /&quot;|&apos;|&gt;|&lt;|&amp;/gi
export {decodeHtmlEntity};