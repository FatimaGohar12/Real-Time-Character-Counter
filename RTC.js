// grap textarea
const textAreaE = document.getElementById("textarea");

// grap totalCharacter
const TotalChar = document.getElementById("Tc");
// grap Remaining character
const RemanChar = document.getElementById("Rc");

textAreaE.addEventListener("keyup", () => {
  updateCout();


});
updateCout()
function updateCout() {
  TotalChar.innerText = textAreaE.value.length;
  RemanChar.innerText = textAreaE.getAttribute("maxlength") -textAreaE.value.length ;
}
