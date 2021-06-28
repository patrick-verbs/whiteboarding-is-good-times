# Technical Interview Whiteboarding Document
## Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like `filter()` to solve this. Once you have solved the problem, demonstrate how it can be solved with `filter()`. Solve the problem with and without recursion.

Example

Input: `[7, 9, "hi", 12, "hi" 7, 53]`

Output: `[7, 9, "hi", 12, 53]`

## Interview/Whiteboarding
#### Non-recursive method

```
function dedupeArray(inputArray) {
	// outer loop working through the entire input arra
	for (let i = 0; i < inputArray.length; i++) {
		// inner loop checking for duplicates *after* the current element
		for (let j = i + 1; j < inputArray.length; j++) {
			// check if index j matches index i
			// if they match, remove index j
			if (inputArray[i] === inputArray[j]) {
				inputArray.splice(j, 1);
				j -= 1;
			}
		}
	}

	return outputArray; // later edit: this should have been left 'inputArray' or declared earlier
}
```

#### Recursive method (later edit: incomplete, obviously)
```
function dedupeArray(inputArray, i = 0) {
	// BASE CASE
	if (inputArray.length === 1) {
		return inputArray[0];
	}

	// RECURSIVE CASE
	return outputArray.push(dedupeArray(
inputArray.shift()
)
}
```