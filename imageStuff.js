const imageMap = new Map();
const normalBlockName = [
    //arail
    'arail',
    'arailsl',
    'arailsr',

    //barrel
    'barrel',

    //block
    'air',
    'glasst',
    'glassw',
    'glazedterracotta',
    'honeyblock',
    'ironblock', 
    'noteblock', 
    'obsidian', 
    'rsblock', 
    'sand', 
    'scaffolding',
    'slabt',
    'slimeblock',
    'smoothstone',
    'soulsand',
    'unknown',

    //cake
    'cake14', 

    //cauldron
    'cauldron',

    //target
    'target',

    //composter
    'composter',

    //based
    'powderedsnow',
    
    //water
    'water',

    //lava
    'lava',
    
    //ice
    'ice',

    //crafter
    'crafter',

    //copper_bulb
    'copper_bulb',
    'copper_bulb_lit'
]
const statedBlockName = [
    //comparator
    'comparatorloff', 
    'comparatorlon',
    'comparatorroff', 
    'comparatorron',

    //dropper
    'dropperd',
    'dropperl',
    'dropperr',
    'dropperu',

    //hopper
    'hopperb',
    'hopperd',
    'hopperl',
    'hopperr',

    //shulkerbox
    'shulkerboxd',
    'shulkerboxl',
    'shulkerboxr',
    'shulkerboxu',

    //repeater
    'repeaterloff', 
    'repeaterlon',
    'repeaterroff',
    'repeaterron',
    'repeaterfoff',
    'repeaterfon',

    //chest
    'chest',
    'chestdl',
    'chestdr',

    //dust
    'dustoff',
    'duston',

    //fencegate
    'fencegatec',
    'fencegateo',

    //lamp
    'lampoff', 
    'lampon', 

    //observer
    'observerb',
    'observerd',
    'observerl',
    'observerr',
    'observeru',

    //prail
    'prail',
    'prailsl',
    'prailsr',

    //piston
    'pistonb',
    'pistond',
    'pistonf',
    'pistonl',
    'pistonr',
    'pistonu', 
    'stickypistonb',
    'stickypistond', 
    'stickypistonf',
    'stickypistonl', 
    'stickypistonr', 
    'stickypistonu',
    'pistonheadd', 
    'pistonheadl', 
    'pistonheadr', 
    'pistonheadu', 
    'stickypistonheadd',
    'stickypistonheadl',
    'stickypistonheadr',
    'stickypistonheadu',
    'pistonbodyd',
    'pistonbodyl',
    'pistonbodyr',
    'pistonbodyu',

    //torch
    'torchoff',
    'torchon',
    'torchloff',
    'torchlon',
    'torchroff',
    'torchron',

    //trapdoor
    'trapdoorf',
    'trapdoord',
    'trapdoorl',
    'trapdooru',
    'trapdoorr',

    //wooden trapdoor
    'wtrapdoorf',
    'wtrapdoord',
    'wtrapdoorl',
    'wtrapdooru',
    'wtrapdoorr',

    //stair
    'stairdl',
    'stairul',
    'stairur',
    'stairdr',
]

// const blockNames = [
//     //arail
//     'arail',
//     'arailsl',
//     'arailsr',

//     //barrel
//     'barrel',

//     //block
//     'air',
//     'glasst',
//     'glassw',
//     'glazedterracotta',
//     'honeyblock',
//     'ironblock', 
//     'noteblock', 
//     'obsidian', 
//     'rsblock', 
//     'sand', 
//     'scaffolding',
//     'slabt',
//     'slimeblock',
//     'smoothstone',
//     'soulsand',
//     'unknown',

//     //cake
//     'cake14', 

//     //cauldron
//     'cauldron',

//     //chest
//     'chest',
//     'chestdl',
//     'chestdr',

//     //comparator
//     'comparatorloff', 
//     'comparatorlon',
//     'comparatorroff', 
//     'comparatorron',

//     //target
//     'target',

//     //composter
//     'composter',

//     //door

//     //dropper
//     'dropperd',
//     'dropperl',
//     'dropperr',
//     'dropperu',

//     //dust
//     'dustoff',
//     'duston',

//     //fencegate
//     'fencegatec',
//     'fencegateo',

//     //hopper
//     'hopperb',
//     'hopperd',
//     'hopperl',
//     'hopperr',

//     //lamp
//     'lampoff', 
//     'lampon', 

//     //observer
//     'observerb',
//     'observerd',
//     'observerl',
//     'observerr',
//     'observeru',

//     //piston
//     'pistonb',
//     'pistond',
//     'pistonf',
//     'pistonl',
//     'pistonr',
//     'pistonu', 
//     'stickypistonb',
//     'stickypistond', 
//     'stickypistonf',
//     'stickypistonl', 
//     'stickypistonr', 
//     'stickypistonu',
//     'pistonheadd', 
//     'pistonheadl', 
//     'pistonheadr', 
//     'pistonheadu', 
//     'stickypistonheadd',
//     'stickypistonheadl',
//     'stickypistonheadr',
//     'stickypistonheadu',
//     'pistonbodyd',
//     'pistonbodyl',
//     'pistonbodyr',
//     'pistonbodyu',


//     //prail
//     'prail',
//     'prailsl',
//     'prailsr',

//     //repeater
//     'repeaterloff', 
//     'repeaterlon',
//     'repeaterroff',
//     'repeaterron',
//     'repeaterfoff',
//     'repeaterfon',

//     //shulkerbox
//     'shulkerboxd',
//     'shulkerboxl',
//     'shulkerboxr',
//     'shulkerboxu',

//     //torch
//     'torchoff',
//     'torchon',
//     'torchloff',
//     'torchlon',
//     'torchroff',
//     'torchron',

//     //trapdoor
//     'trapdoord',
//     'trapdoorl',
//     'trapdooru',
//     'trapdoorr',

//     //wooden trapdoor
//     'wtrapdoord',
//     'wtrapdoorl',
//     'wtrapdooru',
//     'wtrapdoorr',

//     //stair
//     'stairdl',
//     'stairul',
//     'stairur',
//     'stairdr',
    
//     //based
//     'powderedsnow',
    
//     //water
//     'water',

//     //lava
//     'lava',
    
//     //ice
//     'ice',

//     //crafter
//     'crafter',

//     //copper_bulb
//     'copper_bulb',
//     'copper_bulb_lit'
// ]
blockNames = []
//probably shouldve used a spritesheet xd

const row_size = 20
const left_size = 4
const right_size = 16

function imageInit() {
    for (let i = 0; i < Math.max(Math.ceil(normalBlockName.length/left_size) + Math.ceil(statedBlockName.length/right_size)) * row_size; i++) {
        if (i % row_size < left_size) {
            console.log(left_size * Math.floor(i/row_size) + i % row_size)
            if (left_size * Math.floor(i/row_size) + i % row_size < normalBlockName.length) {
                blockNames.push(normalBlockName[left_size * Math.floor(i/row_size) + i % row_size]);
            }
            else{
                blockNames.push("air")
            }
        } else {
            console.log(right_size * Math.floor(i/row_size) + i % row_size - left_size)
            if (right_size * Math.floor(i/row_size) + i % row_size - left_size < statedBlockName.length) {
                blockNames.push(statedBlockName[right_size * Math.floor(i/row_size) + i % row_size - left_size]);
            }
            else{
                blockNames.push("air")
            }
        }
    }

    blockNames.forEach((e) => imageMap.set(e, loadImage(`assets/${e}.webp`)));

    //default block
    selectedImg = imageMap.get('air');
}
