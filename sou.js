function add() {
let n = document.getElementById("n").value;
let r = document.getElementById("r").value;
let c = document.getElementById("c").value;

if(n=="" || r=="" || c=="") {
    alert("Fill all fields");
} else {
    data.innerHTML += "<tr><td>"+n+
    "</td><td>"+r+"</td><td>"+c+"</td></tr>";
}
}