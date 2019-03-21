// Testing a regex
let testString = "My test string";
let testRegex = /string/;
testRegex.test(testString); // true

// Ignoring case
const caseInsensitiveRegex = /ignore case/i;
const testString = 'We use the i flag to iGnOrE CasE';
caseInsensitiveRegex.test(testString); // true

// Extracting all of the matches in an array
const testString = "Repeat repeat rePeAT";
const regexWithAllMatches = /Repeat/gi;
testString.match(regexWithAllMatches); // ["Repeat", "repeat", "rePeAT"]

// Matching any character
const regexWithWildcard = /.at/gi;
const testString = "cat BAT cupcake fAT mat dog";
const allMatchingWords = testString.match(regexWithWildcard); // ["cat", "BAT", "fAT", "mat"]

// Matching a single character with multiple possibilities
// Match "cat" "fat" and "mat" but not "bat"
const regexWithCharClass = /[cfm]at/g;
const testString = "cat fat bat mat";
const allMatchingWords = testString.match(regexWithCharClass); // ["cat", "fat", "mat"]
