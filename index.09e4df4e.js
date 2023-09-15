"use strict";
const moreButton = document.querySelector(".banner__more");
const moreArrow = document.querySelector(".more-arrow");
const moreSection = document.querySelector(".more-than-gaming");
function openMoreSection() {
    moreSection.classList.toggle("active");
}
moreButton.addEventListener("click", openMoreSection);
moreArrow.addEventListener("click", openMoreSection);

//# sourceMappingURL=index.09e4df4e.js.map
