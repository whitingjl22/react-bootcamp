// Remove extra white space between words
const trim = (s) => { return s.replace(/ +/g, ' '); };

// Make first letter of string uppercase
const capitalize = (s) => { return s.replace(/^./, (c) => { return c.toUpperCase(); }); };

// Put exclamation mark at the end of string
const exclaim = (s) => { return `${s}!`; };


const compose = (f, g) => { return (x) => { return f(g(x)); }; };

const capitalizeAndExclaimAndTrim = compose(exclaim, capitalize, trim);

const myString = 'yo, format   me    plz';
console.log(capitalizeAndExclaimAndTrim(myString));

