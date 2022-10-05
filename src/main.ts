/* --------------------String Exercise-------------------------*/
/* 1. Write a ts program to find length of a string.*/
/* ------------------------------------------------------------*/

function stringLength(sl: string) {
    return (
        sl.length
    )
}
console.log(`--------------------
   Problem No. 01
--------------------`)
console.log(`String Length  = ${stringLength('I Love Pakistan')}`)

/* ---------------------------------------------*/
/* 2. Write a ts program to copy one string to another string.*/
/* ---------------------------------------------*/

function copyString(str1: string): string {
    let copyString: string = str1
    return (
        copyString
    )
}
console.log(`
--------------------
   Problem No. 02
--------------------`)
console.log(`Copied String  = ${copyString('I Love Muhammad')}`)

/* ---------------------------------------------*/
/* 3. Write a ts program to concatenate two strings.*/
/* ---------------------------------------------*/

function concatString(str1: string, str2: string): string {
    let concatedString: string = str1.concat(str2)
    return (
        concatedString
    )
}
console.log(`
--------------------
   Problem No. 03
--------------------`)
console.log(`concated String  = ${concatString('I Love Muhammad, ', 'ALLHAMDU LILLAH I follow him')}`)

/* ---------------------------------------------*/
/* 4. Write a ts program to compare two strings.*/
/* ---------------------------------------------*/
function compareString(cmpS1: string, cmpS2: string) {
    let compare: number = cmpS1.localeCompare(cmpS2)
    return compare
}
console.log(`
--------------------
   Problem No. 04
--------------------`)
console.log(`compared String Retun  = ${compareString('I Love Muhammad', 'I Love Muhammad')}`)

/* ---------------------------------------------*/
/* 5. Write a ts program to convert lowercase string to uppercase.*/
/* ---------------------------------------------*/
function toUpper(tu: string): string {
    let upperCaseed: string = tu.toUpperCase()
    return (
        upperCaseed
    )
}
console.log(`
--------------------
   Problem No. 05
--------------------`)
console.log(`Upper Cased String  = ${toUpper('I Love Muhammad')}`)

/* ---------------------------------------------*/
/* 6. Write a ts program to convert uppercase string to lowercase.*/
/* ---------------------------------------------*/
function toLower(tu: string): string {
    let loweredCaseed: string = tu.toLowerCase()
    return (
        loweredCaseed
    )
}
console.log(`
--------------------
   Problem No. 06
--------------------`)
console.log(`Lower Caseed String  = ${toLower('I LOVE MUHAMMAD')}`)

/* ---------------------------------------------*/
/* 7. Write a ts program to toggle case of each character of a string.*/
/* ---------------------------------------------*/



function toggleCase(tl: string) {
    let t: string = ''

    for (let tli: number = 0; tli < tl.length; tli++) {

        let x: string = tl.charAt(tli)
        let y: string = tl.charAt(tli).toUpperCase()

        if (x === y) {
            t = t + x.toLowerCase()
        }
        else {
            t = t + x.toUpperCase()
        }

    }
    console.log(`String ${tl} after Toggled = ${t}`)
}

console.log(`
--------------------
   Problem No. 07
--------------------`)
toggleCase(' aBcDeF')

/* ---------------------------------------------*/
/* 8. Write a ts program to find total number of alphabets, digits or special character in a string.*/
/* ---------------------------------------------*/

