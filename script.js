let randomNum = document.getElementById("random-number");
let ctaBtn = document.getElementById("cta-btn");

ctaBtn.addEventListener("click", generateNumber);

function generateNumber() {
    let newNumber = Math.floor(Math.random() * 100);
    randomNum.textContent = newNumber;
}

window.onload = generateNumber;
