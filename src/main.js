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
    var t = '';
    for (var tli = 0; tli < tl.length; tli++) {
        var x = tl.charAt(tli);
        var y = tl.charAt(tli).toUpperCase();
        if (x === y) {
            t = t + x.toLowerCase();
        }
        else {
            t = t + x.toUpperCase();
        }
    }
    console.log("String ".concat(tl, " after Toggled = ").concat(t));
}
console.log("\n--------------------\n   Problem No. 07\n--------------------");
toggleCase(' aBcDeF');
/* ---------------------------------------------*/
/* 8. Write a ts program to find total number of alphabets, digits or special character in a string.*/
/* ---------------------------------------------*/
function fTotalChar(x) {
    var numbers = '1234567890';
    var alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var spacialChars = "~!@#$%^&_=+-*\|()[]{ }/?.,<>";
    var countedNumber = '';
    var countedAlphet = '';
    var countedSpacialChar = '';
    for (var xi = 0; xi < x.length; xi++) {
        for (var numi = 0; numi < numbers.length; numi++) {
            if (x.charAt(xi) === numbers.charAt(numi)) {
                countedNumber = countedNumber + x.charAt(xi);
            }
        }
        for (var alph = 0; alph < alphabets.length; alph++) {
            if (x.charAt(xi) === alphabets.charAt(alph)) {
                countedAlphet = countedAlphet + x.charAt(xi);
            }
        }
        for (var spc = 0; spc < alphabets.length; spc++) {
            if (x.charAt(xi) === spacialChars.charAt(spc)) {
                countedSpacialChar = countedSpacialChar + x.charAt(xi);
            }
        }
    }
    console.log("Input String = ".concat(x));
    console.log("Total Numbers ".concat(countedNumber, " = ").concat(countedNumber.length));
    console.log("Total Alphabets ".concat(countedAlphet, " = ").concat(countedAlphet.length));
    console.log("Total Spacial Char ".concat(countedSpacialChar, " = ").concat(countedSpacialChar.length));
}
console.log("\n--------------------\n   Problem No. 08\n--------------------");
fTotalChar('hgj876806525/)(65**GKGK JG');
/* ---------------------------------------------*/
/* 9. Write a ts program to count total number of vowels and consonants in a string.*/
/* ---------------------------------------------*/
function toVowelConstant(x) {
    var vowel = "eaiouAEIOU";
    var consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    var countedVowel = '';
    var countedConstant = '';
    for (var xi = 0; xi < x.length; xi++) {
        for (var vow = 0; vow < vowel.length; vow++) {
            if (x.charAt(xi) === vowel.charAt(vow)) {
                countedVowel = countedVowel + x.charAt(xi);
            }
        }
        for (var con = 0; con < consonant.length; con++) {
            if (x.charAt(xi) === consonant.charAt(con)) {
                countedConstant = countedConstant + x.charAt(xi);
            }
        }
    }
    console.log("Input String = ".concat(x));
    console.log("Total Vowels ".concat(countedVowel, " = ").concat(countedVowel.length));
    console.log("Total Constants ".concat(countedConstant, " = ").concat(countedConstant.length));
}
console.log("\n--------------------\n   Problem No. 09\n--------------------");
toVowelConstant('GhYIKbgFDeiouCfR');
/* ---------------------------------------------*/
/* 10. Write a ts program to count total number of words in a string.*/
/* ---------------------------------------------*/
function toNumOfWords(w) {
    var splited = w.split(" ");
    var countedWords = splited.length;
    console.log("String = ".concat(w));
    console.log("Total words in String = ".concat(countedWords));
}
console.log("\n--------------------\n   Problem No. 10\n--------------------");
toNumOfWords('My name is Mubeen Yasin');
/* ---------------------------------------------*/
/* 11. Write a ts program to find reverse of a string.*/
/* ---------------------------------------------*/
function findReverseChar(x) {
    var splited = x.split('');
    var reversed = splited.reverse();
    var joined = reversed.join('');
    // console.log(reversed)
    // console.log(joined)
    console.log("String = ".concat(x));
    console.log("Reverse words in String = ".concat(joined));
}
console.log("\n--------------------\n   Problem No. 11\n--------------------");
findReverseChar('madam');
/* ---------------------------------------------*/
/* 12. Write a ts program to check whether a string is palindrome or not.*/
/* ---------------------------------------------*/
function isPalindrom(x) {
    var splited = x.split('');
    var reversed = splited.reverse();
    var joined = reversed.join('');
    if (x === joined) {
        console.log("The String ( ".concat(x, " ) is \"PALINDROME\""));
    }
    else {
        console.log("The String ( ".concat(x, " ) is \" NOT PALINDROME\""));
    }
}
console.log("\n--------------------\n   Problem No. 12\n--------------------");
isPalindrom('abcdcba');
/* ---------------------------------------------*/
/* 13. Write a ts program to reverse order of words in a given string*/
/* ---------------------------------------------*/
function findReverse(x) {
    var splited = x.split(' ');
    var reversed = splited.reverse();
    var joined = reversed.join(' ');
    // console.log(reversed)
    // console.log(joined)
    console.log("String = ".concat(x));
    console.log("Reverse words in String = ".concat(joined));
}
console.log("\n--------------------\n   Problem No. 13\n--------------------");
findReverse('My name is Mubeen Yasin');
/* ---------------------------------------------*/
/* 14. Write a ts program to find first occurrence of a character in a given string.*/
/* ---------------------------------------------*/
function whatFirstOccur(x, y) {
    var occurrence = x.indexOf(y);
    console.log("First Occurance of (".concat(y, ") in string (").concat(x, ") = ").concat(occurrence));
}
console.log("\n--------------------\n   Problem No. 14\n--------------------");
whatFirstOccur('Mubeen Ameen', 'e');
/* ---------------------------------------------*/
/* 15. Write a ts program to find last occurrence of a character in a given string.*/
/* ---------------------------------------------*/
function whatLasttOccur(x, y) {
    var occurrence = x.lastIndexOf(y);
    console.log("First Occurance of (".concat(y, ") in string (").concat(x, ") = ").concat(occurrence));
}
console.log("\n--------------------\n   Problem No. 15\n--------------------");
whatLasttOccur('Mubeen Ameen', 'e');
/* ---------------------------------------------*/
/* 16. Write a ts program to search all occurrences of a character in given string.*/
/* ---------------------------------------------*/
function allOccur(x, y) {
    var toOccurrance = 0;
    var num = 1;
    for (var i = 0; i < x.length; i++) {
        if (x.charAt(i) === y) {
            var occur = i;
            console.log("".concat(num, " Occurance of (").concat(y, ") in \"").concat(x, "\" at Index = ").concat(occur));
            toOccurrance++;
            num++;
        }
    }
    // console.log(`Total Occurrance of "${y}" = ${toOccurrance}`)
}
console.log("\n--------------------\n   Problem No. 16\n--------------------");
allOccur('Mubeen Ameen', 'n');
/* ---------------------------------------------*/
/* 17. Write a ts program to count occurrences of a character in given string.*/
/* ---------------------------------------------*/
function countOccur(x, y) {
    var lcString = x.toLowerCase();
    var toOccurrance = 0;
    for (var i = 0; i < lcString.length; i++) {
        if (lcString.charAt(i) === y) {
            toOccurrance++;
        }
    }
    console.log("Total Occurrance of \"".concat(y, "\" in \"").concat(lcString, "\"= ").concat(toOccurrance));
}
console.log("\n--------------------\n   Problem No. 17\n--------------------");
countOccur('Mubeen Ameen E', 'e');
/* ---------------------------------------------*/
/* 18. Write a ts program to find highest frequency character in a string.*/
/* ---------------------------------------------*/
function highestFreqChar(x) {
    var lcString = x.toLowerCase();
    var newObject = {};
    //newObject[x] = 5 // add property in object
    for (var xi = 0; xi < lcString.length; xi++) {
        var char = lcString[xi];
        if (newObject[char] === undefined) {
            newObject[char] = 1;
            // console.log(newObject)
        }
        else {
            newObject[char]++;
        }
    }
    var counter = 0;
    var maxChar = '';
    for (var key in newObject) {
        // console.log(newObject[key])
        if (newObject[key] > counter) {
            counter = newObject[key];
            maxChar = key;
        }
    }
    // console.log(newObject)
    // console.log(counter)
    console.log("The String = ".concat(lcString, "\nHighest Frequency Character = ").concat(maxChar, "  ").concat(counter, "-time"));
}
console.log("\n--------------------\n   Problem No. 18\n--------------------");
highestFreqChar('I am Mubeen Yaseen');
/* ---------------------------------------------*/
/* 19. Write a ts program to find lowest frequency character in a string.*/
/* ---------------------------------------------*/
function lowestFreqChar(x) {
    var lcString = x.toLowerCase();
    var newObject = {};
    //newObject[x] = 5 // add property in object
    for (var xi = 0; xi < lcString.length; xi++) {
        var char = lcString[xi];
        if (newObject[char] === undefined) {
            newObject[char] = 1;
            // console.log(newObject)
        }
        else {
            newObject[char]++;
        }
    }
    var counter = lcString.length;
    var minChar = '';
    var listMinChar = '';
    for (var key in newObject) {
        // console.log(newObject[key])
        if (newObject[key] < counter) {
            counter = newObject[key];
            minChar = key;
        }
    }
    for (var sameKey in newObject) {
        if (newObject[sameKey] == 1) {
            listMinChar += sameKey;
        }
    }
    console.log(listMinChar);
    // console.log(newObject)
    // console.log(counter)
    console.log("The String = ".concat(lcString, "\nLowest Frequency Characters = ").concat(listMinChar.split(''), "  ").concat(counter, "-time"));
}
console.log("\n--------------------\n   Problem No. 19\n--------------------");
lowestFreqChar('I am Mubeen Yaseen');
/* ---------------------------------------------*/
/* 20. Write a ts program to count frequency of each character in a string.*/
/* ---------------------------------------------*/
function eachFrequency(x) {
    var xToLowerCase = x.toLowerCase();
    var xObjet = {};
    for (var xi = 0; xi < x.length; xi++) {
        var char = xToLowerCase[xi];
        if (xObjet[char] == undefined) {
            xObjet[char] = 1;
        }
        else {
            xObjet[char]++;
        }
    }
    console.log("The String = ".concat(x));
    for (var key in xObjet) {
        console.log("Frequency of \"".concat(key, "\" = ").concat(xObjet[key]));
    }
}
console.log("\n--------------------\n   Problem No. 20\n--------------------");
eachFrequency('Muhammad');
/* ---------------------------------------------*/
/* 21. Write a ts program to remove first occurrence of a character from string.*/
/* ---------------------------------------------*/
function remove1stOccur(x, y) {
    // let firstOccur:number = x.indexOf(y)
    var newString = x.replace(y, ''); //Replace a Charactor or word with blank quoats
    console.log("Original String = ".concat(x, "\nRemove First Occurrance of \"").concat(y, "\" = ").concat(newString));
}
console.log("\n--------------------\n   Problem No. 21\n--------------------");
remove1stOccur('e Mubeen Yasin', 'e');
/* ---------------------------------------------*/
/* 22. Write a ts program to remove last occurrence of a character from string.*/
/* ---------------------------------------------*/
function removeLastOccur(x, y) {
    var newArray = x.split(''); // Convert original string into Array
    var lastOccur = x.lastIndexOf(y); // find last occurrance of the charactor
    var removeChar = newArray.splice(lastOccur, 1); //Delet last occurrance of the charactor
    var finalString = newArray.join(''); //Convert the Array back to string
    // console.log(lastOccur)
    // console.log(x[lastOccur])
    // console.log(`New Array = ${newArray}`)
    console.log("Original String = ".concat(x, "\nRemove Last Occurrance of \"").concat(y, "\" = ").concat(finalString));
}
console.log("\n--------------------\n   Problem No. 22\n--------------------");
removeLastOccur('Mubeen Yasin n', 'n');
// /* ---------------------------------------------*/
// /* 23. Write a ts program to remove all occurrences of a character from string.*/
// /* ---------------------------------------------*/
function removeAllOccur(x, y) {
    var newStr = "";
    for (var xi = 0; xi < x.length; xi++) {
        if (x[xi] === y) {
            var replaceChar = x[xi].replace(y, "");
            newStr = newStr + replaceChar;
        }
        else {
            newStr = newStr + x[xi];
        }
    }
    console.log("Original String = ".concat(x, "\nRemove all occurrance of char \"").concat(y, "\" = ").concat(newStr));
}
console.log("\n--------------------\n   Problem No. 23\n--------------------");
removeAllOccur('Mubeen Yasinn', 'n');
/* ---------------------------------------------*/
/* 24. Write a ts program to remove all repeated characters from a given string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 25. Write a ts program to replace first occurrence of a character with another in a string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 26. Write a ts program to replace last occurrence of a character with another in a string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 27. Write a ts program to replace all occurrences of a character with another in a string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 28. Write a ts program to find first occurrence of a word in a given string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 29. Write a ts program to find last occurrence of a word in a given string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 30. Write a ts program to search all occurrences of a word in given string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 31. Write a ts program to count occurrences of a word in a given string.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 32. Write a ts program to remove first occurrence of a word from string.*/
/* ---------------------------------------------*/
function removeFirstWord(x) {
    var splitedArray = x.split(" ");
    splitedArray.splice(0, 1);
    var finalString = splitedArray.join(' ');
    // console.log(`splited Array = ${splitedArray}`)
    console.log("Original String        = ".concat(x, "\nRemoved 1st Occurrance = ").concat(finalString));
}
console.log("\n--------------------\n   Problem No. 32\n--------------------");
removeFirstWord('Always be humble and postive mnm');
/* ---------------------------------------------*/
/* 33. Write a ts program to remove last occurrence of a word in given string.*/
/* ---------------------------------------------*/
function removeLastWord(x) {
    var splitedArray = x.split(" ");
    splitedArray.splice(-1, 1);
    var finalString = splitedArray.join(' ');
    // console.log(`splited Array = ${splitedArray}`)
    console.log("Original String         = ".concat(x, "\nRemoved Last Occurrance = ").concat(finalString));
}
console.log("\n--------------------\n   Problem No. 33\n--------------------");
removeLastWord('Always be humble and postive');
/* ---------------------------------------------*/
/* 34. Write a ts program to remove all occurrence of a word in given string.*/
/* ---------------------------------------------*/
function removeAllOccurWord(x, y) {
    /*-------Solved by self Logics------ */
    var splitedArray = x.split(" ");
    // console.log(splitedArray)
    for (var xi = 0; xi < splitedArray.length; xi++) {
        if (splitedArray[xi] === y) {
            splitedArray.splice(xi, 1);
        }
    }
    var finalString = splitedArray.join(' ');
    // console.log(splitedArray)
    console.log("Original String         = ".concat(x, "\nRemove Occurrance \"").concat(y, "\" = ").concat(finalString));
    // console.log(`String = ${x}`)
    /*-------Solved by built in methoods RegExp() and replace()------ */
    // let re = RegExp(`\\b${y}\\b`, 'gi') // `\\b${y}\\b` stor input in varabel, g for all match, i for case sensitive
    // let removeOccurance:string = x.replace(re, "")
    // console.log(`result = ${removeOccurance}`)
}
console.log("\n--------------------\n   Problem No. 34\n--------------------");
removeAllOccurWord('and Always be humble and postive and', 'and');
/* ---------------------------------------------*/
/* 35. Write a ts program to trim leading white space characters from given string.*/
/* ---------------------------------------------*/
function trimLeadingSpace(x) {
    var trimLeadingString = x.replace(/\s+$/g, ' ');
    console.log("Original String     = **".concat(x, "**\nTrim Leading Space = **").concat(trimLeadingString, "**"));
}
console.log("\n--------------------\n   Problem No. 35\n--------------------");
trimLeadingSpace('           Always be humble and postive       ');
/* ---------------------------------------------*/
/* 36. Write a ts program to trim trailing white space characters from given string.*/
/* ---------------------------------------------*/
/*

The regular expression used is /^\s+|\s+$/g

/ and / mark the beginning and end of the pattern
^\s+ specifies to match one or more spaces at the beginning of the string
| means OR
\s+$ specifies to match one or more spaces at the end of the string
g specifies to replace all occurrences.

*/
function trimTrailingSpace(x) {
    var trimTrailingString = x.replace(/^\s+/g, ' ');
    console.log("Original String     = **".concat(x, "**\nTrim Trailing Space = **").concat(trimTrailingString, "**"));
}
console.log("\n--------------------\n   Problem No. 36\n--------------------");
trimTrailingSpace('           Always be humble and postive       ');
/* ---------------------------------------------*/
/* 37. Write a ts program to trim both leading and trailing white space characters from given string.*/
/* ---------------------------------------------*/
function trimBothSide(x) {
    var leadTrimed = x.trim();
    console.log("Original String      = **".concat(x, "**\nTrim both side Space = **").concat(leadTrimed, "**"));
}
console.log("\n--------------------\n   Problem No. 37\n--------------------");
trimBothSide('           Always be humble and postive       ');
/* ---------------------------------------------*/
/* 38. Write a ts program to remove all extra blank spaces from given string.*/
/* ---------------------------------------------*/
function removeExtraSpace(x) {
    var finalString = x.replace(/\s+/g, ' ');
    /*
    \s: matches any whitespace symbol: spaces, tabs, and line breaks
     +: match one or more of the preceding tokens(referencing \s)
    g: the g at the end indicates iterative searching throughout the full string
    */
    console.log("Original String    = ".concat(x, "\nRemove Extra Space = ").concat(finalString));
}
console.log("\n--------------------\n   Problem No. 38\n--------------------");
removeExtraSpace('Mubeen     Yasin   m      b');
/* ---------------------------------------------*/
/*--------- conditional operators programming exercises--------- */
/* ---------------------------------------------*/
/* 39. Write a ts program to find maximum between two numbers using conditional operator. */
function maxNumBt2Num(a, b) {
    console.log("".concat(a, " and ").concat(b));
    if (a > b) {
        console.log("".concat(a, " is greater than ").concat(b));
    }
    else {
        console.log("".concat(b, " is greater than ").concat(a));
    }
}
console.log("\n--------------------\n   Problem No. 39\n--------------------\nMaximum between two numbers");
maxNumBt2Num(45, 50);
/* 40. Write a ts program to find maximum between three numbers using conditional operator. */
function maxNumBt3Num(a, b, c) {
    console.log("".concat(a, " , ").concat(b, " and ").concat(c));
    if (a != b && a != c && b != c) {
        if (a > b && a > c) {
            console.log("".concat(a, " is greater than ").concat(b, " and ").concat(c));
        }
        else if (b > a && b > c) {
            console.log("".concat(b, " is greater than ").concat(a, " and ").concat(c));
        }
        else {
            console.log("".concat(c, " is greater than ").concat(a, " and ").concat(b));
        }
    }
    else {
        console.log("Three Numbers should be diffrent to each other to run program");
    }
}
console.log("\n--------------------\n   Problem No. 40\n--------------------\nMaximum between three numbers");
maxNumBt3Num(81, 80, 60);
/* 41. Write a ts program to check whether a number is even or odd using conditional operator. */
function isEvenOdd(e) {
    if (e % 2 == 0) {
        console.log("The Number \"".concat(e, "\" is \"EVEN\""));
    }
    else {
        console.log("The Number \"".concat(e, "\" is \"ODD\""));
    }
}
console.log("\n--------------------\n   Problem No. 41\n--------------------\nNumber is Even or Odd");
isEvenOdd(45);
/* 42. Write a ts program to check whether year is leap year or not using conditional operator.*/
function isLeapYear(e) {
    if (e % 4 == 0) {
        console.log("The Year \"".concat(e, "\" is \"LEAP YEAR\""));
    }
    else {
        console.log("The Number \"".concat(e, "\" is \"NOT LEAP YEAR\""));
    }
}
console.log("\n--------------------\n   Problem No. 42\n--------------------\nYear is Leap or not");
isLeapYear(2024);
/* 43. Write a ts program to check whether character is an alphabet or not using conditional operator. */
// 0-9 = 48-57
// A-Z = 65-90
// a-z = 97-122
function isAlphabet(x) {
    var xToASCII = x.charCodeAt(0); //Convert string into ASCII code
    console.log(xToASCII);
    if ((xToASCII >= 65 && xToASCII <= 90) || (xToASCII >= 97 && xToASCII <= 122)) {
        console.log("The Charctor \"".concat(x, "\" is \"ALPHABET\""));
    }
    else {
        console.log("The Charctor \"".concat(x, "\" is \"NOT ALPHABET\""));
    }
}
console.log("\n--------------------\n   Problem No. 43\n--------------------\ncharacter is an alphabet or not");
isAlphabet('R');
/*---------List of switch case programming exercises ---------*/
/* 44. Write a ts program to print day of week name using switch case. */
function whatDay(day) {
    if (day >= 1 && day <= 7) {
        switch (day) {
            case 1:
                console.log("The Day is \"Saturday\"");
                break;
            case 2:
                console.log("The Day is \"Sunday\"");
                break;
            case 3:
                console.log("The Day is \"Monday\"");
                break;
            case 4:
                console.log("The Day is \"Tuesday\"");
                break;
            case 5:
                console.log("The Day is \"Wednesday\"");
                break;
            case 6:
                console.log("The Day is \"Thersday\"");
                break;
            case 7:
                console.log("The Day is \"Fridady\"");
                break;
        }
    }
}
console.log("\n--------------------\n   Problem No. 44\n--------------------\nDay of the week");
whatDay(5);
/* 45. Write a ts program print total number of days in a month using switch case. */
function whatMonth(x) {
    switch (x) {
        case 1:
            console.log("The Month is JANUARY and it has 31 days");
            break;
        case 2:
            console.log("The Month is FEBRUARY and it has 28 days");
            break;
        case 3:
            console.log("The Month is MARCH and it has 31 days");
            break;
        case 4:
            console.log("The Month is APRIL and it has 30 days");
            break;
        case 5:
            console.log("The Month is MAY and it has 31 days");
            break;
        case 6:
            console.log("The Month is JUN and it has 30 days");
            break;
        case 7:
            console.log("The Month is JULY and it has 31 days");
            break;
        case 8:
            console.log("The Month is AUGUST and it has 31 days");
            break;
        case 9:
            console.log("The Month is SEPTEMBER and it has 30 days");
            break;
        case 10:
            console.log("The Month is OCTOBER and it has 31 days");
            break;
        case 11:
            console.log("The Month is NOVEMBER and it has 30 days");
            break;
        case 12:
            console.log("The Month is DECEMBER and it has 31 days");
            break;
        default: console.log("The Month Values are 1 to 12");
    }
}
console.log("\n--------------------\n    Problem No. 45\n--------------------\nTotal number of days in a month");
whatMonth(2);
/* 46. Write a ts program to check whether an alphabet is vowel or consonant using switch case. */
function isVowel(x) {
    var y = x.toLowerCase();
    var charLen = y.length;
    // console.log('Charactor Lenth', charLen);
    if (charLen == 1) {
        switch (y) {
            case "a":
                console.log("The Charactor ".concat(x, " is \"VOWEL\""));
                break;
            case "e":
                console.log("The Charactor ".concat(x, " is \"VOWEL\""));
                break;
            case "i":
                console.log("The Charactor ".concat(x, " is \"VOWEL\""));
                break;
            case "o":
                console.log("The Charactor ".concat(x, " is \"VOWEL\""));
                break;
            case "u":
                console.log("The Charactor ".concat(x, " is \"VOWEL\""));
                break;
            default: console.log("The Charactor ".concat(x, " is \"CONSTANT\""));
        }
    }
    else {
        console.log('Please Write only one Charactor');
    }
}
console.log("\n--------------------\n    Problem No. 46\n--------------------\nAlphabet is vowel or consonant");
isVowel('O');
/* 47. Write a ts program to find maximum between two numbers using switch case. */
function maxNumBT2Switch(x, y) {
    var g = x > y;
    var l = x < y;
    switch (x > y) {
        case true:
            console.log("The Number \"".concat(x, "\" Greater than \"").concat(y, "\""));
            break;
        case false:
            console.log("The Number \"".concat(y, "\" Greater than \"").concat(x, "\""));
            break;
        default: console.log("Both Numbers are EQUAL");
    }
}
console.log("\n--------------------\n    Problem No. 47\n--------------------\nMaximum between two numbers using switch");
maxNumBT2Switch(5, 4);
/* 48. Write a ts program to check whether a number is even or odd using switch case. */
function isOddEven(x) {
    var y = x % 2;
    switch (y) {
        case 0:
            console.log("The Number \"".concat(x, "\" is \"EVEN\""));
            break;
        default: console.log("The Number \"".concat(x, "\" is \"ODD\""));
    }
}
console.log("\n--------------------\n    Problem No. 48\n--------------------\nNumber is even or odd using switch case");
isOddEven(5);
/* 49. Write a ts program to check whether a number is positive, negative or zero using switch case. */
function whatNum(x) {
    if (x != 0) {
        switch (x > 0) {
            case true:
                console.log("The Number (".concat(x, ") is \"POSTIVE\""));
                break;
            case false:
                console.log("The Number (".concat(x, ") is \"NEGATIVE\""));
                break;
        }
    }
    else {
        console.log("The Number (".concat(x, ") is \"ZERO\""));
    }
}
console.log("\n--------------------\n    Problem No. 49\n--------------------\nNumber is even or odd using switch case");
whatNum(0);
/* 50. Write a ts program to find roots of a quadratic equation using switch case. */
console.log("\n--------------------\n    Problem No. 50\n--------------------\nNot Solved");
/* 51. Write a ts program to create Simple Calculator using switch case. */
function Calculate(x, y, z) {
    switch (z) {
        case "+":
            console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
            break;
        case "-":
            console.log("".concat(x, " - ").concat(y, " = ").concat(x - y));
            break;
        case "*":
            console.log("".concat(x, " x ").concat(y, " = ").concat(x * y));
            break;
        case "/":
            console.log("".concat(x, " / ").concat(y, " = ").concat(x / y));
            break;
    }
}
console.log("\n--------------------\n    Problem No. 51\n--------------------\nSimple Calculator using switch case");
Calculate(10, 20, '*');
