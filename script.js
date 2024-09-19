// Next Project

document.getElementById("card4").style.display = "none";
document.getElementById("skills").style.display = "none";


let email = document.getElementById("email").innerText;
let button = document.getElementById("copy-button")
function copy(){
  navigator.clipboard.writeText(email)
}
