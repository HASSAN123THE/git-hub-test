let input1signin = document.getElementById("input1signin");
let input2signin = document.getElementById("input2signin");
let btnsignin = document.getElementById("btnsignin");
let signup = document.getElementById("p");


function changepage() {
    if (input1signin.value.trim() === "" || input2signin.value.trim() === "") {
        alert("Please fill in all fields.");
    } else {
        window.location.href = "index.html"; 
    }
}
function changepagetocreate() {
    window.location.href = "create.html"; 

}


