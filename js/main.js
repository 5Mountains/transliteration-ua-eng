window.addEventListener("load", ()=>{
    const input = document.querySelector(".text-input input");
    const output = document.querySelector(".text-output span");
    
    function uaToLat() {
        const ua = {
            "а": "a",
            "б": "b",
            "в": "v",
            "г": "h",
            "ґ": "g",
            "д": "d",
            "е": "e",
            "є": "ie",
            "ж": "zh",
            "з": "z",
            "и": "y",
            "і": "i",
            "ї": "i",
            "й": "i",
            "к": "k",
            "л": "l",
            "м": "m",
            "н": "n",
            "о": "o",
            "п": "p",
            "р": "r",
            "с": "s",
            "т": "t",
            "у": "u",
            "ф": "f",
            "х": "kh",
            "ц": "ts",
            "ч": "ch",
            "ш": "sh",
            "щ": "shch",
            "ю": "iu",
            "я": "ia",
            "зг": "zgh",
            "ь": "",
            "Є": " Ye",
            "Ї": " Yi",
            "Й": " Y",
            "Ю": " Yu",
            "Я": " Ya",
            "'": "",
            " ": " "
        };
        let text = input.value;
        let str = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (ua[letter] != undefined) {
                str += ua[letter];
            } 
            else {
                if (ua[letter.toLowerCase()]) {
                    let low = ua[letter.toLowerCase()];
                    str += low.toUpperCase();
                }
            }
        }
        output.innerText = str;
    }

    input.addEventListener("input", uaToLat);
});
