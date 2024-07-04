let plusBtn = document.querySelector(".plusBtn")
let minusBtn = document.querySelector(".minusBtn")
let p = document.querySelector("p")

plusBtn.addEventListener("click", function () {
    p.textContent = Number(p.textContent) + 1;
});

minusBtn.addEventListener("click", function () {
    p.textContent = Number(p.textContent) - 1;
});