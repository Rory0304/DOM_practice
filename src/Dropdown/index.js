const toggleButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const nextButton = document.querySelector('.next-button');
const pizzaImg = document.querySelector('img');
const form = document.querySelector('form');

/* 메뉴 내려오는 액션 */
function dropdownAction() {
    dropdownMenu.classList.toggle('show');
}

toggleButton.addEventListener('click', dropdownAction);

toggleButton.addEventListener('blur', function () {
    dropdownMenu.classList.remove('show');
})

/* 옵션 선택할 때 텍스트 바뀌는 액션 */
const dropdownOptions = document.querySelectorAll('.dropdown-option');

function selectOption(e) {
    const buttonLabel = e.target.textContent.trim();
    const selectPizza = e.target.value;
    const defaultImgSrc = "./assets"

    /* change selected option text */
    toggleButton.textContent = buttonLabel;
    toggleButton.classList.add('selected');

    /* change selected option img */
    switch (selectPizza) {
        case "hawaii_pizza":
            pizzaImg.src = defaultImgSrc + '/hawaii_pizza.png';
            break;
        case "rome_pizza":
            pizzaImg.src = defaultImgSrc + '/rome_pizza.png';
            break;
        case "sicilian_pizza":
            pizzaImg.src = defaultImgSrc + '/sicilian_pizza.png';
            break;
        case "chicago_pizza":
            pizzaImg.src = defaultImgSrc + '/chicago_pizza.png';
            break;
        default:
            pizzaImg.src = defaultImgSrc + '/pizza.png';
            break;
    }

    /* change selected option img animation */
    pizzaImg.animate([
        //keyframes
        { transform: 'translateY(-10px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 1000
    })

    pizzaImg.classList.add('changed');
    nextButton.removeAttribute('disabled');
}

// dropdownOptions.forEach(function (option) {
//     option.addEventListener('click', selectOption);
// })

dropdownMenu.addEventListener('click', selectOption);

function onSubmit() {
    const pizzaType = toggleButton.innerText;
    switch (pizzaType) {
        case "hawaii_pizza":
            form.action = 'chicagoPizza.html';
            break;
        case "rome_pizza":
            form.action = 'chicagoPizza.html';
            break;
        case "sicilian_pizza":
            form.action = 'chicagoPizza.html';
            break;
        case "chicago_pizza":
            form.action = 'chicagoPizza.html';
            break;
        default:
            form.action = 'chicagoPizza.html';
            break;
    }
}

nextButton.addEventListener('click', onSubmit);