const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('text-box');
const toggleIcon = document.getElementById('toggle-icon')
const image4 = document.getElementById('image4')

//Dark images
function imageMode(color) {
    image1.src = `img1/Meditate-${color}.svg`
    image2.src = `img1/Cup Of Tea-${color}.svg`
    image3.src = `img1/Japan ${color}.svg`
    image4.src = `img1/Yin Yang ${color}.svg`
}

//function Toggle Dark Light Mode

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255/ 50%)';
    textbox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Dark Mode' : 'Light Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    isLight ? imageMode('Dark') : imageMode('Light')
}

//Dark Function 
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
//     textbox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
//     toggleIcon.children[0].textContent = 'Dark Mode'
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
//     imageMode('Dark');

// }

// //Lightmode Function
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
//     textbox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
//     toggleIcon.children[0].textContent = 'Light Mode'
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
//     imageMode('Light');
// }

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(false);
    }

}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)


//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    } else {
        toggleSwitch.checked = false;
        toggleDarkLightMode(false);

    }
}