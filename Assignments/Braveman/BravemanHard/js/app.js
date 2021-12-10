//Game setup function
function Start() {

    //Character setup stats
    character.medKit = 2;//2
    character.bomb = 1;//1
    character.gold = 25;//25
    character.exp = 0;//0
    character.level = 5;//1
    character.armor = 2;//2
    character.health = 30;//30
    character.damage = 300;//3
    character.max = 30;//30

    //display character stats
    characterStats.innerHTML = display_charcter_stats1(character.level, character.armor, character.health, character.max, character.damage);
    characterStats2.innerHTML = display_charcter_stats2(character.exp, character.gold, character.medKit, character.bomb);
    while (equipmentArray[i].Empty == 0 && i < equipmentArray.length) {
        equipmentArray[i].Empty = 1;
        document.getElementById(equipmentArray[i].slot).innerHTML = "Empty: ";
        i++;
    }

    //Enemy setup stats
    spawnCount = 0;
    random_enemy = -1;
    enemyHealth = 0;
    bossLevel = 0;
    enemyimage.src = "Img/ruins.jpg";
    document.getElementById("enemyImage").appendChild(enemyimage);
    enemyimage.classList.add("IMG");
    enemyStats.innerHTML = "";
    enemyName.innerHTML = "";

    //Setup buttons
    item1Text.innerHTML = "Use Bomb!"; //change text to "Use Bomb"
    item2Text.innerHTML = "Use MedKit!"; //change text to "Use MedKit"
    spawnAndAttack.innerHTML = "Spawn Enemy!"; //Set text to display "Spawn Enemy!"
    shopAndRetreat.innerHTML = "Shop!"; //Set text to display "Shop!"
    spawnAndAttack.setAttribute("onClick", "javascript: spawnEnemy();"); //Set button to call spawnEnemy"
    shopAndRetreat.setAttribute("onClick", "javascript: shop();"); //Set button to call shop()"

    //Quest Setup 
    activeQuestTitle.innerHTML = "";
    activeQuestInfo.innerHTML = "";
    checkQuest.innerHTML = "";
    activequestObj1.innerHTML = "";
    activequestObj2.innerHTML = "";
    activequestObj3.innerHTML = "";
    checkQuest.setAttribute("onClick", "javascript: quest();"); //Set button to call shop()"
    activeQuest = 0; // make quest not active
}

//Spawn enemy
function spawnEnemy() {
    shopStatus = 0;//Shop is not active

    //Setup buttons
    item1Text.innerHTML = "Use Bomb!";
    item2Text.innerHTML = "Use MedKit!";
    spawnAndAttack.innerHTML = "Attack!"; //Set text to display "Spawn Enemy!"
    shopAndRetreat.innerHTML = "Retreat!"; //Set text to display "Shop!"
    spawnAndAttack.setAttribute("onClick", "javascript: attack();");
    shopAndRetreat.setAttribute("onClick", "javascript: retreat();");

    //Check to see if enemy is active and if so refuse to spawn
    if (spawnCount == 1) {
        //nothing happens
    }
    //Run enemy spawn 
    else {
        spawnCount = 1; //active enemy

        //Check to see if a boss fight is next
        if (character.level >= bossArray[bossLevel].level) {

            //Boss stats
            enemyHealth = bossArray[bossLevel].health;
            enemyStats.innerHTML = display_enemy_stats1(enemyHealth, bossArray[bossLevel].armor, bossArray[bossLevel].damage, bossArray[bossLevel].special);

            //Enemy image
            document.getElementById("enemyImage").appendChild(enemyimage);
            enemyimage.src = bossArray[bossLevel].img;
            enemyimage.classList.add("IMG");

            //Change name color to red
            enemyName.innerHTML = "<span style='color:#FF1500;'>" + bossArray[bossLevel].name + "!" + "</span>";

        }
        //If it is not a boss fight
        else {
            //Find random enemy based on characters level
            random_enemy = randomEnemy(enemyArray, character.level)

            //Enemy stats
            enemyHealth = enemyArray[random_enemy].health;
            enemyStats.innerHTML = display_enemy_stats1(enemyHealth, enemyArray[random_enemy].armor, enemyArray[random_enemy].damage, enemyArray[random_enemy].special);

            //Enemy image
            document.getElementById("enemyImage").appendChild(enemyimage);
            enemyimage.src = enemyArray[random_enemy].img; ``
            enemyimage.classList.add("IMG");

            //If enemy is higher level change color to red1522224
            if (enemyArray[random_enemy].level > character.level) {
                enemyName.innerHTML = "<span style='color:#FF1500;'>" + enemyArray[random_enemy].name + "!" + "</span>";
            }
            //If enemy is not higher level 
            else {
                enemyName.innerHTML = enemyArray[random_enemy].name + "!";
            }
        }
    }
}

