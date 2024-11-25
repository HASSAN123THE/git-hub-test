
let input1signin = document.getElementById("input1signin")
let input2signin = document.getElementById("input2signin")
let input3signin = document.getElementById("input3signin")
let input4signin = document.getElementById("input4signin")
let btn = document.getElementById("btnsignin")
let p = document.getElementById("p")


function changepage() {
    if (input1signin.value.trim() === "" || input2signin.value.trim() === "" || input3signin.value.trim() === "" || input4signin.value.trim() === "")  {
        alert("Please fill in all fields.");
    }
    else{
        window.location.href = "index.html";
    }
}

function changepagetologin() {
    window.location.href = "login.html";
}