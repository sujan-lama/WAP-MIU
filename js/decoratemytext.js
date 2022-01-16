window.onload = function () {
    "use strict";
    const biggerDecorationBtn = document.getElementById("biggerDecorationButton");
    const cancelDecorationBtn = document.getElementById("cancelBiggerDecorationButton");
    const blingcheck = document.getElementById("bling");
    const malkovichBtn = document.getElementById("malkovitchButton");
    const pigLatinButton = document.getElementById("pigLatinButton");

    biggerDecorationBtn.onclick = startIncreaseFontSize;
    cancelDecorationBtn.onclick = cancelIncreaseFontSize;
    pigLatinButton.onclick = pigLatin;
    blingcheck.onchange = onChangeListener;
    malkovichBtn.onclick = malkovich;
};

var timer = null;
function startIncreaseFontSize() {
    "use strict";
    if (timer === null) {
        timer = setInterval(increaseFontSize, 500);
    }
}

function cancelIncreaseFontSize() {
    "use strict";
    if (timer != null) {
        timer = clearInterval(timer);
        timer = null;
    }
}

function malkovich() {
    "use strict";
    const ta = document.getElementById("itemta");
    const content = ta.value.split(' ');
    let newValue = '';
    for (let i = 0; i < content.length; i++) {
        if (content[i].length >= 5) {
            newValue += 'Malkovich';
        } else {
            newValue += content[i];
        }
        newValue += i === content.length - 1 ? '' : ' ';

    }
    ta.value = newValue;
}

function pigLatin() {
    "use strict";
    const ta = document.getElementById("itemta");
    const content = ta.value.split(' ');
    let vowelRegex = /[aeiouAEIOU]/;

    let newValue = '';
    for (let i = 0; i < content.length; i++) {

        let word = content[i];
        if (word[0].match(vowelRegex) === null) {
            newValue += word.substring(1) + word[0] + 'ay';
        } else {
            newValue += word + "ay";
        }
        newValue += i === content.length - 1 ? '' : ' ';

    }
    ta.value = newValue;
}


function increaseFontSize() {
    "use strict";
    const ta = document.getElementById("itemta");
    const fsize = ta.style.fontSize;
    ta.style.fontSize = fsize === '' ? 12 + "pt" : parseInt(fsize) + 2 + "pt";
}

function onChangeListener() {
    "use strict";
    const ta = document.getElementById("itemta");
    let isChecked = document.getElementById("bling").checked;
    if (isChecked) {
        ta.className = "checked";
        document.body.style.backgroundImage = "url(../../images/hundredDollar.jpg)";
    } else {
        ta.className = "unchecked";
        document.body.style.backgroundImage = "";

    }
}