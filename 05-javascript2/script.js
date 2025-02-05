const btn = document.querySelector("button");
const add = () => {
  const div = document.querySelector("div");
  const num = parseInt(div.textContent);
  if (num >= 9) {
    console.log("Parei de adicionar =B");
  } else {
    div.textContent = String(num + 1);
  }
};

if (btn) {
  document.addEventListener("click", add);
}