function fTotalChar(x: string) {
    let numbers: string = '1234567890'
    let alphabets: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let spacialChars: string = "~!@#$%^&_=+-*\|()[]{ }/?.,<>"

    let countedNumber: string = ''
    let countedAlphet: string = ''
    let countedSpacialChar: string = ''

    for (let xi = 0; xi < x.length; xi++) {
        for (let numi = 0; numi < numbers.length; numi++) {
            if (x.charAt(xi) === numbers.charAt(numi)) {
                countedNumber = countedNumber + x.charAt(xi)
            }
        }

        for (let alph = 0; alph < alphabets.length; alph++) {
            if (x.charAt(xi) === alphabets.charAt(alph)) {
                countedAlphet = countedAlphet + x.charAt(xi)
            }
        }

        for (let spc = 0; spc < alphabets.length; spc++) {
            if (x.charAt(xi) === spacialChars.charAt(spc)) {
                countedSpacialChar = countedSpacialChar + x.charAt(xi)
            }
        }
    }

    console.log(`Input String = ${x}`)
    console.log(`Total Numbers ${countedNumber} = ${countedNumber.length}`)
    console.log(`Total Alphabets ${countedAlphet} = ${countedAlphet.length}`)
    console.log(`Total Spacial Char ${countedSpacialChar} = ${countedSpacialChar.length}`)
}

console.log(`
--------------------
   Problem No. 08
--------------------`)
fTotalChar('hgj876806525/)(65**GKGK JG')

/* ---------------------------------------------*/
/* 9. Write a ts program to count total number of vowels and consonants in a string.*/
/* ---------------------------------------------*/

function toVowelConstant(x: string) {
    let vowel: string = "eaiouAEIOU"
    let consonant: string = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let countedVowel: string = ''
    let countedConstant: string = ''

    for (let xi = 0; xi < x.length; xi++) {
        for (let vow = 0; vow < vowel.length; vow++) {
            if (x.charAt(xi) === vowel.charAt(vow)) {
                countedVowel = countedVowel + x.charAt(xi)
            }
        }

        for (let con = 0; con < consonant.length; con++) {
            if (x.charAt(xi) === consonant.charAt(con)) {
                countedConstant = countedConstant + x.charAt(xi)
            }
        }
    }

    console.log(`Input String = ${x}`)
    console.log(`Total Vowels ${countedVowel} = ${countedVowel.length}`)
    console.log(`Total Constants ${countedConstant} = ${countedConstant.length}`)
}

console.log(`
--------------------
   Problem No. 09
--------------------`)
toVowelConstant('GhYIKbgFDeiouCfR')

/* ---------------------------------------------*/
/* 10. Write a ts program to count total number of words in a string.*/
/* ---------------------------------------------*/

function toNumOfWords(w: string) {
    let splited: string[] = w.split(" ")
    let countedWords: number = splited.length

    console.log(`String = ${w}`)
    console.log(`Total words in String = ${countedWords}`)

}
console.log(`
--------------------
   Problem No. 10
--------------------`)
toNumOfWords('My name is Mubeen Yasin')
/* ---------------------------------------------*/
/* 11. Write a ts program to find reverse of a string.*/
/* ---------------------------------------------*/

function findReverseChar(x: string) {
    let splited: string[] = x.split('')
    let reversed: string[] = splited.reverse()
    let joined: string = reversed.join('')

    // console.log(reversed)
    // console.log(joined)
    console.log(`String = ${x}`)
    console.log(`Reverse words in String = ${joined}`)
}
console.log(`
--------------------
   Problem No. 11
--------------------`)
findReverseChar('madam')
/* ---------------------------------------------*/
/* 12. Write a ts program to check whether a string is palindrome or not.*/
/* ---------------------------------------------*/
function isPalindrom(x: string) {
    let splited: string[] = x.split('')
    let reversed: string[] = splited.reverse()
    let joined: string = reversed.join('')

    if (x === joined) {
        console.log(`The String ( ${x} ) is "PALINDROME"`)
    }
    else {
        console.log(`The String ( ${x} ) is " NOT PALINDROME"`)
    }
}
console.log(`
--------------------
   Problem No. 12
--------------------`)
isPalindrom('abcdcba')

/* ---------------------------------------------*/
/* 13. Write a ts program to reverse order of words in a given string*/
/* ---------------------------------------------*/
function findReverse(x: string) {
    let splited: string[] = x.split(' ')
    let reversed: string[] = splited.reverse()
    let joined: string = reversed.join(' ')

    // console.log(reversed)
    // console.log(joined)
    console.log(`String = ${x}`)
    console.log(`Reverse words in String = ${joined}`)
}
console.log(`
--------------------
   Problem No. 13
--------------------`)
findReverse('My name is Mubeen Yasin')

