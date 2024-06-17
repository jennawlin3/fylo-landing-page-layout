const newsletter = document.querySelectorAll("form");
const emailInput = document.querySelectorAll("input[type='email']");
const errorDiv = document.querySelectorAll(".error");
const pattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
let value = "";
let validForm = false;
let index = 0;

newsletter.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(validForm === true) {
            form.reset();
        } else {
            errorDiv[index].classList.remove("hide");
            emailInput[index].classList.add("invalid");
        }
    })
})

emailInput.forEach((input, i) => {
    input.addEventListener("input", (e) => {
        if(input.value === "") {
            errorDiv[i].classList.remove("hide");
            input.classList.add("invalid");
        } else {
            errorDiv[i].classList.add("hide");
            input.classList.remove("invalid");
            value = input.value;
            index = i;
            validateInput(value, i);
        }
    })
})

function validateInput(value ,i) {
    if(pattern.test(value)){
        validForm = true;
    } else {
        validForm = false;
    }
}