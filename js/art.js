var width, height;
class Point {
  constructor() {
    this.cx = Math.random() * width;
    this.cy = Math.random() * height;
    this.tx = 0;
    this.ty = 0;
  }
  click() {
    this.tx = Math.random() * width;
    this.ty = Math.random() * height;
  }
  lerp() {
    this.cx += (this.tx - this.cx) * 0.1;
    this.cy += (this.ty - this.cy) * 0.1;
  }
}

function fitToContainer(canvas) {
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

export default function initCanvasArt(root) {
  // set canvas
  const canvas = root.getElementById("c");
  const ctx = canvas.getContext("2d");
  fitToContainer(canvas);
  const points = new Set();

  // set new targets
  const click = () => {
    ctx.clearRect(0, 0, width, height);
    for (let p of points) p.click();
  };

  // resize canvas
  const resize = () => {
    width = canvas.width = canvas.offsetWidth * 1;
    height = canvas.height = canvas.offsetHeight * 1;
    ctx.strokeStyle = "#757da9";
    ctx.lineWidth = 0.1;
    click();
  };

  window.addEventListener("resize", resize, false);
  canvas.addEventListener("click", click, false);

  // main loop
  const run = () => {
    requestAnimationFrame(run);
    ctx.beginPath();
    for (let p of points) {
      p.lerp();
      ctx.lineTo(p.cx, p.cy);
    }
    ctx.stroke();
  };

  // let's go
  resize();
  for (let i = 0; i < 2; i++) points.add(new Point());
  click();
  run();

  const int = setInterval(click, 2000);
}
