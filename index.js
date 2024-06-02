document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  const change = document.getElementById("change");

  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  change.addEventListener("click", () => {
    const newColor = randomColor();
    box.style.backgroundColor = newColor;
  });
});
