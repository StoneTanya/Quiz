const SINGLE_QUOTATION_MARK = 39;
const DOUBLE_QUOTATION_MARK = 34;
const AMPERSANT = 38;
const ATILDE = 227;
const UUML = 252;
const regExp = /&[#a-z0-9]+;/gi;

const decodeHtmlEntity = (str) => {
    return str.replace(regExp, function (HTML_Entities) {
      let num;
      switch (HTML_Entities) {
        case "&apos;" && "&#039;":
          num = SINGLE_QUOTATION_MARK;
          break;
        case "&quot;":
          num = DOUBLE_QUOTATION_MARK;
          break;
        case "&amp;":
          num = AMPERSANT;
          break;
        case "&atilde;":
          num = ATILDE;
          break;
        case "&uuml;":
          num = UUML;
      }
      return String.fromCharCode(num);
    });
};

const isEscDown = (e) => e.key === 'Escape';

//Fisher–Yates Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
// /&quot;|&apos;|&gt;|&lt;|&amp;/gi
export { decodeHtmlEntity, isEscDown, shuffle };
