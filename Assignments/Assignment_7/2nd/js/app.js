let tip = document.getElementById("tip");
console.log("Total: $25.00")

function calculate_tip(){
    let tip_N=Number(tip.value)
    let new_Total = tip_N + 25
    console.log("Tip: $" + tip_N);
    console.log("New Total: $" + new_Total);
}
