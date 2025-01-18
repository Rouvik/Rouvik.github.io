// const
const RANDOM_COLORS = ['rgb(95, 44, 248, 0.5)', 'rgb(255, 41, 126, 0.5)', 'rgb(198, 248, 51, 0.5)', 'rgb(23, 201, 255, 0.5)'];

// containers and cards
const container = document.querySelector('.container');
const containerChildren = [...container.children];

for (let i = 0; i < container.childElementCount; i++) {
    containerChildren[i].setAttribute('card-color', RANDOM_COLORS[~~(Math.random() * RANDOM_COLORS.length)]);
}

const observer = new IntersectionObserver((elemList) => {
    elemList.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.borderWidth = '5px';
            e.target.style.backgroundColor = e.target.getAttribute('card-color');
            e.target.classList.add('card-intersection');
        }
        else
        {
            e.target.style.borderWidth = '2px';
            e.target.style.background = 'transparent';
            e.target.classList.remove('card-intersection');
        }
    })
}, {
    root: container,
    rootMargin: '32px 0px 0px 0px',
    threshold: 0.95
});

containerChildren.forEach(e => {
    observer.observe(e);
});