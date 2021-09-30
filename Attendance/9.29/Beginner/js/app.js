//in the setup function

let arr = [];
let deletedNums = [];

for(var i = 0; i < 100; i++) {
  arr[i] = i;

  if(i >= 51.0){
    deletedNums = deletedNums + "," + arr.splice(i, 1);
  }
}
console.log(arr);
console.log(deletedNums);