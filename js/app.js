function setup() {
    var Skin_Color = "#f7f2d2";
    var Eyes_Color = "#ededed";
    var Shirt_1 = "#a83e40";
    var Pants_1 = "#414142";
    var Background_Color = "#ebfffb";
    var Smile = "#78787a";
    var Building_1 = "#703619";
    var Building_2 = "#6b5911";
    var Door = "#ffa447";

    createCanvas(800,600);
    background(Background_Color);

    //Building 1
    fill(Building_1);
    rect(100,50,300,400);
    fill(Door);
    rect(230,250,150,200); //Door

    //Building 2
    fill(Building_2);
    rect(500,80,150,200);
    fill(Door);
    rect(565,180,75,100); //Door

    //Character
    fill(Shirt_1);//Shirt torso
    rect(450,350,100,100);
    fill(Skin_Color);//Face
    circle(500,300,80);
    fill(Smile);//Smile
    line(500,350,550,350)
    fill(Eyes_Color);//Eye 1
    circle(470,280,20); 
    fill(Eyes_Color);//Eye 2
    circle(550,280,20);
    fill(Shirt_1);//Shirt right sleeve
    rect(550,365,20,70);
    fill(Shirt_1);//Shirt left sleeve
    rect(430,365,20,70);
    fill(Pants_1);//Pants right Leg
    rect(510,450,40,70);
    fill(Pants_1);//Pants left leg
    rect(450,450,40,70);

    //Frame
    stroke(0, 0, 0);
    strokeWeight(10);
    line(0,0,800,0);
    line(0,0,0,800);
    line(0,600,800,600);
    line(800,800,800,0);

}
