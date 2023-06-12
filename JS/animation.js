const sc = document.querySelector('canvas'),
  cxt = sc.getContext('2d');
  
function getWindowDims() {
  let body = document.body,
      html = document.documentElement;

  let height = Math.max(body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.offsetHeight);

  let width = Math.max(body.offsetWidth, html.clientWidth, html.offsetWidth);
    
  return {width, height};
}

// SETUP
let idim = getWindowDims();
sc.width = idim.width;
sc.height = idim.height;
const DENSITY = 0.0001;
cxt.fillStyle = 'black';

delete idim;
idim = undefined;

window.onresize = () => {
  let dim = getWindowDims();
  sc.width = dim.width;
  sc.height = dim.height;
  
  cxt.fillStyle = Circle.color;
  
  let nelems = Math.floor(sc.width * sc.height * DENSITY);
  
  if(Circle.glb_arr.length > nelems) {
    Circle.glb_arr.length = nelems; // delete others
  } else {
    let olen = Circle.glb_arr.length;
    Circle.glb_arr.length = nelems; // make more room
    for(let i = olen; i < nelems; i++) {
      Circle.glb_arr[i] = new Circle();
    }
  }
  
  for (let circle of Circle.glb_arr) {
    circle.init();
  }
}


class Circle {
  static sc = null;
  static cxt = null;
  static M_2PI = Math.PI * 2;
  static glb_arr = null;
  static color = 'black';

  static setColor(color) {
    Circle.cxt.fillStyle = color;
    Circle.color = color;
  }

  init() {
    this.pos = {
      x: Math.floor(Math.random() * Circle.sc.width),
      y: Math.floor(Math.random() * Circle.sc.height)
    };

    this.vel = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    };

    this.radius = Math.floor(Math.random() * 7) + 3;

    return this;
  }

  static setScreen(sc) {
    Circle.sc = sc;
  }

  static setContext(cxt) {
    Circle.cxt = cxt;
  }

  update() {
    Circle.cxt.beginPath();
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    if (this.pos.x > Circle.sc.width || this.pos.x < 0) {
      this.pos.x -= this.vel.x;
      this.vel.x = -this.vel.x;
    }

    if (this.pos.y > Circle.sc.height || this.pos.y < 0) {
      this.pos.y -= this.vel.y;
      this.vel.y = -this.vel.y;
    }

    Circle.cxt.arc(this.pos.x, this.pos.y, this.radius, 0, Circle.M_2PI);
    Circle.cxt.fill();
  }
}

Circle.setScreen(sc);
Circle.setContext(cxt);
let circles = [];

for (let i = 0; i < sc.width * sc.height * DENSITY; i++) {
  circles.push(new Circle().init());
}

Circle.glb_arr = circles;

function animate() {
  cxt.clearRect(0, 0, sc.width, sc.height);
  for (let circle of circles) {
    circle.update();
  }
  requestAnimationFrame(animate);
}

animate();