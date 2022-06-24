const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    // header.style.backgroundSize = 200 - +window.pageYOffset/40+ '%';
    header.style.opacity = 1 - +window.pageYOffset/700+ '';
})


const nav = document.querySelector('nav');
const navToggle = document.querySelector('ul');
const navToggle2 = document.querySelector('.ul');
const textLink = document.querySelectorAll('ul li a');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    const toggling = navToggle.getAttribute('aria-toggle');
    
    if(toggling === 'false') {
        navToggle.setAttribute('aria-toggle', true);
    } else {
        navToggle.setAttribute('aria-toggle', false);
    }
})



const h1 = document.querySelector('nav > h1');
const svg = document.querySelector('svg');
const linkText = document.querySelectorAll('.linkText');

window.addEventListener('scroll', (e) => {
    const scrollValue = window.scrollY;

    if (scrollValue >= 500) {
        navColor('#f2f2f2', 'black', '0 0 10px black');
        svg.style.display = 'block';
        textColor('black')
        // linkTextColor(linkText, 'linkColorChange', 'black');
    } else {
        navColor('transparent', 'white', 'none')
        svg.style.display = 'none';
        textColor('white')
        // linkTextColor(linkText, 'linkColorChange', 'white');
    }
})

const textColor = (styleName, bg) => {
    h1.style.color = styleName;
    button.style.color = styleName;
}

const navColor = (bg, text, shadow) => {
    nav.style.backgroundColor = bg;
    nav.style.color = text;
    nav.style.boxShadow = shadow;
}




const linkAnimation = (querySelector, items, animationName = 'none') => {
    querySelector.forEach(items => {
        items.style.animationName = animationName;
    })
}

