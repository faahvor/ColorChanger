document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const change = document.getElementById("change");
  
    const randomColor = () => {
      const letters = "0123456789ABCDEF";
      return '#' + Array.from({length: 6}).map(() => letters[Math.floor(Math.random() * 16)]).join('');
    };
  
    change.addEventListener("click", () => {
      box.style.backgroundColor = randomColor();
    });
  });
  