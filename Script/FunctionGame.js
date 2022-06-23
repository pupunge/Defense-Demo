function levelLoad(level) {
    enemyList = [];
    gameField = [];
    gameCore = [0, 0];
    gameField = [];
    var temp = [];
    var temp2 = [];

    for (var i = 0; i < dataLevel[level]['Enemy'].length; i++) {
        temp = [];
        temp.push(dataLevel[level]['Enemy'][i][0]);
        temp2 = [];

        for (var j = 0; j < dataLevel[level]['Enemy'][i][1].length; j++) {
            temp2.push(dataLevel[level]['Enemy'][i][1][j]);
        }

        temp.push(temp2);
        enemyList.push(temp);
    }

    for (var i = 0; i < dataLevelField[level]['Field'].length; i++) {
        temp = [];
        
        for (var j = 0; j < dataLevelField[level]['Field'][i].length; j++) {
            temp.push(dataLevelField[level]['Field'][i][j]);
        }

        gameField.push(temp);
    }

    gameCore[0] = dataLevelField[level]['Core'][0];
    gameCore[1] = dataLevelField[level]['Core'][1];
    
    for (var i = 0; i < dataLevelField[level]['Spawn'].length; i++) {
        gameSpawn.push([dataLevelField[level]['Spawn'][i][0], dataLevelField[level]['Spawn'][i][1]]);
    }

    player.generatorLevel = 1;
    player.energy = 2;
    player.energyMax = 6;
    player.life = 60;
    player.lifeMax = 60;
    player.hand = [];
    player.deck = [];
}