/* ---------------------------------------------*/
/* 14. Write a ts program to find first occurrence of a character in a given string.*/
/* ---------------------------------------------*/
function whatFirstOccur(x: string, y: string) {
    let occurrence: number = x.indexOf(y)

    console.log(`First Occurance of (${y}) in string (${x}) = ${occurrence}`)
}

console.log(`
--------------------
   Problem No. 14
--------------------`)
whatFirstOccur('Mubeen Ameen', 'e')
/* ---------------------------------------------*/
/* 15. Write a ts program to find last occurrence of a character in a given string.*/
/* ---------------------------------------------*/
function whatLasttOccur(x: string, y: string) {
    let occurrence: number = x.lastIndexOf(y)

    console.log(`First Occurance of (${y}) in string (${x}) = ${occurrence}`)
}

console.log(`
--------------------
   Problem No. 15
--------------------`)
whatLasttOccur('Mubeen Ameen', 'e')

/* ---------------------------------------------*/
/* 16. Write a ts program to search all occurrences of a character in given string.*/
/* ---------------------------------------------*/

function allOccur(x: string, y: string) {
    let toOccurrance: number = 0
    var num: number = 1

    for (var i = 0; i < x.length; i++) {
        if (x.charAt(i) === y) {
            var occur: number = i
            console.log(`${num} Occurance of (${y}) in "${x}" at Index = ${occur}`)
            toOccurrance++
            num++
        }
    }
    // console.log(`Total Occurrance of "${y}" = ${toOccurrance}`)
}
console.log(`
--------------------
   Problem No. 16
--------------------`)
allOccur('Mubeen Ameen', 'n')

/* ---------------------------------------------*/
/* 17. Write a ts program to count occurrences of a character in given string.*/
/* ---------------------------------------------*/
function countOccur(x: string, y: string) {
    let lcString: string = x.toLowerCase()
    let toOccurrance: number = 0

    for (var i = 0; i < lcString.length; i++) {
        if (lcString.charAt(i) === y) {
            toOccurrance++
        }
    }
    console.log(`Total Occurrance of "${y}" in "${lcString}"= ${toOccurrance}`)
}
console.log(`
--------------------
   Problem No. 17
--------------------`)
countOccur('Mubeen Ameen E', 'e')

/* ---------------------------------------------*/
/* 18. Write a ts program to find highest frequency character in a string.*/
/* ---------------------------------------------*/
function highestFreqChar(x: string) {
    let lcString: string = x.toLowerCase()
    let newObject = {}
    //newObject[x] = 5 // add property in object

    for (let xi: number = 0; xi < lcString.length; xi++) {
        let char: string = lcString[xi]
        if (newObject[char] === undefined) {
            newObject[char] = 1

            // console.log(newObject)
        }
        else {
            newObject[char]++
        }
    }

    let counter: number = 0
    let maxChar: string = ''

    for (let key in newObject) {
        // console.log(newObject[key])

        if (newObject[key] > counter) {
            counter = newObject[key]
            maxChar = key
        }
    }

    // console.log(newObject)
    // console.log(counter)
    console.log(`The String = ${lcString}
Highest Frequency Character = ${maxChar}  ${counter}-time`)
}
console.log(`
--------------------
   Problem No. 18
--------------------`)
highestFreqChar('I am Mubeen Yaseen')
/* ---------------------------------------------*/
/* 19. Write a ts program to find lowest frequency character in a string.*/
/* ---------------------------------------------*/
function lowestFreqChar(x: string) {
    let lcString: string = x.toLowerCase()
    let newObject = {}
    //newObject[x] = 5 // add property in object

    for (let xi: number = 0; xi < lcString.length; xi++) {
        let char: string = lcString[xi]
        if (newObject[char] === undefined) {
            newObject[char] = 1

            // console.log(newObject)
        }
        else {
            newObject[char]++
        }
    }

    let counter: number = lcString.length
    let minChar: string = ''
    let listMinChar: string = ''

    for (let key in newObject) {
        // console.log(newObject[key])

        if (newObject[key] < counter) {
            counter = newObject[key]
            minChar = key
        }
    }

    for (let sameKey in newObject) {
        if (newObject[sameKey] == 1) {
            listMinChar += sameKey
        }
    }
    console.log(listMinChar)
    // console.log(newObject)
    // console.log(counter)
    console.log(`The String = ${lcString}
Lowest Frequency Characters = ${listMinChar.split('')}  ${counter}-time`)
}
console.log(`
--------------------
   Problem No. 19
--------------------`)
lowestFreqChar('I am Mubeen Yaseen')
/* ---------------------------------------------*/
/* 20. Write a ts program to count frequency of each character in a string.*/
/* ---------------------------------------------*/
function eachFrequency(x: string) {
    let xToLowerCase: string = x.toLowerCase()
    let xObjet = {}

    for (let xi: number = 0; xi < x.length; xi++) {
        let char: string = xToLowerCase[xi]
        if (xObjet[char] == undefined) {
            xObjet[char] = 1
        }
        else {
            xObjet[char]++
        }
    }

    console.log(`The String = ${x}`)
    for (let key in xObjet) {
        console.log(`Frequency of "${key}" = ${xObjet[key]}`)
    }
}
console.log(`
--------------------
   Problem No. 20
--------------------`)
eachFrequency('Muhammad')