//Function to attack
function attack() {
    //shake enemies div
    setTimeout(shake, 250, enemyHTMLBox);

    //set attack and retreat buttons
    spawnAndAttack.innerHTML = "<span style='color:#FF1500;'> Enemies turn </span>"; //Set text to display "Spawn Enemy!"
    shopAndRetreat.innerHTML = "<span style='color:#FF1500;'> Cant Retreat </span>"; //Set text to display "Shop!"
    shopAndRetreat.setAttribute("onClick", "javascript: nothing()"); //Set button to call spawnEnemy"
    spawnAndAttack.setAttribute("onClick", "javascript: nothing()"); //Set button to call spawnEnemy"
    setTimeout(damage_to_enemy, 250);
}

//Function to retreat
function retreat() {
    if (character.health <= 0) {
        //nothing happens
    } else {
        shopStatus = 0; //Shop is inactive

        //Take gold from character
        character.gold = 0;
        characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
        characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";

        //Enemy setup stats
        spawnCount = 0;
        random_enemy = -1;
        enemyHealth = 0;
        bossLevel = 0;
        enemyimage.src = "Img/ruins.jpg";
        document.getElementById("enemyImage").appendChild(enemyimage);
        enemyimage.classList.add("IMG");
        enemyStats.innerHTML = "";
        enemyName.innerHTML = "";

        //Setup buttons
        item1Text.innerHTML = "Use Bomb!"; //change text to "Use Bomb"
        item2Text.innerHTML = "Use MedKit!"; //change text to "Use MedKit"
        spawnAndAttack.innerHTML = "Spawn Enemy!"; //Set text to display "Spawn Enemy!"
        shopAndRetreat.innerHTML = "Shop!"; //Set text to display "Shop!"
        spawnAndAttack.setAttribute("onClick", "javascript: spawnEnemy();"); //Set button to call spawnEnemy"
        shopAndRetreat.setAttribute("onClick", "javascript: shop();"); //Set button to call shop()"


    }
}

//Function to shop
function shop() {
    if (random_enemy >= 0 && shopStatus == 0 && spawnCount == 0) {
        random_shop = getRandomInt(3)
        shopStatus = 1; //Shop is active
        spawnCount = 0; //Spawn count reset

        item1Text.innerHTML = shopOptions[random_shop].item1Text;
        item2Text.innerHTML = shopOptions[random_shop].item2Text;

        //Shop setup
        enemyimage.src = "Img/Shop.png";
        document.getElementById("enemyImage").appendChild(enemyimage);
        enemyStats.innerHTML = "Item1 Cost: 15 gold" + "<br>" + shopOptions[random_shop].Item1 + "<br>" + "<br>" + "Item2 Cost: 3 gold" + "<br>" + shopOptions[random_shop].Item2 + "<br>" + "<br>";
        enemyName.innerHTML = shopOptions[random_shop].name;

        if (activeQuest == 0) {
            checkQuest.innerHTML = "Get Quest from: " + shopOptions[random_shop].owner;
            checkQuest.setAttribute("onClick", "javascript: quest();"); //Set button to call shop()"
        } else if (activeQuest == 1 && questGiver == shopOptions[random_shop].owner) {
            checkQuest.innerHTML = "Talk to" + shopOptions[random_shop].owner;
            checkQuest.setAttribute("onClick", "javascript: quest();"); //Set button to call shop()"
        }
    } else if (random_enemy < 0 && shopStatus == 0 && spawnCount == 0) {
        //Display message that no shop was found
        enemyName.innerHTML = "No shop found";
    }
}

