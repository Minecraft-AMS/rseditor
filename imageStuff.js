const imageMap = new Map();
const blockNames = []
const normalBlockName = [
    'slimeblock',
    'honeyblock',

    //copper_bulb
    'copper_bulb',
    'copper_bulb_lit',

    //barrel
    'barrel',

    //block
    'air',
    'glasst',
    'glassw',
    'glazedterracotta',
    'ironblock', 
    'noteblock', 
    'obsidian', 
    'rsblock', 
    'sand', 
    'scaffolding',
    'slabt',
    'smoothstone',
    'quartzblock',
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
]
const statedBlockName = [
    //repeater
    'repeaterloff', 
    'repeaterlon',
    'repeaterroff',
    'repeaterron',
    'repeaterfoff',
    'repeaterfon',

    //dropper
    'dropperd',
    'dropperl',
    'dropperr',
    'dropperu',

    //dispenser
    'dispenserd',
    'dispenserl',
    'dispenserr',
    'dispenseru',

    //chest
    'chestdl',
    'chestdr',
    'chest',

    //comparator
    'comparatorloff', 
    'comparatorlon',
    'comparatorroff', 
    'comparatorron',


    //hopper
    'hopperb',
    'hopperf',
    'hopperd',
    'hopperl',
    'hopperr',

    //hopper_on
    'hopper_onb',
    'hopper_onf',
    'hopper_ond',
    'hopper_onl',
    'hopper_onr',

    //prail
    'prail',

    //dust
    'dustoff',
    'duston',

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


    //rail
    'prailsl',
    'prailsr',

    //fencegate
    'fencegatec',
    'fencegateo',
    
    //piston head&body
    'pistonheadd', 
    'pistonheadl', 
    'pistonheadr', 
    'pistonheadu', 
    'pistonbodyd',
    'pistonbodyl',
    'pistonbodyr',
    'pistonbodyu',
    'stickypistonheadd',
    'stickypistonheadl',
    'stickypistonheadr',
    'stickypistonheadu',

    //lamp
    'lampoff', 
    'lampon', 

    //observer
    'observerb',
    'observerd',
    'observerl',
    'observerr',
    'observeru',

    //shulkerbox
    'shulkerboxd',
    'shulkerboxl',
    'shulkerboxr',
    'shulkerboxu',

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
//probably shouldve used a spritesheet xd

const row_size = 22
const left_size = 6
const right_size = 16

function imageInit() {
    for (let i = 0; i < Math.max(Math.ceil(normalBlockName.length/left_size), Math.ceil(statedBlockName.length/right_size)) * row_size; i++) {
        if (i % row_size < left_size) {
            if (left_size * Math.floor(i/row_size) + i % row_size < normalBlockName.length) {
                blockNames.push(normalBlockName[left_size * Math.floor(i/row_size) + i % row_size]);
            }
            else{
                blockNames.push("air")
            }
        } else {
            // console.log(right_size * Math.floor(i/row_size) + i % row_size - left_size)
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
