var UIGame = {
    start : {
        rect : [128, 128, 768, 384],
        cardListSection : [128, 128, 384, 384],
        cardList : [[128, 128], [192, 128], [256, 128], [320, 128], [384, 128], [448, 128], [128, 192], [192, 192], [256, 192], [320, 192], [384, 192], [448, 192], [128, 256], [192, 256], [256, 256], [320, 256], [384, 256], [448, 256]],
        description : [128, 320, 384, 128],
        cardLeftButton : [320, 448, 192, 64],
        cardRightButton : [128, 448, 192, 64],
        deckListSection : [512, 128, 384, 384],
        deckList : [[512, 128], [576, 128], [640, 128], [704, 128], [768, 128], [832, 128], [512, 192], [576, 192], [640, 192], [704, 192], [768, 192], [832, 192], [512, 256], [576, 256], [640, 256], [704, 256], [768, 256], [832, 256]],
        deckLeftButton : [512, 320, 192, 64],
        deckRightButton : [704, 320, 192, 64],
        startButton : [512, 384, 384, 128],
        startText : [520, 464],
    }
};

function loopGame() {
    displayGame();
}

function displayGame() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    if (state === 'Start') {
        strokeRectArray(UIGame.start.rect);
        strokeRectArray(UIGame.start.cardListSection);
        strokeRectArray(UIGame.start.description);
        strokeRectArray(UIGame.start.cardLeftButton);
        strokeRectArray(UIGame.start.cardRightButton);
        strokeRectArray(UIGame.start.deckListSection);
        strokeRectArray(UIGame.start.deckLeftButton);
        strokeRectArray(UIGame.start.deckRightButton);
        strokeRectArray(UIGame.start.startButton);
        context.fillText(`Start`, UIGame.start.startText[0], UIGame.start.startText[1]);
    } else if (state === 'Game') {
        for (var i = 0; i < gameField.length; i++) {
            for (var j = 0; j < gameField[i].length; j++) {
                if (gameField[i][j] === 1) {
                    context.drawImage(canvas.grass, j * 64 - camera[0], i * 64 - camera[1]);
                } else if (gameField[i][j] === 0) {
                    context.drawImage(canvas.tile, j * 64 - camera[0], i * 64 - camera[1]);
                }
            }
        }

        context.drawImage(canvas.core, gameCore[0] - 32 - camera[0], gameCore - 32 - camera[1]);

        for (var i = 0; i < gameSpawn.length; i++) {
            context.drawImage(canvas.spawn, gameSpawn[i][0] - 32 - camera[0], gameSpawn[i][1] - 32 - camera[1]);
        }
    } 
}

function mouseUpGame(x, y) {
    if (menu === false) {
        if (state === 'Start') {
            if (pointInsideRectArray(x, y, UIGame.start.startButton)) {
                state = 'Game';
            }
        }
    }
}