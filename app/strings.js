stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let str2 = str[0];
    let j = 1;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1] && j < amount) {
        str2 += str[i];
        j++;
      } else if (str[i] !== str[i - 1]) {
        str2 += str[i];
        j = 1;
      }
    }
    return str2;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let str2 = '';
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str[i];
    }
    return str2;
  },
};
