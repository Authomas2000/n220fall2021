//Give player max health when leveled up 
function give_health() {
    if (character.exp >= 200 && character.level == 9) {
        return 120;
    } else if (character.exp >= 160 && character.level == 8) {
        return 110;
    } else if (character.exp >= 130 && character.level == 7) {
        return 100;
    } else if (character.exp >= 100 && character.level == 6) {
        return 90;
    } else if (character.exp >= 70 && character.level == 5) {
        return 80;
    } else if (character.exp >= 40 && character.level == 4) {
        return 70;
    } else if (character.exp >= 20 && character.level == 3) {
        return 60;
    } else if (character.exp >= 10 && character.level == 2) {
        return 50;
    } else if (character.exp >= 5 && character.level == 1) {
        return 40;
    } else {
        return character.health;
    }
}

//Random damage calculator
function damageDone(damage, armor) {

    //random damge variable
    var random_number = getRandomInt(5);;

    //if damage is less than armor no damage done
    if (damage + random_number <= armor) {
        return 0;
    }
    //if damage is more than armor deal damage
    else {
        return (random_number + damage) - armor;
    }
}
//pets & swords & armor 
function random_reward3(reward1Chance, reward2Chance, reward1Array, reward2Array, reward3Array) {
    value = getRandomInt(10);

    //find reward 2s chance
    reward2Chance += reward1Chance;

    if (value <= reward1Chance) {
        //Choose random reward 1
        value = getRandomInt(reward1Array.length);
        randomReward = reward1Array[value]

        return randomReward
    } else if (value <= reward2Chance) {
        value = getRandomInt(reward2Array.length);
        randomReward = reward2Array[value]

        return randomReward
    } else {
        //Choose random reward 3
        value = getRandomInt(reward3Array.length);
        randomReward = reward3Array[value]

        return randomReward
    }
}

function rewardCalculator(rewardObject, characterObject) {
    characterObject.damage += rewardObject.damage;
    characterObject.exp += rewardObject.exp;
    characterObject.gold += rewardObject.gold;
    characterObject.armor += rewardObject.armor;

    return characterObject;
}

//Random number between values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Random enemy
function randomEnemy(enemyArray, characterLevel) {
    //variables to check players highest level and lowest level for encounters (increase for higher difficulty)
    var cLevelHigh = characterLevel + 1; //2
    var cLevelLow = characterLevel - 2;
    var eLevel = 10000;

    //Loop to check if enemies level is low enough or high enough to face player
    while (eLevel < cLevelLow || eLevel > cLevelHigh) {

        var random_enemy = getRandomInt(enemyArray.length); //Generate random number for enemies
        var eLevel = enemyArray[random_enemy].level;
    }
    return random_enemy; //Generate random number
}

//Function to display enemy stats
function display_enemy_stats1(health, armor, damage, special) {
    return " Health: " + health + "<br>" + "Armor: " + armor + "<br>" + " Damage: " + damage + "<br>" + " Special info: " + special + "<br>" + "<br>";
}

//Function to display character stats
function display_charcter_stats1(level, armor, health, max, damage) {

    if (health <= 15) {
        //Change health color to red
        return " level: " + level + "<br>" + "Armor: " + armor + "<br>" + "<span style='color:#FF1500;'>" + " Health: " + health + "/" + max + "</span>" + "<br>" + " Damage: " + damage + "<br>" + "<br>"; //Element2 into HTML
    } else {
        return " level: " + level + "<br>" + "Armor: " + armor + "<br>" + " Health: " + health + "/" + max + "<br>" + " Damage: " + damage + "<br>" + "<br>"; //Element2 into HTML
    }
}

//function to display character stats
function display_charcter_stats2(exp, gold, medKit, bomb) {

    return " exp: " + exp + "<br>" + " Gold: " + gold + "<br>" + " Med Kits: " + medKit + "<br>" + " Bombs: " + bomb + "<br>" + "<br>";
}

//function to display character equipment
function display_character_equipment(eArray) {
    let i = 0;

    while (eArray[i].Empty == 0 && i < eArray.length) {
        i++;
        console.log(eArray[i].Empty)
    }

    return i
}