/* ---------------------------------------------*/
/* 21. Write a ts program to remove first occurrence of a character from string.*/
/* ---------------------------------------------*/
function remove1stOccur(x: string, y: string) {
    // let firstOccur:number = x.indexOf(y)
    let newString: string = x.replace(y, '') //Replace a Charactor or word with blank quoats

    console.log(`Original String = ${x}
Remove First Occurrance of "${y}" = ${newString}`)
}

console.log(`
--------------------
   Problem No. 21
--------------------`)
remove1stOccur('e Mubeen Yasin', 'e')
/* ---------------------------------------------*/
/* 22. Write a ts program to remove last occurrence of a character from string.*/
/* ---------------------------------------------*/
function removeLastOccur(x: string, y: string) {
    let newArray: string[] = x.split('') // Convert original string into Array
    let lastOccur: number = x.lastIndexOf(y)    // find last occurrance of the charactor
    let removeChar: string[] = newArray.splice(lastOccur, 1) //Delet last occurrance of the charactor
    let finalString: string = newArray.join('')  //Convert the Array back to string

    // console.log(lastOccur)
    // console.log(x[lastOccur])
    // console.log(`New Array = ${newArray}`)
    console.log(`Original String = ${x}
Remove Last Occurrance of "${y}" = ${finalString}`)
}
console.log(`
--------------------
   Problem No. 22
--------------------`)
removeLastOccur('Mubeen Yasin n', 'n')

// /* ---------------------------------------------*/
// /* 23. Write a ts program to remove all occurrences of a character from string.*/
// /* ---------------------------------------------*/
function removeAllOccur(x: string, y: string) {
    let newStr: string = ""
    for (let xi: number = 0; xi < x.length; xi++) {
        if (x[xi] === y) {
            let replaceChar: string = x[xi].replace(y, "")
            newStr = newStr + replaceChar
        }
        else {
            newStr = newStr + x[xi]
        }
    }
    console.log(`Original String = ${x}
Remove all occurrance of char "${y}" = ${newStr}`)
}
console.log(`
--------------------
   Problem No. 23
--------------------`)
removeAllOccur('Mubeen Yasinn', 'n')

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
function removeFirstWord(x: string) {
    let splitedArray: string[] = x.split(" ")
    splitedArray.splice(0, 1)
    let finalString: string = splitedArray.join(' ')

    // console.log(`splited Array = ${splitedArray}`)
    console.log(`Original String        = ${x}
Removed 1st Occurrance = ${finalString}`)
}
console.log(`
--------------------
   Problem No. 32
--------------------`)
removeFirstWord('Always be humble and postive mnm')
/* ---------------------------------------------*/
/* 33. Write a ts program to remove last occurrence of a word in given string.*/
/* ---------------------------------------------*/
function removeLastWord(x: string) {
    let splitedArray: string[] = x.split(" ")
    splitedArray.splice(-1, 1)
    let finalString: string = splitedArray.join(' ')

    // console.log(`splited Array = ${splitedArray}`)
    console.log(`Original String         = ${x}
Removed Last Occurrance = ${finalString}`)
}
console.log(`
--------------------
   Problem No. 33
--------------------`)
removeLastWord('Always be humble and postive')

