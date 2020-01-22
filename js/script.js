const bars = document.getElementById('bars');
const backdrop = document.getElementById('backdrop');
const sidedrawer = document.getElementById('sidedrawer');


bars.addEventListener('click', () => {
    backdrop.style.display = 'block'
    sidedrawer.classList.add('show')
})

backdrop.addEventListener('click', () => {
    sidedrawer.classList.remove('show')
    backdrop.style.display = "none"
})

let body = document.body;
const navbar = document.getElementById('navbar');
const about = document.getElementById('about-us')

function scrollFunction() {
    if (body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navbar.style.background = 'black'

    } else {
        navbar.style.background = 'transparent'
    }

}

window.onscroll = function () {
    scrollFunction()
};

const aboutImg = document.getElementById('about-img');
const aboutContent = document.getElementById('about-content')
const price = document.getElementById('price-list')

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if (scroll > 0) {
        aboutContent.style.transform = `translateY(-${scroll/30}%)`;
    }

    if (scroll > 300) {
        aboutImg.classList.add('fadeIn')
        // aboutImg.style.transform = `translateY(-${scroll/40}%)`

    } else {
        aboutImg.style.transform = `translateY(0px)`
        aboutImg.classList.remove('fadeIn')
    }

    if (scroll > 1100) {
        price.classList.add('show')
    } else {
        price.classList.remove('show')
    }
});