const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    // header.style.backgroundSize = 200 - +window.pageYOffset/40+ '%';
    header.style.opacity = 1 - +window.pageYOffset/700+ '';
})


const navContent = document.querySelector('#nav-contents');
const nav = document.querySelector('nav');
const svg = document.querySelector('svg');
const video = document.querySelector('video');
const linkText = document.querySelectorAll('.linkText');

window.addEventListener('scroll', (e) => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    if (scrollValue >= 500) {
        navColor('#f2f2f2', 'black', '0 0 10px black');
        svg.style.display = 'block';
        // linkTextColor(linkText, 'linkColorChange', 'black');
    } else {
        navColor('transparent', 'white', 'none')
        svg.style.display = 'none';
        // linkTextColor(linkText, 'linkColorChange', 'white');
    }
})
const linkTextColor = (colors, color, colorName) => {
    colors.forEach(color => {
        color.style.color = colorName;
    })
}
const navColor = (bg, text, shadow) => {
    nav.style.backgroundColor = bg;
    nav.style.color = text;
    nav.style.boxShadow = shadow;
}





const show = document.querySelectorAll('i')[0];
const close = document.querySelectorAll('i')[1];
const a = document.querySelectorAll('a');

show.addEventListener('click', (e) => {
    navContent.style.width = '100%';
    navContent.style.borderRadius = '0%';
    linkAnimation(a, 'links', 'linkA');
})
close.addEventListener('click', (e) => {
    navContent.style.width = '0%';
    navContent.style.borderRadius = '50% 0 0 50%';
    linkAnimation(a, 'links');
})

const linkAnimation = (querySelector, items, animationName = 'none') => {
    querySelector.forEach(items => {
        items.style.animationName = animationName;
    })
}

