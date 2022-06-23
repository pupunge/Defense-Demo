var img = {
    'Grass' : new Image(),
    'Tile' : new Image(),
    'Spawn' : new Image(),
    'Core' : new Image(),
};

function imageLoad() {
    img['Grass'].src = 'Image/Grass.png';
    img['Tile'].src = 'Image/Tile.png';
    img['Spawn'].src = 'Image/Spawn.png';
    img['Core'].src = 'Image/Core.png';
}

function addOffscreenCanvas() {
    canvas.grass = document.createElement('canvas');
    canvas.grassCtx = canvas.grass.getContext('2d');
    canvas.grass.width = 64;
    canvas.grass.height = 64;
    canvas.grassCtx.drawImage(img['Grass'], 0, 0);

    canvas.tile = document.createElement('canvas');
    canvas.tileCtx = canvas.tile.getContext('2d');
    canvas.tile.width = 64;
    canvas.tile.height = 64;
    canvas.tileCtx.drawImage(img['Tile'], 0, 0);

    canvas.spawn = document.createElement('canvas');
    canvas.spawnCtx = canvas.spawn.getContext('2d');
    canvas.spawn.width = 64;
    canvas.spawn.height = 64;
    canvas.spawnCtx.drawImage(img['Spawn'], 0, 0);

    canvas.core = document.createElement('canvas');
    canvas.coreCtx = canvas.core.getContext('2d');
    canvas.core.width = 64;
    canvas.core.height = 64;
    canvas.coreCtx.drawImage(img['Core'], 0, 0);
}