//Funtion for quest
function quest() {
    if (activeQuest == 0 && shopStatus == 1) {
        //choose random quest and display on HTML
        chosenQuest = random_quest(shopOptions[random_shop])
        activeQuestTitle.innerHTML = chosenQuest.title;
        activeQuestInfo.innerHTML = chosenQuest.info;

        //set quest objective variables
        questObjectives.questObj1 = chosenQuest.questObj1;
        questObjectives.questObj2 = chosenQuest.questObj2;
        questObjectives.questObj3 = chosenQuest.questObj3;

        //display quest objectives on screen
        activequestObj1.innerHTML = quest_display(chosenQuest.questObj1Text, questObjectives.questObj1);
        activequestObj2.innerHTML = quest_display(chosenQuest.questObj2Text, questObjectives.questObj2);
        activequestObj3.innerHTML = quest_display(chosenQuest.questObj3Text, questObjectives.questObj3);

        //Set quest active and change checkQuest text to blank
        checkQuest.innerHTML = "";
        activeQuest = 1;
        questGiver = shopOptions[random_shop].owner;
    } else if (activeQuest == 1 && shopStatus == 1 && questGiver == shopOptions[random_shop].owner) {
        //Quest Setup 
        activeQuestTitle.innerHTML = "Thank you for your help braveman!";
        activeQuestInfo.innerHTML = "Here are your rewards as promised.";
        checkQuest.innerHTML = "Get Quest from: " + shopOptions[random_shop].owner;
        activequestObj1.innerHTML = "";
        activequestObj2.innerHTML = "";
        activequestObj3.innerHTML = "";
        checkQuest.setAttribute("onClick", "javascript: quest();"); //Set button to call shop()"
        activeQuest = 0; // make quest not active

        character.gold += chosenQuest.gold;
        character.exp += chosenQuest.exp;
    } else {
        checkQuest.innerHTML = "";
    }

    //display character stats
    characterStats.innerHTML = display_charcter_stats1(character.level, character.armor, character.health, character.max, character.damage);
    characterStats2.innerHTML = display_charcter_stats2(character.exp, character.gold, character.medKit, character.bomb);
}

//Function for Item1
function item1() {
    //if shop is active
    if (shopStatus == 1) {
        if (random_shop == 0) {
            if (character.gold >= 15) {
                character.gold -= 15;
                character.armor += 1;
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";
            } else if (character.gold < 15) {
                //nothing happens
            }
        } else if (random_shop == 1) {
            if (character.gold >= 15) {
                character.gold -= 15;
                character.damage += 1;
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";
            } else if (character.gold < 15) {
                //nothing happens
            }
        } else if (random_shop == 2) {
            if (character.gold >= 15) {
                character.gold -= 15; //Take away gold
                character.exp += 5; //add experience

                //Check player level and max health
                character.health = give_health(character.health)
                character.level = check_level(character.level);
                character.max = check_maxhealth(character.max);

                //Relay stats
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";
            } else if (character.gold < 15) {
                //nothing happens
            }
        }
    }
    //if shop is not active
    else if (shopStatus == 0 && spawnCount == 1) {
        if (character.bomb >= 1) {
            character.bomb -= 1;

            //Damage to boss if boss is active
            enemyHealth -= 10;

            //Relay boss stats
            if (character.level >= bossArray[bossLevel].level) {
                enemyStats.innerHTML = display_enemy_stats1(enemyHealth, bossArray[bossLevel].armor, bossArray[bossLevel].damage, bossArray[bossLevel].special);
            }
            //Relay enemy stats
            else {
                enemyStats.innerHTML = display_enemy_stats1(enemyHealth, enemyArray[random_enemy].armor, enemyArray[random_enemy].damage, enemyArray[random_enemy].special);
            }

            //check if boss is dead and give rewards
            if (enemyHealth <= 0 && bossCount == 1) {

                //Setup buttons
                item1Text.innerHTML = "Use Bomb!"; //change text to "Use Bomb"
                item2Text.innerHTML = "Use MedKit!"; //change text to "Use MedKit"
                spawnAndAttack.innerHTML = "Spawn Enemy!"; //Set text to display "Spawn Enemy!"
                shopAndRetreat.innerHTML = "Shop!"; //Set text to display "Shop!"
                spawnAndAttack.setAttribute("onClick", "javascript: spawnEnemy();"); //Set button to call spawnEnemy"
                shopAndRetreat.setAttribute("onClick", "javascript: shop();"); //Set button to call shop()"

                //Choose random pet reward
                random_pet = getRandomInt(petArray.length)
                character.damage += petArray[random_pet].damage
                character.exp += petArray[random_pet].exp
                character.gold += petArray[random_pet].gold
                character.armor += petArray[random_pet].armor
                shopStatus = 0;
                bossCount = 0;
                bossLevel++;

                //Give player gold and exp
                character.exp += bossArray[bossLevel].exp;
                character.gold += bossArray[bossLevel].gold;

                //Clear HTML page
                enemyimage.src = "Img/ruins.jpg";
                document.getElementById("enemyImage").appendChild(enemyimage);
                enemyStats.innerHTML = "";
                enemyName.innerHTML = "";
                spawnCount = 0;

            }
            //check if enemy is dead and give rewards
            else if (enemyHealth <= 0 && bossCount == 0) {
                shopStatus = 0;

                //Setup buttons
                item1Text.innerHTML = "Use Bomb!"; //change text to "Use Bomb"
                item2Text.innerHTML = "Use MedKit!"; //change text to "Use MedKit"
                spawnAndAttack.innerHTML = "Spawn Enemy!"; //Set text to display "Spawn Enemy!"
                shopAndRetreat.innerHTML = "Shop!"; //Set text to display "Shop!"
                spawnAndAttack.setAttribute("onClick", "javascript: spawnEnemy();"); //Set button to call spawnEnemy"
                shopAndRetreat.setAttribute("onClick", "javascript: shop();"); //Set button to call shop()"

                //Give player gold and exp
                character.exp += enemyArray[random_enemy].exp;
                character.gold += enemyArray[random_enemy].gold;

                //Clear HTML page
                enemyimage.src = "Img/ruins.jpg";
                document.getElementById("enemyImage").appendChild(enemyimage);
                enemyStats.innerHTML = "Rewards: " + "<br>" + "Gold: +" + enemyArray[random_enemy].gold + "<br>" + "EXP: +" + enemyArray[random_enemy].exp;
                enemyName.innerHTML = "You have beat " + enemyArray[random_enemy].name + "!";
                spawnCount = 0;//Enemy is not active
                //Clear HTML page
            }
        }
        else if (character.bomb < 1) {
            //nothing happens
        }
    }

    //Check player level
    character.health = give_health(character.health)
    character.level = check_level(character.level);
    character.max = check_maxhealth(character.max);

    //Relay stats
    characterStats.innerHTML = display_charcter_stats1(character.level, character.armor, character.health, character.max, character.damage);
    characterStats2.innerHTML = display_charcter_stats2(character.exp, character.gold, character.medKit, character.bomb);
}

