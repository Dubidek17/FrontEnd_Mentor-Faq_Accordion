let buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        showAnswer(button);
    })
})

function showAnswer(button) {
    let buttonNumber = button.classList[1];
    let paragraph = document.querySelector(".p" + buttonNumber);
    paragraph.classList.toggle("hidden");

    buttons.forEach(function (button) {
        if (button.classList[2] == "img" && button.classList[1] == buttonNumber) {
            button.classList.toggle("hidden");
        }
    })
}