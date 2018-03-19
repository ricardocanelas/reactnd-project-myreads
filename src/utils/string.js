/**
* @description Remove double whitespace from Strings
* @param {string} text
* @returns {string} text without double whitespace
*/ 
export const removeWhiteSpace = (str) => {
    return str.replace(/  +/g,' ').trim();
}