var canvas;
var context;
var canvasRect;

var scene = 'Title';
var state = '';
var clickMode = '';
var menu = false;
var pause = false;

var gameLevel = 1;
var gameField = [];
var gameCore = [0, 0];
var gameSpawn = [];
var enemyList = [];

var camera = [-64, -64];

var player = {
    life : 60,
    lifeMax : 60,
    energy : 0,
    energyMax : 8,
    energyGen : 0.01,
    generatorLevel : 1,
    hand : [],
    deck : [],
};

var field = {
    cells : [],
    playerUnit : [],
    enemyUnit : [],
}