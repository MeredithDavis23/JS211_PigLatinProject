window.onload = function () {

    const pigLatin = (str) => {
        str = str.toLowerCase().trim();
        let vowel = ["a", "e", "i", "o", "u"]
        let vowelPosition = 0;
        if (vowel.includes(str[0])) {
            return str + "yay";
        }
        else {
            for (let letter of str) {
                if (vowel.includes(letter)) {
                    vowelPosition = str.indexOf(letter)
                    break
                }
            }
            return str.slice(vowelPosition) + str.slice(0, vowelPosition) + "ay"
        }
    }
    document.getElementById("display-element").onsubmit = function (e) {
        e.preventDefault()
        let converted = document.getElementById("showTranslation")
        converted.innerHTML = pigLatin(document.getElementById("textInput").value);
    }
}