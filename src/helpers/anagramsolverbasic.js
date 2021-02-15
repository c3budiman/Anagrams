//C3budiman 2021
//anagram checker

//cause i cant do split (es6)
function stringToArray(STRING) {
    let array_output = [];
    for (let i = 0; i < STRING.length; i++) {
        array_output.push(STRING.charAt(i))
    }
    return array_output;
}

//cause i cant do join (es6)
function arrayToString(ARR) {
    let result = '';
    for (let i = 0; i < ARR.length; i++) {
        result += ARR[i];
    }
    return result;
}

//cause i cant do sort (es6) function
//ex :
//sortAlphabet("acdb")
//=> abcd
function sortAlphabet(WORDS) {
    WORDS = stringToArray(WORDS)
    for (var j = 0; j < WORDS.length - 1; j++) {
        for (var i = 0, swapping; i < WORDS.length - 1; i++) {
          if (WORDS[i]> WORDS[i + 1]) {
            swapping = WORDS[i + 1];
            WORDS[i + 1] = WORDS[i];
            WORDS[i] = swapping;
            }; 
        }; 
    };
    return arrayToString(WORDS);
}

//our main function :
//it takes argument of set array elements, that wanted to check is it anagram to each group or not
//ex :
//isAnagram(["c3b", "b3c", "c3z"])
//=> [["c3b", "b3c"], ["c3z"]]
exports.isAnagram = function (ARR) {
    if(ARR == null) {
        throw new Error("Anagram Input is Null");
    }
    if(typeof(ARR) == "undefined") {
        throw new Error("Anagram Input is undefined");
    }
    if(! ARR instanceof Array) {
        throw new Error("Anagram Input is not an array");
    }
    if (typeof ARR === 'string' || ARR instanceof String) {
        throw new Error("Anagram Input is string, please array only");
    }
    //output:
    var anagrams = {};
    let anagrams_arr = [];
    //take the arr and loop all of the items in it :
    for (let i = 0; i < ARR.length; i++) {
       var word = ARR[i];

       //sort the array items :
       var sorted_word = sortAlphabet(word);

       //in here i use the object array,
       //if it is already exist, just push the new word
       if (anagrams[sorted_word] != null) {
            anagrams[sorted_word].push(word);
       } 
       //otherwise create another array with the word
       //and insert it into the object:
       else {
            anagrams[sorted_word] = [ word ];
       }
    }

    //to make the output the same as example :
    for (var sorted in anagrams) {
        var words = anagrams[sorted];
        anagrams_arr.push(words)
    }

    return anagrams_arr;
}