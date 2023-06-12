// programmatically type out some text content in a target element
function typeText(target, speed, delay = 0) {
  let chars = target.textContent.trim().split('');
  target.innerText = ''; // clean to display
  
  target.style.visibility = 'visible'; // make viewable to dom
  
  setTimeout(() => {
    for(let i = 0; i < chars.length; i++) {
      (function f(i, char) {
        setTimeout(() => {
          target.textContent += char;
        }, i * speed);
      })(i, chars[i]);
    }
  }, delay);
}

// not typr specific, just displays a hidden content after a given delay
function showDelayed(target, delay) {
  setTimeout(() => {
    target.style.animationName = 'setVisible';
  }, delay);
}