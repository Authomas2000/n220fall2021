let activeQuestTitle = document.getElementById("questTitle"); //text for active quest
let activeQuestInfo = document.getElementById("questInfo"); //text for active quest
let checkQuest = document.getElementById("checkQuest"); //text for active quest
let activequestObj1 = document.getElementById("questObj1");
let activequestObj2 = document.getElementById("questObj2");
let activequestObj3 = document.getElementById("questObj3");
let enemyimage = document.createElement('img'); //Element for div1
let enemyStats = document.getElementById("enemyStats"); //Div for enemy stats
let enemyName = document.getElementById("enemyName"); //Div for enemy name
let enemyHTMLBox = document.getElementById('enemyDetails'); //Element for div1
let characterHTMLBox = document.getElementById('heroDetails'); //Element for div1
let characterimage = document.createElement('img'); //Element for div1
let characterStats = document.getElementById("characterStats"); //Div for character stats
let characterStats2 = document.getElementById("characterStats2"); //Div for character stats
let item1Text = document.getElementById("item1"); //Item one button
let item2Text = document.getElementById("item2"); //Item two button
let spawnAndAttack = document.getElementById("spawnAndAttack"); //spawn and attack button
let shopAndRetreat = document.getElementById("shopAndRetreat"); //shop and retreat button
let chosenQuest = []; // array for chosen quest
let activeQuest = 0; // make quest not active
let questGiver = 0;
let questObjectives = [{questObj1: 0, questObj2: 0, questObj3: 0}];
let slotCount = 0; //slot variable
var shopStatus = 0; //Active shop status
var spawnCount = 0; //Active creature count
var random_enemy = -1; //Random number
var enemyHealth = 0; //Enemy health
var bossLevel = 0; // boss variable to check level of boss
var bossCount = 0; // variable to check if boss is active
var randomReward = {}; // variable for random pet / equipment reward
var goldReward = 0; // variable for gold reward
var expReward = 0; // variable for exp reward
var petAndEquipReward = 0; //Variable to track pet/equipment reward
var cDamageDone = 0; // Variable for character damage
var eDamageDone = 0; // Variable for enemy damage
var shakeCount = 0;
let i =0;

//Character Stats introduction (values change in the start function)
let character = { name: "Braveman", medKit: 2, bomb: 1, gold: 25, exp: 0, level: 1, armor: 2, health: 30, max: 30, damage: 3, special: "Is brave" }

let equipmentArray = [
    {slot: "slot1", item: "", Empty: 1},
    {slot: "slot2", item: "", Empty: 1},
    {slot: "slot3", item: "", Empty: 1},
    {slot: "slot4", item: "", Empty: 1},
    {slot: "slot5", item: "", Empty: 1},
]

//Enemy Array
let enemyArray = [ //Enemy Array
    { name: "Zombie", level: 1, gold: 2, exp: 1, armor: 1, health: 10, damage: 3, special: "Slow and moans", img: "img/zombie.png" },
    { name: "Mummy", level: 2, gold: 3, exp: 2, armor: 2, health: 15, damage: 4, special: "I heard they come to life to cause harm", img: "img/mummy.jfif" },
    { name: "Big spider", level: 3, gold: 3, exp: 3, armor: 2, health: 25, damage: 4, special: "Has many eyes", img: "" },
    { name: "Skeleton", level: 4, gold: 6, exp: 4, armor: 2, health: 35, damage: 5, special: "Evil wizards love these for minions", img: "img/Skeleton.jfif" },
    { name: "Giant spider", level: 5, gold: 6, exp: 5, armor: 3, health: 45, damage: 5, special: "Has many big eyes", img: "" },
    { name: "Giant snake", level: 6, gold: 7, exp: 6, armor: 4, health: 40, damage: 7, special: "Has big fangs with venom!", img: "" },
    { name: "Bear", level: 7, gold: 8, exp: 7, armor: 4, health: 70, damage: 7, special: "Knows the woods very well", img: "" },
    { name: "Orc", level: 8, gold: 10, exp: 8, armor: 5, health: 80, damage: 8, special: "Has a loud grunt", img: "" },
    { name: "Ogre", level: 9, gold: 12, exp: 9, armor: 6, health: 80, damage: 10, special: "Has a big club", img: "" },
    { name: "Giant", level: 10, gold: 15, exp: 10, armor: 8, health: 70, damage: 12, special: "Just straight huge", img: "" },
    { name: "Young Dragon", level: 11, gold: 20, exp: 11, armor: 9, health: 80, damage: 13, special: "Massive wings, massive claws, massive everything", img: "" }
]

//Boss Array
let bossArray = [
    { name: "Mike the skeleton", level: 5, gold: 15, exp: 15, armor: 3, health: 40, damage: 6, special: "I heard he has a pet...", img: "" },
    { name: "Yaklov the Dragon", level: 10, gold: 40, exp: 30, armor: 9, health: 90, damage: 14, special: "Finally what ive waited for!!!", img: "" }
]

