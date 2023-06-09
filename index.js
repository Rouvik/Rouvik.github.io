const container = document.querySelector('.container'),
      colorList = ['blue', 'red', 'golden', 'green'];

for (let child of container.children) {
    child.setAttribute('class', 'rcolor-' + colorList[Math.floor(Math.random() * colorList.length)]);
}

function changeMode(sel) {
  let root = document.querySelector(':root');
  if(sel.getAttribute('mode') == 'D') {
    sel.setAttribute('mode', 'L');
    sel.innerHTML = '&#xe518;';
    root.style.setProperty('--mcolor', 'white');
    root.style.setProperty('--mcolorrgb', 'rgba(0, 0, 0, 0.2)');
    root.style.setProperty('--mcontrast', 'black');
    Circle.setColor('rgb(0, 0, 0)');
  } else {
    sel.setAttribute('mode', 'D');
    sel.innerHTML = '&#xe51c;';
    root.style.setProperty('--mcolor', 'black');
    root.style.setProperty('--mcolorrgb', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--mcontrast', 'white');
    Circle.setColor('rgb(255, 255, 255)');
  }
}