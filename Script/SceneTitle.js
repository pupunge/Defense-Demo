var UITitle = {
    titleText : [8, 48],
    levelButton : [[128, 128, 768, 64], [128, 192, 768, 64], [128, 256, 768, 64]],
    levelText : [[136, 176], [136, 240], [136, 304]],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Defense Demo`, UITitle.titleText[0], UITitle.titleText[1]);
    
    for (var i = 0; i < 3; i++) {
        strokeRectArray(UITitle.levelButton[i]);
        context.fillText(`Level ${i + 1}`, UITitle.levelText[i][0], UITitle.levelText[i][1]);
    }
}

function mouseUpTitle(x, y) {
    if (menu === false) {
        if (state === '') {
            for (var i = 0; i < 3; i++) {
                if (pointInsideRectArray(x, y, UITitle.levelButton[i])) {
                    gameLevel = i + 1;
                    levelLoad(gameLevel);
                    scene = 'Game';
                    state = 'Start';
                }
            }
        }
    }
}