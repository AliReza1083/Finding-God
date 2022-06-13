const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    // header.style.backgroundSize = 200 - +window.pageYOffset/40+ '%';
    header.style.opacity = 1 - +window.pageYOffset/700+ '';
})



const nav = document.querySelector('nav');
const svg = document.querySelector('svg');


window.addEventListener('scroll', (e) => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    if (scrollValue >= 500) {
        navColor('#f2f2f2', 'black', '0 0 10px black');
        svg.style.display = 'block';
    } else {
        navColor('transparent', 'white', 'none')
        svg.style.display = 'none';
    }
})

const navColor = (bg, text, shadow) => {
    nav.style.backgroundColor = bg;
    nav.style.color = text;
    nav.style.boxShadow = shadow;
}