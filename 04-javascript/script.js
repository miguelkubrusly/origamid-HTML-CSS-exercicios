const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  const y = String(parseFloat(event.y) - 6);
  const x = String(parseFloat(event.x) - 6);
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";
}

window.addEventListener("mousemove", seguirMouse);
