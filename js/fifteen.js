function onReady() {
    "use strict";
    var emptyX = 300;
    var emptyY = 300;

    $("#puzzlearea div").each(function (i, e) {

        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);

        var left = x + "px";
        var top = y + "px";
        var pos = -x + 'px ' + (-y) + 'px';

        let tile = $(e);

        tile.attr({ "x": x, "y": y, "id": "square_" + x + "_" + y })
            .addClass("puzzlepiece")
            .css({ "background-position": pos, "left": left, "top": top })
            .hover(function () {
                toggleHover(tile);
            })
            .click(function () {
                moveTile(tile);
            });

    });

    $("#shufflebutton").click(shuffle);


    function toggleHover(e) {
        if (isMovable($(e))) {
            $(e).addClass("movablepiece");
        } else {
            $(e).removeClass("movablepiece");
        }

    }

    function moveTile(e) {
        if (isMovable($(e))) {
            let tile = $(e);
            let currentX = parseInt(tile.attr("x"));
            let currentY = parseInt(tile.attr("y"));
            tile.css({ "left": emptyX + "px", "top": emptyY + "px" });
            tile.attr({ "x": emptyX, "y": emptyY, "id": "square_" + emptyX + "_" + emptyY });
            emptyX = currentX;
            emptyY = currentY;
            setTimeout(gameState, 100);

        }
    }

    function shuffle() {
        for (let i = 0; i < 200; i++) {
            let randomX = parseInt(Math.random() * 4) * 100;
            let randomY = parseInt(Math.random() * 4) * 100;
            let tileId = "#square_" + randomX + "_" + randomY;
            $(tileId).click();
        }
    }


    function isMovable(tile) {
        let currentX = parseInt(tile.attr("x"));
        let currentY = parseInt(tile.attr("y"));

        const first = (currentX + 100 === emptyX) && (currentY === emptyY);
        const second = (currentX - 100 === emptyX) && (currentY === emptyY);
        const third = (currentX === emptyX) && (currentY + 100 === emptyY);
        const fourth = (currentX === emptyX) && (currentY - 100 === emptyY);

        return (first || second || third || fourth);
    }



    function gameState() {
        let completed = true;

        $("#puzzlearea div").each(function (i, e) {
            let currentX = parseInt($(e).attr("x"));
            let currentY = parseInt($(e).attr("y"));

            //original position
            let x = (i % 4) * 100;
            let y = Math.floor(i / 4) * 100;

            //check if tile is not in its original position
            if (!(currentX === x && currentY === y)) {
                completed = false;
                return false;
            }
        });

        if (completed) {
            alert("Congratulations!!! You have completed the puzzle");
        }
    }
}
$(document).ready(onReady);