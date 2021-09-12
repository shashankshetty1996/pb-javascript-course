// Strings methods
var str = "prep bytes";
// console.log(str);

// length => .length is used to get length of string
// console.log(str.length);

// Accessing char => char can be accessed using it's index
// console.log(str.charAt(2));
// console.log(str[2]);

// Finding index => now how to find index??? No, worries use indexOf
// indexOf will return index of a char if found else will return -1.
// console.log(str.indexOf("p"));
// console.log(str.lastIndexOf("p"));

// task find character in string
// var str = "anaconda";
// var toFind = "c";
// var pos = str.indexOf(toFind);
// if (pos !== -1) {
//   console.log(`Found ${toFind} on position ${pos}`);
// } else {
//   console.log("NOT FOUND");
// }

// concatenation => joining two or more to form new string is called concatenation.
// "prep bytes, is teaching me js"
// task reverse string.
// var newStr = str.concat(", is teaching me js");
// var newStr = "I'm learning JS from " + str;
// var newStr = `I'm learning JS from ${str} and I'm understanding it`;
// console.log(newStr);
//     012345678901234567     +ve indexing
// str = "anaconda or python";
//     876543210987654321     -ve indexing
// slice => getting section of string
// var newStr = str.slice(0, 8); // anaconda
// var newStr = str.slice(3); // python
// var newStr = str.slice(str.indexOf('p')); // python
// console.log(newStr);
// console.log(str.slice(-5, -3));
// python anaconda

// substring
// var newStr = str.substring(11, 0);
// var newStr1 = str.slice(11, 0);
// console.log(newStr);
// console.log(newStr1);

// replace, replaceAll
// str = "anaconda or python";
// console.log(str);
// console.log(str.replace("a", "B"));
// console.log(str.replaceAll("a", "B"));

// trim
// str = "    some space in the sir and end    ";
// console.log(str);
// console.log(str.trim());

// split - string into array
// str = "anaconda  python";

// var newArray = str.split("  ");
// console.log(str);
// console.log(newArray);
