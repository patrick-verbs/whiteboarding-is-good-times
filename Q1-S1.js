function formatStringToUrl(inputString) {
  const splitString = inputString.split("");

  for (let i = 0; i < splitString.length; i++) {
    // Look at each character using splitString[i]
    if (splitString[i] === " ") {
      splitString[i] = "%20";
    }
  }

  const outputString = splitString.join("");
  return outputString;
}

const input = process.argv[2];
const output = formatStringToUrl(input);
console.log(output);