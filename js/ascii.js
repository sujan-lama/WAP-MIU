/*jshint sub:true*/
import { ANIMATIONS } from './animation.js';
window.onload = function () {
    "use strict";

    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const animationSelect = document.getElementById("animation");
    const size = document.getElementById("size");
    const turbo = document.getElementById("turbo");
    const asciiTextArea = document.getElementById("asciiTextArea");

    start.onclick = startAnimationClicked;
    stop.onclick = stopAnimation;
    animationSelect.onchange = onAnimationChange;
    size.onchange = onSizeChange;
    turbo.onchange = onSpeedChange;
    asciiTextArea.readOnly = true;
    let intervalTime = 250;
    let animationFrame = [];
    var animation;
    let animationText = "";

    function startAnimationClicked() {
        if (asciiTextArea.value === '') {
            alert("Enter custom animation text");
            return;
        }
        animationFrame = asciiTextArea.value.split("=====\n");
        animationText = asciiTextArea.value;
        stop.disabled = false;
        start.disabled = true;
        asciiTextArea.readOnly = true;
        animationSelect.disabled = true;
        startAnimation();
    }


    function startAnimation() {
        let i = 0;
        animation = setInterval(() => {
            asciiTextArea.value = animationFrame[i];
            i++;
            if (i >= animationFrame.length) {
                i = 0;
            }
        }, intervalTime);
    }

    function stopAnimation() {
        asciiTextArea.readonly = true;
        clearInterval(animation);
        animation = null;
        stop.disabled = true;
        if (animationSelect.value === "custom") {
            asciiTextArea.readOnly = false;
        }
        start.disabled = false;
        animationSelect.disabled = false;
        asciiTextArea.value = animationText;
    }


    function onAnimationChange() {
        if (animationSelect.value === "blank") {
            start.disabled = true;
            stop.disabled = true;
        } else {
            start.disabled = false;
        }

        if (animationSelect.value === 'custom') {
            asciiTextArea.focus();
            asciiTextArea.readOnly = false;
            animationText = "";
            asciiTextArea.value = animationText;
        } else {
            asciiTextArea.readOnly = true;
            animationText = ANIMATIONS[animationSelect.value];
            asciiTextArea.value = animationText;
        }
    }

    function onSizeChange() {
        const size = document.getElementById("size");
        asciiTextArea.style.fontSize = parseInt(size.value) + "pt";

    }

    function onSpeedChange() {
        intervalTime = turbo.checked ? 50 : 250;
        if (animation != null) {
            clearInterval(animation);
            startAnimation();
        }
    }
};