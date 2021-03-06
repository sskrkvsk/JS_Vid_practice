const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

function getRandomNumber() {
   return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
   window.hexColor = "#";
   for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
   }
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
});

function copyIt() {
   window.getSelection().selectAllChildren(color);
   document.execCommand("copy");

   /* Alert the copied text */
   let colorText = (color.textContent = "Copied!");
}
color.addEventListener("mousedown", copyIt);

color.addEventListener("mouseup", backToHex);

 function backToHex() {
   if (color.textContent = "Copied!") {
      color.textContent = hexColor;
   }
 }
