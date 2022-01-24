"use strict";
function onReady() {

    var lose = false;

    $('div#start').click(function () {
        startGame();
    });

    $('div#end').mouseenter(function () {
        if (lose) {
            gameLose();
            return;
        }
        gameWin();
    });

    function startGame() {
        resetGame();
        setupHandler();
    }

    function setupHandler() {
        $('div.boundary').mouseenter(gameLose);
        $('div#maze').mouseleave(gameLose);
        $('h2').text('Move the mouse without touching boundary');
    }

    function resetHandler() {
        $('div.boundary').unbind('mouseenter');
        $('div#maze').unbind('mouseleave');
        $('div.boundary').removeClass("youlose");
    }

    function resetGame() {
        lose = false;
        resetHandler();
    }

    function gameWin() {
        $('h2').text('You Win! :]');
        resetHandler();
    }

    function gameLose() {
        $('div.boundary').addClass("youlose");
        $('h2').text('You Lose! :[');
        lose = true;
    }
}
$(document).ready(onReady);
