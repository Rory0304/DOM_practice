const toggleButton = document.querySelector('.toogle_btn');
const link = document.querySelector('.link');
const sns = document.querySelector('.navbar_sns');
const menu = document.querySelector('.navbar_menu')

toggleButton.addEventListener('click', function () {
    sns.classList.toggle('active');
    menu.classList.toggle('active');
})