function random_quest(questGiver) {
    let randomQuestN = getRandomInt(questGiver.quests.length); // random number for quest

    let givenQuest = questGiver.quests[randomQuestN]; // finished choice for quest

    return givenQuest;
}

function quest_objective_checker(questArray, enemyName, questObjectivesArray) {
    if (questArray.questObj1Text == enemyName || questArray.questObj1Text == "Creature" && questObjectivesArray.questObj1 > 0) {
        questObjectivesArray.questObj1 -= 1;
    }

    if (questArray.questObj2Text == enemyName || questArray.questObj2Text == "Creature" && questObjectivesArray.questObj2 > 0) {
        questObjectivesArray.questObj2 -= 1;
    }

    if (questArray.questObj3Text == enemyName || questArray.questObj3Text == "Creature" && questObjectivesArray.questObj3 > 0) {
        questObjectivesArray.questObj3 -= 1;
    }

    return questObjectivesArray;
}

function quest_display(questObjectiveText, questObjective) {
    if (questObjectiveText !== "") {
        return questObjectiveText + "s left: " + questObjective;
    } else {
        return "";
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

function damage_to_enemy() {
    //If boss is active
    if (character.level >= bossArray[bossLevel].level && enemyHealth > 0) {

        //Find damage done to enemy
        cDamageDone = damageDone(character.damage, bossArray[bossLevel].armor);
        eDamageDone = damageDone(bossArray[bossLevel].damage, character.armor);

        //Deal damage to enemy
        enemyHealth -= cDamageDone;
        enemyStats.innerHTML = display_enemy_stats1(enemyHealth, bossArray[bossLevel].armor, bossArray[bossLevel].damage, bossArray[bossLevel].special);

    }
    //If boss is not active
    else if (enemyHealth > 0) {

        //Find damage done to enemy
        cDamageDone = damageDone(character.damage, enemyArray[random_enemy].armor);
        eDamageDone = damageDone(enemyArray[random_enemy].damage, character.armor);

        //Deal damage to enemy
        enemyHealth -= cDamageDone;
        enemyStats.innerHTML = display_enemy_stats1(enemyHealth, enemyArray[random_enemy].armor, enemyArray[random_enemy].damage, enemyArray[random_enemy].special);
    }

    //check to see if enemy has died
    if (enemyHealth <= 0) {
        shopStatus = 0;
        spawnCount = 0;

        //if boss is active
        if (character.level >= bossArray[bossLevel].level) {

            eName = bossArray[bossLevel].name;

            //give random pet/equipment and add other rewards
            petAndEquipReward = random_reward3(6,3,weaponArray,armorArray,petArray)
            character.damage += petAndEquipReward.damage;
            character.exp += petAndEquipReward.exp + bossArray[bossLevel].exp;
            character.gold += petAndEquipReward.gold + bossArray[bossLevel].gold;
            character.armor += petAndEquipReward.armor;
            equipment_slot = document.getElementById(equipmentArray[bossLevel].slot);
            equipment_slot.innerHTML = petAndEquipReward.name

            //display rewards
            enemyStats.innerHTML = "Rewards: " + "<br>" + "Gold: +" + bossArray[bossLevel].gold + "<br>" + "EXP: +" + bossArray[bossLevel].exp + "<br>" + "Special: " + petAndEquipReward.name + "<br>" + "Info: " + petAndEquipReward.description;

            //increase bosses level
            bossLevel++;//Change boss level
        }
        //if boss is not active
        else {
            eName = enemyArray[random_enemy].name;

            //Give player gold and exp
            character.exp += enemyArray[random_enemy].exp;
            character.gold += enemyArray[random_enemy].gold;

            //display rewards
            enemyStats.innerHTML = "Rewards: " + "<br>" + "Gold: +" + enemyArray[random_enemy].gold + "<br>" + "EXP: +" + enemyArray[random_enemy].exp;
        }

        //if quest is active
        if (activeQuest == 1) {
            quest_objective_checker(chosenQuest, eName, questObjectives)
            //display quest objectives on screen
            activequestObj1.innerHTML = quest_display(chosenQuest.questObj1Text, questObjectives.questObj1);
            activequestObj2.innerHTML = quest_display(chosenQuest.questObj2Text, questObjectives.questObj2);
            activequestObj3.innerHTML = quest_display(chosenQuest.questObj3Text, questObjectives.questObj3);

            if (questObjectives.questObj1 == 0 && questObjectives.questObj2 == 0 && questObjectives.questObj3 == 0) {
                activequestObj1.innerHTML = "<span style='color:#FF1500;'> Mission Finished speak to " + chosenQuest.questGiver + "</span>";
                activequestObj2.innerHTML = "";
                activequestObj3.innerHTML = "";
            }
        }

        //Setup buttons
        item1Text.innerHTML = "Use Bomb!"; //change text to "Use Bomb"
        item2Text.innerHTML = "Use MedKit!"; //change text to "Use MedKit"
        spawnAndAttack.innerHTML = "Spawn Enemy!"; //Set text to display "Spawn Enemy!"
        shopAndRetreat.innerHTML = "Shop!"; //Set text to display "Shop!"
        spawnAndAttack.setAttribute("onClick", "javascript: spawnEnemy();"); //Set button to call spawnEnemy"
        shopAndRetreat.setAttribute("onClick", "javascript: shop();"); //Set button to call shop()"

        //Clear enemy and make victory message
        enemyimage.src = "Img/ruins.jpg";
        document.getElementById("enemyImage").appendChild(enemyimage)
        enemyName.innerHTML = "You have beat " + eName + "!";
        spawnCount = 0;

        //Check to see if player has leveled up and set max health
        character.health = give_health(character.health)
        character.level = check_level(character.level);
        character.max = check_maxhealth(character.max);

        //display character stats
        characterStats.innerHTML = display_charcter_stats1(character.level, character.armor, character.health, character.max, character.damage);
        characterStats2.innerHTML = display_charcter_stats2(character.exp, character.gold, character.medKit, character.bomb);
    } else {
        setTimeout(damage_to_character, 500);
        setTimeout(shake, 500, characterHTMLBox);
    }
}

function damage_to_character() {

    //Deal damage to player
    character.health -= eDamageDone;

    //set attack button
    spawnAndAttack.innerHTML = "Attack!"; //Set text to display "Spawn Enemy!"
    shopAndRetreat.innerHTML = "Retreat!"; //Set text to display "Shop!"
    shopAndRetreat.setAttribute("onClick", "javascript: retreat()"); //Set button to call spawnEnemy"
    spawnAndAttack.setAttribute("onClick", "javascript: attack();"); //Set button to call spawnEnemy"

    //display character stats
    characterStats.innerHTML = display_charcter_stats1(character.level, character.armor, character.health, character.max, character.damage);
    characterStats2.innerHTML = display_charcter_stats2(character.exp, character.gold, character.medKit, character.bomb);

    //Check to see if player has died
    if (character.health <= 0) {
        characterStats.innerHTML = "You Died!";
        characterStats2.innerHTML = "";

        //Setup buttons
        item1Text.innerHTML = ""; //change text to "Use Bomb"
        item2Text.innerHTML = ""; //change text to "Use MedKit"
        spawnAndAttack.innerHTML = ""; //Set text to display "Spawn Enemy!"
        shopAndRetreat.innerHTML = ""; //Set text to display "Shop!"
        spawnAndAttack.setAttribute("onClick", ""); //Set button to call spawnEnemy"
        shopAndRetreat.setAttribute("onClick", ""); //Set button to call shop()"
        item1Text.setAttribute("onClick", ""); //Set button to call spawnEnemy"
        item2Text.setAttribute("onClick", ""); //Set button to call shop()"

    }
}

function shake(div) {
    shakeCount += 1;
    div.style.marginTop = 5 + "px";
    if (shakeCount == 1) {
        setTimeout(shake2, 125, div);
    } else {
        shakeCount = 0;
        div.style.marginTop = 0 + "px";
    }

}

function shake2(div) {
    shakeCount += 1;
    div.style.marginTop = -5 + "px";
    setTimeout(shake, 125, div);
}
function nothing() { }
