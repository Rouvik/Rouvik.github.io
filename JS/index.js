const container = document.querySelector('.container'),
      colorList = ['blue', 'red', 'golden', 'green'];

for (let child of container.children) {
    child.setAttribute('class', 'rcolor-' + colorList[Math.floor(Math.random() * colorList.length)]);
}