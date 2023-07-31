let heightInput = document.querySelector(".js-height");
let weightInput = document.querySelector(".js-weight");
let form = document.querySelector(".js-form");
let bmiResult = document.querySelector(".js-bmiResult");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    let height = heightInput.value;
    let weight = weightInput.value;

    let result = weight / ((height / 100) ** 2);

    bmiResult.innerText = result.toFixed(2);
})