const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 100;
const center = { x: canvas.width / 2, y: canvas.height / 2 };
const r = 1000;
let O1 = 0;
let O2 = 0;

function Animate() {
  const x1 = center.x + r * Math.cos((O1 * Math.PI) / 180);
  const y1 = center.y + r * Math.sin((O1 * Math.PI) / 180);
  const x = x1 + (r / 10) * Math.cos((O2 * Math.PI) / 180);
  const y = y1 + (r / 10) * Math.sin((O2 * Math.PI) / 180);

  ctx.beginPath();
  ctx.arc(x1, y1, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#00ff00";
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 0;
  ctx.fill();

  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#00ffff";
  ctx.fill();
  ctx.stroke();

  O1 += 1 / 1;
  O2 += 24 / 1;
  console.log(O1);
  if (O1 >= 360) return;
  requestAnimationFrame(Animate);
}
Animate();
