/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";

  const maxlen = Math.max(word1.length + word2.length);

  for (let i = 0; i < maxlen; i++) {
    if (i < word1.length) {
      result += word1[i];
    } else {
      result += word2[i - word1.length];
    }
  }
  console.log(result);
};

mergeAlternately("Mareg", "back");
