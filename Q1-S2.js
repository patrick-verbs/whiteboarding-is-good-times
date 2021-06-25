function formatStringToUrl(inputString) {
  let urlChar = inputString.charAt(0);
  if (urlChar === " ") {
    urlChar = "%20";
  }

  // BASE CASE
  if (inputString.length === 1) {
    return urlChar;
  } else {
  // RECURSIVE CASE
    const unparsedString = inputString.substring(1);
    return urlChar + formatStringToUrl(unparsedString);
  }
}

const input = process.argv[2];
const output = formatStringToUrl(input);
console.log(output);