//Pets Array
let petArray = [
    { name: "Flying Pig (+5 damage, +5 armor",   description: "gives +5 damage, +5 armor",    damage: 5, exp: 0, gold: 0, armor: 5 },
    { name: "Flying Pegusus (+8 damage, +3 armor)",          description: "gives +8 damage, +3 armor",    damage: 8, exp: 0, gold: 0, armor: 3 },
    { name: "Baby Dragon (+12 damage)",      description: "gives +12 damage",              damage: 12, exp: 0, gold: 0, armor: 0 }
]

//Armor Array
let armorArray = [
    { name: "Helmet of Wondering (cant stay still)",           description: "gives +3 armor",    damage: 0, exp: 0, gold: 0, armor: 3 },
    { name: "Ring of Invisibility (I can't see you)",          description: "gives +2 armor, +2 damage",    damage: 2, exp: 0, gold: 0, armor: 2 },
    { name: "Adult Diaper (safe from oopsies)",                description: "gives +3 armor",              damage: 0, exp: 0, gold: 0, armor: 3 },
    { name: "Butt powder (keeps ya dry)",                      description: "gives +2 armor, +1 damage",    damage: 1, exp: 0, gold: 0, armor: 2 },
    { name: "Good deoderant (no stank, no chafe) ",            description: "gives +3 armor, +1 damage",    damage: 1, exp: 0, gold: 0, armor: 3 },
    { name: "Gothic Nail polish (I got a dark side)",          description: "gives +1 armor, +15 EXP",              damage: 0, exp: 15, gold: 0, armor: 1 }
]

//Weapons Array
let weaponArray = [
    { name: "The Crack Splitter (a big Sword)",            description: "gives +4 damage",    damage: 4, exp: 0, gold: 0, armor: 0 },
    { name: "The Anti libs (a tome of logic)",          description: "gives +3 damage, + 20 EXP",    damage: 3, exp: 20, gold: 0, armor: 0 },
    { name: "Lets go brandon (a great insult) ",      description: "gives +2 damage, +1 armor",              damage: 2, exp: 0, gold: 0, armor: 1 },
    { name: "Dung Thrower (I would hate this)",            description: "gives +2 damage",    damage: 2, exp: 0, gold: 0, armor: 0 },
    { name: "Belly Bump (just like Kung Fu Panda)",          description: "gives +4 damage, + 10 EXP",    damage: 4, exp: 10, gold: 0, armor: 0 },
    { name: "Rock Bottom (just like Dwayn Jhonson)",      description: "gives +5 damage",              damage: 5, exp: 0, gold: 0, armor: 0 },
    { name: "Your Mom (a response to anything)",      description: "gives +4 damage, +1 armor",              damage: 4, exp: 0, gold: 0, armor: 1 }
]

let robertsQuests = [
    { questGiver: "Robert", title: "A road for Robert", info: "Robert needs you to clear the road for his wagons (kill 3 creatures) <br> <br> Reward: 20 gold, 10 EXP, ", gold: 20, exp: 10, equipment: "", questObj1Text: "Creature", questObj1: 3, questObj2Text: "", questObj2: 0, questObj3Text: "", questObj3: 0}
]

let jacobsQuests = [
    { questGiver: "Jacob", title: "A road for Jacob", info: "Jacob needs you to clear the road for his wagons (kill 3 creatures) <br> <br> Reward: 20 gold, 10 EXP, ", gold: 20, exp: 10, equipment: "", questObj1Text: "Creature", questObj1: 3, questObj2Text: "", questObj2: 0, questObj3Text: "", questObj3: 0}
]

let bonniesQuests = [
    { questGiver: "Bonnie", title: "A road for Bonnie", info: "Bonnie needs you to clear the road for his wagons (kill 3 creatures) <br> <br> Reward: 20 gold, 10 EXP, ", gold: 20, exp: 10, equipment: "", questObj1Text: "Creature", questObj1: 3, questObj2Text: "", questObj2: 0, questObj3Text: "", questObj3: 0}
]

//Shop options
let shopOptions = [
    { owner: "Robert", name: "Welcome to Robertsons", Item1: "Armor Increase (+1)", Item2: "1 Med kit (+10 health)", item1Text: "Buy Armor", item2Text: "Buy medKit", quests: robertsQuests},
    { owner: "Jacob", name: "Welcome to Jacobs", Item1: "Damage Increase (+1)", Item2: "1 Bomb (10 damage)", item1Text: "Buy Damage", item2Text: "Buy Bomb", quests: jacobsQuests},
    { owner: "Bonnie", name: "Welcome to Bonnies", Item1: "EXP boost (+5)", Item2: "Rest up (restore up to 20 health)", item1Text: "Buy EXP", item2Text: "Rest Up", quests: bonniesQuests}
]