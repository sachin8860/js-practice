let y = Math.floor(Math.random() * 10);
console.log(y)
function myFunction() {
    let x = document.getElementById("inpp").value;
    console.log(x);
    const msg = document.getElementById("result");
    // msg.innerHTML = "";
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < y) throw "too low";
        if (x > y) throw "too high";
        if (x == y) throw "guessed"
    }
    catch (err) {
        msg.innerHTML = "Input is " + err;
    }
}
function g(){
    document.getElementById("inpp").value="";
    document.getElementById("inpp").focus();
}