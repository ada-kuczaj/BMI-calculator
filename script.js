{
    const calculateBMI = () => {
        const heightInput = document.querySelector(".js-height");
        const weightInput = document.querySelector(".js-weight");

        const height = heightInput.value;
        const weight = weightInput.value;

        return weight / ((height / 100) ** 2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const result =  calculateBMI();  
        updateResultText(result);
    };

    const updateResultText = (result) => {
        const bmiResult = document.querySelector(".js-bmiResult");
        bmiResult.innerText = result.toFixed(2);
    }

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}