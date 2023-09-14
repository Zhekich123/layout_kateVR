"use strict";
console.log("Script is running");
const choosedQuanity = document.querySelector(".choosed-quanity");
const quanities = document.querySelectorAll(".dropdown-item--quanity");
function addQuanity(event) {
    const dataValue = event.target.dataset.value;
    choosedQuanity.textContent = dataValue; // Обратите внимание на замену innerHTML на textContent
    console.log("click");
}
quanities.forEach(function(quanity) {
    quanity.addEventListener("click", addQuanity);
});

//# sourceMappingURL=index.52dcd2c7.js.map
