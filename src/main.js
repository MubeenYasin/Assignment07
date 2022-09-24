/* --------------------String Exercise-------------------------*/
/* 1. Write a ts program to find length of a string.*/
/* ------------------------------------------------------------*/
function stringLength(sl) {
    return (sl.length);
}
console.log("--------------------\n   Problem No. 01\n--------------------");
console.log("String Length  = ".concat(stringLength('I Love Pakistan')));
/* ---------------------------------------------*/
/* 2. Write a ts program to copy one string to another string.*/
/* ---------------------------------------------*/
function copyString(str1) {
    var copyString = str1;
    return (copyString);
}
console.log("\n--------------------\n   Problem No. 02\n--------------------");
console.log("Copied String  = ".concat(copyString('I Love Muhammad')));
/* ---------------------------------------------*/
/* 3. Write a ts program to concatenate two strings.*/
/* ---------------------------------------------*/
function concatString(str1, str2) {
    var concatedString = str1.concat(str2);
    return (concatedString);
}
console.log("\n--------------------\n   Problem No. 03\n--------------------");
console.log("concated String  = ".concat(concatString('I Love Muhammad, ', 'ALLHAMDU LILLAH I follow him')));
/* ---------------------------------------------*/
/* 4. Write a ts program to compare two strings.*/
/* ---------------------------------------------*/
function compareString(cmpS1, cmpS2) {
    var compare = cmpS1.localeCompare(cmpS2);
    return compare;
}
console.log("\n--------------------\n   Problem No. 04\n--------------------");
console.log("compared String Retun  = ".concat(compareString('I Love Muhammad', 'I Love Muhammad')));
/* ---------------------------------------------*/
/* 5. Write a ts program to convert lowercase string to uppercase.*/
/* ---------------------------------------------*/
function toUpper(tu) {
    var upperCaseed = tu.toUpperCase();
    return (upperCaseed);
}
console.log("\n--------------------\n   Problem No. 05\n--------------------");
console.log("Upper Cased String  = ".concat(toUpper('I Love Muhammad')));
/* ---------------------------------------------*/
/* 6. Write a ts program to convert uppercase string to lowercase.*/
/* ---------------------------------------------*/
function toLower(tu) {
    var loweredCaseed = tu.toLowerCase();
    return (loweredCaseed);
}
console.log("\n--------------------\n   Problem No. 06\n--------------------");
console.log("Lower Caseed String  = ".concat(toLower('I LOVE MUHAMMAD')));
/* ---------------------------------------------*/
/* 7. Write a ts program to toggle case of each character of a string.*/
/* ---------------------------------------------*/
function toggleCase(tl) {
    for (var tli = 0; tli < tl.length; tli++) {
        tl.charAt(tli);
        return tl;
        // if(tl.charAt(tli) === tl.charAt(tli).toLowerCase){
        // }
    }
}
console.log("\n--------------------\n   Problem No. 07\n--------------------");
toggleCase('HkHkjHkH');
console.log("Toggled Case String  = ".concat(toggleCase('LoVe')));
/* ---------------------------------------------*/
/* */
/* ---------------------------------------------*/
/*
String Exercise
8. Write a ts program to find total number of alphabets, digits or special character in a string.
9. Write a ts program to count total number of vowels and consonants in a string.
10. Write a ts program to count total number of words in a string.
11. Write a ts program to find reverse of a string.
12. Write a ts program to check whether a string is palindrome or not.
13. Write a ts program to reverse order of words in a given string
14. Write a ts program to find first occurrence of a character in a given string.
15. Write a ts program to find last occurrence of a character in a given string.
16. Write a ts program to search all occurrences of a character in given string.
17. Write a ts program to count occurrences of a character in given string.
18. Write a ts program to find highest frequency character in a string.
19. Write a ts program to find lowest frequency character in a string.
20. Write a ts program to count frequency of each character in a string.
21. Write a ts program to remove first occurrence of a character from string.
22. Write a ts program to remove last occurrence of a character from string.
23. Write a ts program to remove all occurrences of a character from string.
24. Write a ts program to remove all repeated characters from a given string.
25. Write a ts program to replace first occurrence of a character with another in a string.
26. Write a ts program to replace last occurrence of a character with another in a string.
27. Write a ts program to replace all occurrences of a character with another in a string.
28. Write a ts program to find first occurrence of a word in a given string.
29. Write a ts program to find last occurrence of a word in a given string.
30. Write a ts program to search all occurrences of a word in given string.
31. Write a ts program to count occurrences of a word in a given string.
32. Write a ts program to remove first occurrence of a word from string.
33. Write a ts program to remove last occurrence of a word in given string.
34. Write a ts program to remove all occurrence of a word in given string.
35. Write a ts program to trim leading white space characters from given string.
36. Write a ts program to trim trailing white space characters from given string.
37. Write a ts program to trim both leading and trailing white space characters from given string.
38. Write a ts program to remove all extra blank spaces from given string.

conditional operators programming exercises

1. Write a ts program to find maximum between two numbers using conditional operator.
2. Write a ts program to find maximum between three numbers using conditional operator.
3. Write a ts program to check whether a number is even or odd using conditional operator.
4. Write a ts program to check whether year is leap year or not using conditional operator.
5. Write a ts program to check whether character is an alphabet or not using conditional operator.

List of switch case programming exercises

1. Write a ts program to print day of week name using switch case.
2. Write a ts program print total number of days in a month using switch case.
3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
4. Write a ts program to find maximum between two numbers using switch case.
5. Write a ts program to check whether a number is even or odd using switch case.
6. Write a ts program to check whether a number is positive, negative or zero using switch case.
7. Write a ts program to find roots of a quadratic equation using switch case.
8. Write a ts program to create Simple Calculator using switch case.

Total = 51 Problem

*/ 
