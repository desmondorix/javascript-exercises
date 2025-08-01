const palindromes = function (word) {
  var palindromesWord = word
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");

  return palindromesWord === word.toLowerCase().replace(/[^a-z0-9]/g, "");
};

// Do not edit below this line
module.exports = palindromes;
