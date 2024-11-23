
//Dark Mode++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let darkmode = document.getElementById("darkmode");
let content = document.getElementById("dark");
let items = document.getElementsByClassName("dark");
let fonts = document.getElementsByClassName("font");
let table1 = document.querySelectorAll("#table_1 tr")

function chabgemode() {
    if (darkmode.src.includes("moon.png")) {
        darkmode.src = "Icons & Photos/light.png";
        document.body.style.backgroundColor = "black";
        content.style.backgroundColor = "black";
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = "#2C3A47";
        }
        for (let i = 0; i < fonts.length; i++) {
            fonts[i].style.color = "white"
        }
        for (let i = 0; i < table1.length; i++) {
            table1[i].style.color = "white"
        }
    } else {
        darkmode.src = "Icons & Photos/moon.png";
        document.body.style.backgroundColor = "rgba(243, 243, 243, 0.884)"
        content.style.backgroundColor = "rgba(243, 243, 243, 0.884)";
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < fonts.length; i++) {
            fonts[i].style.color = "black"
        }
        for (let i = 0; i < table1.length; i++) {
            table1[i].style.color = "black"
        }
    }
}




//File Reader++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let input = document.getElementById("input");
function input_file() {
    let img = document.querySelector(".img_input");
    let file = input.files[0];
    if (file && file.type.startsWith("image/")) {
        let reader = new FileReader();
        reader.onload = () => {
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file.");
    }
}



//popup+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let popup = document.getElementById("popup");
let popupopen = document.getElementById("openpopup");
let popupclose = document.getElementById("closepopup");
let popupOverlay = document.getElementById("popupOverlay"); // Overlay for background clicks

function openpopup() {
    popup.classList.add('open-popup');
    popupOverlay.style.display = "block";
}

function closepopup() {
    popup.classList.remove('open-popup');
    popupOverlay.style.display = "none"; 
}

popupopen.addEventListener("click", openpopup);
popupclose.addEventListener("click", closepopup);

popupOverlay.addEventListener("click", closepopup);




//add row in table ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let inputtext = document.getElementById("input1");
let inputdata = document.getElementById("input2");
let inputnum = document.getElementById("input3");
let options = document.getElementById("options"); 
let btn = document.getElementById("closepopup");
let table = document.getElementById("table_row").querySelector("tbody"); 


function createRow() {
    if (
        inputtext.value == "" ||
        inputdata.value == "" ||
        inputnum.value == ""
    ) {
        alert("Please fill in all fields!");
        return;
    }

    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    cell1.textContent = inputtext.value;
    cell2.textContent = inputdata.value;
    cell3.textContent = inputnum.value + options.value;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    table.appendChild(row);

    inputtext.value = "";
    inputdata.value = "";
    inputnum.value = "";
    options.value = ""; 
}

btn.addEventListener("click", createRow);


//___________________________________________________________________________________________________________________


//let logout = document.getElementById("logout");
//let logoutimg = document.getElementById("arrowicons");
//let logoutbtn = document.getElementById("logoutbtn"); 
//
//logoutimg.addEventListener("click", () => {
//    logout.classList.add('openlogout');
//    popupOverlay.style.display = "block"; 
//});
//
//function closeLogout() {
//    logout.classList.remove('closelogout'); 
//    popupOverlay.style.display = "none";  
//}
//
//logoutbtn.addEventListener("click", closeLogout);
//popupOverlay.addEventListener("click", closeLogout); 
