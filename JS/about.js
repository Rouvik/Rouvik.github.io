Circle = undefined; // no circle background used here so
                    // ignore

const txt1 = document.getElementById('text1');
const cards = document.querySelectorAll('.card');
const int = new IntersectionObserver((entries) => {  
  entries.forEach((e) => {
    if(e.isIntersecting) {
      e.target.classList.add(e.target.getAttribute('animStyle') || 'anim1');
      
      e.target.querySelectorAll('.showlater').forEach(element => {
        showDelayed(element, (element.getAttribute('delay') || 0));
      });
      
      e.target.querySelectorAll('.typed').forEach(ptag => {
        if(!ptag.visited)
        {
          typeText(ptag, 85, (ptag.getAttribute('delay') || 0));
          ptag.visited = true;
        }
      });
    }
  });
}, {
  root: document.querySelector('.scroll-container'),
  rootMargin: '100px',
  threshold: 1.0
});

cards.forEach(card => {
  int.observe(card);
});