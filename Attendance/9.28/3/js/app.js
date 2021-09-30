var n1 = 1;
var n2 = 1;
var n3 = 0;
var frames = 0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    if (n3 % 2 == 0) {
      fill("#fffb08");
      circle(n1, n2, 10);
    } else {
      fill("#08a4ff");
      circle(n1, n2, 10);
    }
    n3 = n1 + n2;
    n2 = n1;
    n1 = n3;
    console.log(n3);
  }
}