/* ---------------------------------------------*/
/* 34. Write a ts program to remove all occurrence of a word in given string.*/
/* ---------------------------------------------*/
function removeAllOccurWord(x: string, y: string) {
    /*-------Solved by self Logics------ */

    let splitedArray: string[] = x.split(" ")
    // console.log(splitedArray)

    for (let xi: number = 0; xi < splitedArray.length; xi++) {
        if (splitedArray[xi] === y) {

            splitedArray.splice(xi, 1)
        }
    }

    let finalString: string = splitedArray.join(' ')
    // console.log(splitedArray)
    console.log(`Original String         = ${x}
Remove Occurrance "${y}" = ${finalString}`)

    // console.log(`String = ${x}`)

    /*-------Solved by built in methoods RegExp() and replace()------ */

    // let re = RegExp(`\\b${y}\\b`, 'gi') // `\\b${y}\\b` stor input in varabel, g for all match, i for case sensitive
    // let removeOccurance:string = x.replace(re, "")
    // console.log(`result = ${removeOccurance}`)
}
console.log(`
--------------------
   Problem No. 34
--------------------`)
removeAllOccurWord('and Always be humble and postive and', 'and')

/* ---------------------------------------------*/
/* 35. Write a ts program to trim leading white space characters from given string.*/
/* ---------------------------------------------*/
function trimLeadingSpace(x: string) {
    let trimLeadingString: string = x.replace(/\s+$/g, ' ')

    console.log(`Original String     = **${x}**
Trim Leading Space = **${trimLeadingString}**`)
}

console.log(`
--------------------
   Problem No. 35
--------------------`)
trimLeadingSpace('           Always be humble and postive       ')
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

function trimTrailingSpace(x: string) {
    let trimTrailingString: string = x.replace(/^\s+/g, ' ')

    console.log(`Original String     = **${x}**
Trim Trailing Space = **${trimTrailingString}**`)
}

console.log(`
--------------------
   Problem No. 36
--------------------`)
trimTrailingSpace('           Always be humble and postive       ')
/* ---------------------------------------------*/
/* 37. Write a ts program to trim both leading and trailing white space characters from given string.*/
/* ---------------------------------------------*/
function trimBothSide(x: string) {
    let leadTrimed: string = x.trim()

    console.log(`Original String      = **${x}**
Trim both side Space = **${leadTrimed}**`)
}

console.log(`
--------------------
   Problem No. 37
--------------------`)
trimBothSide('           Always be humble and postive       ')
/* ---------------------------------------------*/
/* 38. Write a ts program to remove all extra blank spaces from given string.*/
/* ---------------------------------------------*/
function removeExtraSpace(x: string) {

    let finalString: string = x.replace(/\s+/g, ' ')

    /*
    \s: matches any whitespace symbol: spaces, tabs, and line breaks
     +: match one or more of the preceding tokens(referencing \s)
    g: the g at the end indicates iterative searching throughout the full string
    */

    console.log(`Original String    = ${x}
Remove Extra Space = ${finalString}`)

}

console.log(`
--------------------
   Problem No. 38
--------------------`)
removeExtraSpace('Mubeen     Yasin   m      b')


/* ---------------------------------------------*/
/*--------- conditional operators programming exercises--------- */
/* ---------------------------------------------*/

