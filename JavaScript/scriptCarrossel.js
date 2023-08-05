const carrossel = document.querySelector(".listaDestinos");
const firstImg = carrossel.querySelectorAll(".divImg img")[0];
const arrowIcons = document.querySelectorAll(".arrow");
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 64;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
} 

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);