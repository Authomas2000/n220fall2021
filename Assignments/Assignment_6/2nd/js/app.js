let enemyimage = document.createElement('img'); //Element for div1
let eStats1 = document.getElementById("enemyStats"); //Div for enemy stats
let cStats1 = document.getElementById("characterStats"); //Div for character stats
i = 0;//i set to 0 

let enemyArray = [ //array of enemies
    {name: "zombie", armor: 3, health: 20, damage: 5, special: "Turns people into zombies"},
    {name: "mummy", armor: 4, health: 20, damage: 5, special: "Can drain life from others"},
    {name: "skeleton", armor: 5, health: 20, damage: 5, special: "Comes back to life after some time"}
];

let character = {
    name: "Braveman",
    armor: 3,
    health: 25,
    damage: 5
}
//Enemy image
document.getElementById("enemyimg").appendChild(enemyimage);
enemyimage.src = "img/zombie.png";
enemyimage.classList.add("IMG");

//Enemy stats
let newE1 = document.createElement("div1"); //Element for div1
newE1.innerHTML ="Name: " + enemyArray[i].name + "<br>" + " Special ability: " + enemyArray[i].special + "<br>" + "Armor: " + enemyArray[i].armor + "<br>" + " Health: " + enemyArray[i].health + "<br>" + " Damage: " + enemyArray[i].damage + "<br>" + "<br>"; //Element2 into HTML
eStats1.appendChild(newE1); //Append element2

//Character stats
let newE2 = document.createElement("div2"); //Element for div2
newE2.innerHTML ="Name: " + character.name + "<br>" + " Special ability: " + character.special + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
cStats1.appendChild(newE2); //Append element2

function attack(){
    //Damage to enemy
    enemyArray[i].health -=  character.damage - enemyArray[i].armor;
    newE1.innerHTML ="Name: " + enemyArray[i].name + "<br>" + " Special ability: " + enemyArray[i].special + "<br>" + "Armor: " + enemyArray[i].armor + "<br>" + " Health: " + enemyArray[i].health + "<br>" + " Damage: " + enemyArray[i].damage + "<br>" + "<br>"; //Element2 into HTML
    eStats1.appendChild(newE1); //Append element2

    //Damage to character
    character.health -= enemyArray[i].damage - character.armor;
    newE2.innerHTML ="Name: " + character.name + "<br>" + " Special ability: " + character.special + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
    cStats1.appendChild(newE2); //Append element2

}