/* 39. Write a ts program to find maximum between two numbers using conditional operator. */
function maxNumBt2Num(a: number, b: number) {
    console.log(`${a} and ${b}`)
    if (a > b) {
        console.log(`${a} is greater than ${b}`)
    }
    else {
        console.log(`${b} is greater than ${a}`)
    }
}
console.log(`
--------------------
   Problem No. 39
--------------------
Maximum between two numbers`)
maxNumBt2Num(45, 50)

/* 40. Write a ts program to find maximum between three numbers using conditional operator. */

function maxNumBt3Num(a: number, b: number, c: number) {
    console.log(`${a} , ${b} and ${c}`)

    if (a != b && a != c && b != c) {
        if (a > b && a > c) {
            console.log(`${a} is greater than ${b} and ${c}`)
        }
        else if (b > a && b > c) {
            console.log(`${b} is greater than ${a} and ${c}`)
        }
        else {
            console.log(`${c} is greater than ${a} and ${b}`)
        }
    }
    else {
        console.log(`Three Numbers should be diffrent to each other to run program`)
    }
}
console.log(`
--------------------
   Problem No. 40
--------------------
Maximum between three numbers`)
maxNumBt3Num(81, 80, 60)

/* 41. Write a ts program to check whether a number is even or odd using conditional operator. */
function isEvenOdd(e: number) {
    if (e % 2 == 0) {
        console.log(`The Number "${e}" is "EVEN"`)
    }
    else {
        console.log(`The Number "${e}" is "ODD"`)
    }
}
console.log(`
--------------------
   Problem No. 41
--------------------
Number is Even or Odd`)
isEvenOdd(45)

/* 42. Write a ts program to check whether year is leap year or not using conditional operator.*/

function isLeapYear(e: number) {
    if (e % 4 == 0) {
        console.log(`The Year "${e}" is "LEAP YEAR"`)
    }
    else {
        console.log(`The Number "${e}" is "NOT LEAP YEAR"`)
    }
}
console.log(`
--------------------
   Problem No. 42
--------------------
Year is Leap or not`)
isLeapYear(2024)

/* 43. Write a ts program to check whether character is an alphabet or not using conditional operator. */

// 0-9 = 48-57
// A-Z = 65-90
// a-z = 97-122

function isAlphabet(x: any) {
    let xToASCII: number = x.charCodeAt(0)   //Convert string into ASCII code
    console.log(xToASCII)

    if ((xToASCII >= 65 && xToASCII <= 90) || (xToASCII >= 97 && xToASCII <= 122)) {
        console.log(`The Charctor "${x}" is "ALPHABET"`)
    }
    else {
        console.log(`The Charctor "${x}" is "NOT ALPHABET"`)
    }
}
console.log(`
--------------------
   Problem No. 43
--------------------
character is an alphabet or not`)
isAlphabet('R')

/*---------List of switch case programming exercises ---------*/

/* 44. Write a ts program to print day of week name using switch case. */
function whatDay(day: number) {
    if (day >= 1 && day <= 7) {
        switch (day) {
            case 1: console.log(`The Day is "Saturday"`)
                break
            case 2: console.log(`The Day is "Sunday"`)
                break
            case 3: console.log(`The Day is "Monday"`)
                break
            case 4: console.log(`The Day is "Tuesday"`)
                break
            case 5: console.log(`The Day is "Wednesday"`)
                break
            case 6: console.log(`The Day is "Thersday"`)
                break
            case 7: console.log(`The Day is "Fridady"`)
                break
        }
    }
}
console.log(`
--------------------
   Problem No. 44
--------------------
Day of the week`)
whatDay(5)

