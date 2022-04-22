/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	
	let obj={};
	for (let letter of string) {
		if (!obj[letter]) {obj[letter]=1}
		else {obj[letter]+=1}
	}
	
	return obj

}
console.log(countCharacters('banana'))

function duplicateCharMinCount(string, minCount) {
	let arr=[];
	let countingObj = countCharacters(string)
	for (let key in countingObj) {
		if (countingObj[key]>=minCount) 
		arr.push(key)
	
	}
return arr
}
duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3) )// ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
