function allCharsUnique(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j < inputString.length; j++) {
      if (inputString[i] === inputString[j]) {
        return false;
      }
    }
  }

  return true;
}

const input = process.argv[2];
const output = allCharsUnique(input);
console.log(output);