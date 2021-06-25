function compressString(inputString) {
  const firstChar = inputString.charAt(0);

  // BASE CASE
  if (inputString.length === 1) {
    return firstChar;
  }

  // RECURSIVE CASE
  let counter = 1;
  while (firstChar === inputString.charAt(counter)) {
    counter++;
  }

  // Using 'counter' begins the substring at the first non-repeated character
  const unparsedString = inputString.substring(counter);
  if (counter === 1) {
    // This "hides" the integer from the output string if it's a "1"
    counter = "";
  }
  return counter + firstChar + compressString(unparsedString);
}

const input = process.argv[2];
const output = compressString(input);
console.log(output);