/* 45. Write a ts program print total number of days in a month using switch case. */
function whatMonth(x: number) {

    switch (x) {
        case 1: console.log("The Month is JANUARY and it has 31 days")
            break
        case 2: console.log("The Month is FEBRUARY and it has 28 days")
            break
        case 3: console.log("The Month is MARCH and it has 31 days")
            break
        case 4: console.log("The Month is APRIL and it has 30 days")
            break
        case 5: console.log("The Month is MAY and it has 31 days")
            break
        case 6: console.log("The Month is JUN and it has 30 days")
            break
        case 7: console.log("The Month is JULY and it has 31 days")
            break
        case 8: console.log("The Month is AUGUST and it has 31 days")
            break
        case 9: console.log("The Month is SEPTEMBER and it has 30 days")
            break
        case 10: console.log("The Month is OCTOBER and it has 31 days")
            break
        case 11: console.log("The Month is NOVEMBER and it has 30 days")
            break
        case 12: console.log("The Month is DECEMBER and it has 31 days")
            break
        default: console.log("The Month Values are 1 to 12")
    }
}

console.log(`
--------------------
    Problem No. 45
--------------------
Total number of days in a month`)
whatMonth(2)

/* 46. Write a ts program to check whether an alphabet is vowel or consonant using switch case. */
function isVowel(x: string) {

    let y: string = x.toLowerCase()
    var charLen = y.length;
    // console.log('Charactor Lenth', charLen);

    if (charLen == 1) {

        switch (y) {
            case "a": console.log(`The Charactor ${x} is "VOWEL"`)
                break
            case "e": console.log(`The Charactor ${x} is "VOWEL"`)
                break
            case "i": console.log(`The Charactor ${x} is "VOWEL"`)
                break
            case "o": console.log(`The Charactor ${x} is "VOWEL"`)
                break
            case "u": console.log(`The Charactor ${x} is "VOWEL"`)
                break

            default: console.log(`The Charactor ${x} is "CONSTANT"`)
        }
    }
    else { console.log('Please Write only one Charactor') }
}

console.log(`
--------------------
    Problem No. 46
--------------------
Alphabet is vowel or consonant`)
isVowel('O')

/* 47. Write a ts program to find maximum between two numbers using switch case. */
function maxNumBT2Switch(x: number, y: number) {
    let g = x > y
    let l: boolean = x < y
    switch (x > y) {
        case true: console.log(`The Number "${x}" Greater than "${y}"`)
            break
        case false: console.log(`The Number "${y}" Greater than "${x}"`)
            break
        default: console.log(`Both Numbers are EQUAL`)
    }
}

console.log(`
--------------------
    Problem No. 47
--------------------
Maximum between two numbers using switch`)
maxNumBT2Switch(5, 4)
/* 48. Write a ts program to check whether a number is even or odd using switch case. */
function isOddEven(x: number) {
    let y: number = x % 2
    switch (y) {
        case 0: console.log(`The Number "${x}" is "EVEN"`)
            break
        default: console.log(`The Number "${x}" is "ODD"`)
    }
}
console.log(`
--------------------
    Problem No. 48
--------------------
Number is even or odd using switch case`)
isOddEven(5)
/* 49. Write a ts program to check whether a number is positive, negative or zero using switch case. */
function whatNum(x: number) {

    if (x != 0) {
        switch (x > 0) {
            case true: console.log(`The Number (${x}) is "POSTIVE"`)
                break
            case false: console.log(`The Number (${x}) is "NEGATIVE"`)
                break
        }
    } else {
        console.log(`The Number (${x}) is "ZERO"`)
    }
}
console.log(`
--------------------
    Problem No. 49
--------------------
Number is even or odd using switch case`)
whatNum(0)
/* 50. Write a ts program to find roots of a quadratic equation using switch case. */
console.log(`
--------------------
    Problem No. 50
--------------------
Not Solved`)
/* 51. Write a ts program to create Simple Calculator using switch case. */
function Calculate(x:number, y:number, z:string){
    switch(z){
        case "+" : console.log(`${x} + ${y} = ${x+y}`)
        break
        case "-" : console.log(`${x} - ${y} = ${x-y}`)
        break
        case "*" : console.log(`${x} x ${y} = ${x*y}`)
        break
        case "/" : console.log(`${x} / ${y} = ${x/y}`)
        break
    }
}
console.log(`
--------------------
    Problem No. 51
--------------------
Simple Calculator using switch case`)
Calculate(10, 20, '*')
