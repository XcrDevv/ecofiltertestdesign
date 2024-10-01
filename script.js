const navDropdowns = document.querySelectorAll('.nav-dropdown .button');

const buyProduct = document.getElementById('buy-product');

const carouselDiv = document.querySelector('#carousel .content');
const carouselPrev = document.querySelector('#carousel .previous');
const carouselNext = document.querySelector('#carousel .next');

const commentsCarouselDiv = document.querySelector('#comments-carousel .content');
const commentsCarouselPrev = document.querySelector('#comments-carousel .previous');
const commentsCarouselNext = document.querySelector('#comments-carousel .next');

navDropdowns.forEach(element => {
    const closeArea = element.parentElement.querySelector('.close-area');
    element.addEventListener('click', () => {
        element.parentElement.setAttribute('data-open', '');
    });
    closeArea.addEventListener('click', () => {
        element.parentElement.removeAttribute('data-open');
    });
})


buyProduct.addEventListener('click', () => {
    console.log("buy now");
})

carouselPrev.addEventListener('click', () => {
    carouselDiv.scrollBy({ 
        behavior: 'smooth', 
        left: -1
    });
});

carouselNext.addEventListener('click', () => {
    carouselDiv.scrollBy({
        behavior: 'smooth', 
        left:  1
    });
});

commentsCarouselPrev.addEventListener('click', () => {
    commentsCarouselDiv.scrollBy({
        behavior: 'smooth', 
        left: -1
    });
});

commentsCarouselNext.addEventListener('click', () => {
    commentsCarouselDiv.scrollBy({
        behavior: 'smooth', 
        left:  1
    });
});

function updateDropdownPositions() {
    navDropdowns.forEach(element => {
        const content = element.parentElement.querySelector('.content');
        const xPosition = element.parentElement.getBoundingClientRect().x

        content.style.left = `calc(${-xPosition}px + 1rem)`
    })
}

window.addEventListener('resize', updateDropdownPositions);
window.addEventListener('scroll', updateDropdownPositions);
updateDropdownPositions();