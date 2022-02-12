const vectorsUp = ['Navbar', 'Hero', 'Footer', 'video', 'mainText', 'footerP1', 'footerP2', 'footerP3', 'btn2'];
const vectorsRight = ['logo', 'nav1', 'nav2', 'nav3', 'cta', 'heroImgAfter', 'video', 'mainText', 'content', 'and', 'structure'];
const vectorsLeft = ['title', 'tagline']

const animateBtn = document.getElementById('btn1');
const themeBtn = document.getElementById('btn2');

animateBtn.onclick = (e) => {
    animateBtn.style.display = 'none';
    for (item in vectorsUp) {
        document.getElementById(vectorsUp[item]).classList.add('animateUp');
    }
    for (item in vectorsRight) {
        document.getElementById(vectorsRight[item]).classList.add('animateRight');
    }
    for (item in vectorsLeft) {
        document.getElementById(vectorsLeft[item]).classList.add('animateLeft');
    }
}

const customize = () => {
    console.log('click');
    let customizeText = document.getElementById('customization');
    if (!customizeText.classList.contains('animateRight')) {
        document.getElementById('customization').classList.add('animateRight');
    }
    console.log(customizeText);
    document.documentElement.style.setProperty('--themeDark', getColor());
    document.documentElement.style.setProperty('--themeMedium', getColor());
    document.documentElement.style.setProperty('--themeLight', getColor());
    document.documentElement.style.setProperty('--themeLighter', getColor());
}

const getColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    return `#${color}`;
}

themeBtn.addEventListener('click', customize);