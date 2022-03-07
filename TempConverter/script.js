let v = document.getElementById("cel-div");
let u = document.getElementById("feh-div");

function visi() {
    if (v.classList.contains("show")) {
        v.classList.remove("show");

    }
    else {
        v.classList.add("show");
        u.classList.remove("show");

    }
    document.getElementById("result").innerHTML = "";
    document.getElementById("inp").value = "";

}
function visi1() {
    if (u.classList.contains("show")) {
        u.classList.remove("show");

    }
    else {
        v.classList.remove("show");
        u.classList.add("show");

    }
    document.getElementById("result1").innerHTML = "";
    document.getElementById("inp1").value = "";

}

function ctof(c) {
    if (c == "") {
        document.getElementById("result").style.display = "none";
    }
    else {
        document.getElementById("result").style.display = "block";

    }
    document.getElementById("result").innerHTML = (c + "° Celsius is = " + ((c * 9 / 5) + 32) + "°F");
}
function ftoc(f) {
    if (f == "") {
        document.getElementById("result1").style.display = "none";
    }
    else {
        document.getElementById("result1").style.display = "block";
    }
    document.getElementById("result1").innerHTML = (f + "° Fahrenheit is = " + ((f - 32) * 5 / 9).toFixed(2) + "°C");
}