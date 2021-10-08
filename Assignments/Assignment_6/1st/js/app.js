let eList1 = document.getElementById("enemyList1");

let enemyArray = [
    {name: "zombie", armor: 3, health: 20, damage: 5, special: "Turns people into zombies"},
    {name: "mummy", armor: 4, health: 20, damage: 5, special: "Can drain life from others"},
    {name: "skeleton", armor: 5, health: 20, damage: 5, special: "Comes back to life after some time"}
];

for(let i = 0; i < enemyArray.length; i++){
    let newE1 = document.createElement("div1");

    newE1.innerHTML = "Name: " + enemyArray[i].name + "<br>" + " Special ability: " + enemyArray[i].special + "<br>" + "Armor: " + enemyArray[i].armor + "<br>" + " Health: " + enemyArray[i].health + "<br>" + " Damage: " + enemyArray[i].damage + "<br>" + "<br>";

    newE1.classList.add("enemy");

    eList1.appendChild(newE1);

    if(enemyArray[i].armor >= 5){
        newE1.style.backgroundColor = "#F00000";
    }
}
