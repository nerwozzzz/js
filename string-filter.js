const string = "Привет! Как дела?";

const vowels = ["а", "и", "е"];

const getVowels = string => {

    let extractedVowels = "";

    for (let i = 0; i < string.length; i++) {
        const currentLetter = string[i];

        if (vowels.indexOf(currentLetter) != - 1) {
            extractedVowels = extractedVowels + currentLetter;
        }
    }
    return extractedVowels;
}

console.log(getVowels(string));
