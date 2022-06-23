var dataLevel = [
    0,
    {'ID' : 1, 'Enemy' : [[10, [1, 1]], [15, [1, 1]], [20, [1, 1, 1, 1]], [25, [1, 1, 1, 1, 1, 1]]]},
    {'ID' : 2, 'Enemy' : [[10, [1, 1]], [15, [1, 1, 1, 1]], [20, [1, 1, 2, 2]], [25, [1, 1, 1, 2, 2, 2]]]},
    {'ID' : 3, 'Enemy' : [[10, [1, 1]], [15, [1, 1, 1, 1]], [20, [2, 2, 2, 2]], [25, [1, 1, 2, 2, 2, 2, 2, 2]], [30, [1, 1, 1, 2, 2, 2]], [32, [1, 1, 1, 2, 2, 2, 3]]]},
];

var dataCard = [
    0,
    {'ID' : 1, 'Name' : 'Cake Warrior', 'Element' : 'Normal', 'Type' : 'Unit', 'Energy' : 3, 'Attack' : [10, 2], 'Life' : [60, 12], 'Weapon' : 1, 'Ability' : ''},
    {'ID' : 2, 'Name' : 'Cake Archer', 'Element' : 'Normal', 'Type' : 'Unit', 'Energy' : 4, 'Attack' : [12, 3], 'Life' : [30, 3], 'Weapon' : 2, 'Ability' : ''},
    {'ID' : 3, 'Name' : 'Cake Shield', 'Element' : 'Normal', 'Type' : 'Unit', 'Energy' : 2, 'Attack' : [0, 0], 'Life' : [200, 40], 'Weapon' : 1, 'Ability' : ''},
    {'ID' : 4, 'Name' : 'Salt Golem', 'Element' : 'Normal', 'Type' : 'Unit', 'Energy' : 8, 'Attack' : [20, 5], 'Life' : [200, 30], 'Weapon' : 1, 'Ability' : ''},
    {'ID' : 5, 'Name' : 'Upgrade', 'Element' : 'Normal', 'Type' : 'Spell', 'Energy' : 2, 'Attack' : [0, 0], 'Life' : [0, 0], 'Weapon' : 0, 'Ablilty' : 'Upgrade:1/1'}
];

var dataEmeny = [
    0,
    {'ID' : 1, 'Name' : 'Green Jelly Slime', 'Element' : 'Normal', 'Elite' : false, 'Attack' : [5, 0], 'Life' : [30, 0], 'Weapon' : 1, 'Ability' : ''},
    {'ID' : 2, 'Name' : 'Yellow Jelly Slime', 'Element' : 'Normal', 'Elite' : false, 'Attack' : [8, 0], 'Life' : [50, 0], 'Weapon' : 1, 'Ability' : ''},
    {'ID' : 3, 'Name' : 'Purple Jelly Slime', 'Element' : 'Normal', 'Elite' : false, 'Attack' : [10, 0], 'Life' : [70, 0], 'Weapon' : 1, 'Ability' : ''},
];

// 0 : Empty, 1 : Enemy Obstacle, 2 : PlayerPosition, 3 : Enemy Spawn
var dataLevelField = [
    0,
    {'ID' : 1, 'Spawn' : [[544, 160]], 'Core' : [96, 160], 'Field' : [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]},

    {'ID' : 2, 'Spawn' : [[544, 160]], 'Core' : [96, 160], 'Field' : [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]},

    {'ID' : 3, 'Spawn' : [[544, 160], [352, 352]], 'Core' : [96, 160], 'Field' : [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]},
];