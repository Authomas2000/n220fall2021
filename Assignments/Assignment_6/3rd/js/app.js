let enemyimage = document.createElement('img'); //Element for div1
let eStats = document.getElementById("enemyStats"); //Div for enemy stats
let cStats = document.getElementById("characterStats"); //Div for character stats
let eName = document.getElementById("enemyName"); //Div for enemy name
var r = 0;
var div = 0;
var eD =5;


let enemyArray = [ //Enemy Array
    { name: "zombie", armor: 3, health: 20, damage: 5, special: "Turns people into zombies", img: "img/zombie.png" },
    { name: "mummy", armor: 3, health: 30, damage: 5, special: "Can drain life from others", img: "img/mummy.jfif" },
    { name: "skeleton", armor: 4, health: 15, damage: 5, special: "Comes back to life after some time", img: "img/Skeleton.jfif" },
];

let character = {
    name: "Braveman",
    armor: 3,
    health: 25,
    damage: 5,
    special: "Is brave"
}

//Character stats
let newE3 = document.createElement("div3"); //Element for div2
newE3.innerHTML = " Special ability: " + character.special + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
cStats.appendChild(newE3); //Append element2

//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Spawn enemy
function spawnEnemy() {
    r = getRandomInt(3);

    //Enemy image
    document.getElementById("enemyimg").appendChild(enemyimage);
    enemyimage.src = enemyArray[r].img;
    enemyimage.classList.add("IMG");

    //Enemy stats
    let newE1 = document.getElementById("enemyStats"); //Element for div1
    let newE2 = document.getElementById("enemyName"); //Element for div1
    newE1.innerHTML = " Special ability: " + enemyArray[r].special + "<br>" + "Armor: " + enemyArray[r].armor + "<br>" + " Health: " + enemyArray[r].health + "<br>" + " Damage: " + enemyArray[r].damage + "<br>" + "<br>"; //Element2 into HTML
    newE2.innerHTML = enemyArray[r].name + "!";
    eStats.appendChild(newE1); //Append element2
    eName.appendChild(newE2); //Append element2

}

function attack(){
    //Damage to enemy
    let newE1 = document.getElementById("enemyStats"); //Element for div1
    let newE2 = document.getElementById("enemyName"); //Element for div1
    enemyArray[r].health -=  character.damage - enemyArray[r].armor;
    newE1.innerHTML =" Special ability: " + enemyArray[r].special + "<br>" + "Armor: " + enemyArray[r].armor + "<br>" + " Health: " + enemyArray[r].health + "<br>" + " Damage: " + enemyArray[r].damage + "<br>" + "<br>"; //Element2 into HTML
    newE2.innerHTML = enemyArray[r].name + "!";
    eStats1.appendChild(newE1); //Append element2
    eName1.appendChild(newE2); //Append element2          

    //Damage to character
    let newE3 = document.getElementById("div3"); //Element for div1
    character.health -= 3 - character.armor;
    newE3.innerHTML =" Special ability: " + character.special + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
    cStats.appendChild(newE3); //Append element2
}