//Function for Item2
function item2() {
    //if shop is active
    if (shopStatus == 1) {
        if (random_shop == 0) {
            if (character.gold >= 3) {
                character.gold -= 3;
                character.medKit += 1;
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";
            } else if (character.gold < 3) {
                //nothing happens
            }
        } else if (random_shop == 1) {
            if (character.gold >= 3) {
                character.gold -= 3;
                character.bomb += 1;
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";
            } else if (character.gold < 3) {
                //nothing happens
            }
        } else if (random_shop == 2) {
            //If player does have enough gold
            if (character.gold >= 3) {
                character.gold -= 3;
                character.health += 20;

                //check max health
                if (character.health >= character.max) {
                    character.health = character.max;
                }

                //relay stats
                characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
                characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";

                //If player doesn't have enough gold
            } else if (character.gold < 3) {
                //nothing happens
            }
        }
    }
    //if shop is not active
    else if (shopStatus == 0) {
        if (character.medKit >= 1) {
            character.medKit -= 1;

            //Health regain
            character.health += 10;

            //check max health
            if (character.health >= character.max) {
                character.health = character.max;
            }

            //relay stats
            characterStats.innerHTML = " level: " + character.level + "<br>" + "Armor: " + character.armor + "<br>" + " Health: " + character.health + "/" + character.max + "<br>" + " Damage: " + character.damage + "<br>" + "<br>"; //Element2 into HTML
            characterStats2.innerHTML = " exp: " + character.exp + "<br>" + " Gold: " + character.gold + "<br>" + " Med Kits: " + character.medKit + "<br>" + " Bombs: " + character.bomb + "<br>" + "<br>";

        } else if (character.medKit < 1) {
            //nothing happens
        }
    }
}


//Check to see if player has leveled up
function check_level() {
    if (character.exp >= 200) {
        return 10;
    } else if (character.exp >= 160) {
        return 9;
    } else if (character.exp >= 130) {
        return 8;
    } else if (character.exp >= 100) {
        return 7;
    } else if (character.exp >= 70) {
        return 6;
    } else if (character.exp >= 40) {
        return 5;
    } else if (character.exp >= 20) {
        return 4;
    } else if (character.exp >= 10) {
        return 3;
    } else if (character.exp >= 5) {
        return 2;
    } else {
        return 1;
    }
}

//Check to see if player has new max health
function check_maxhealth() {
    if (character.level == 10) {
        return 120;
    } else if (character.level == 9) {
        return 110;
    } else if (character.level >= 8) {
        return 100;
    } else if (character.level >= 7) {
        return 90;
    } else if (character.level >= 6) {
        return 80;
    } else if (character.level >= 5) {
        return 70;
    } else if (character.level >= 4) {
        return 60;
    } else if (character.level >= 3) {
        return 50;
    } else if (character.level >= 2) {
        return 40;
    } else {
        return 30;
    }
}

//Start setup when window loads
window.onload = Start();