const counter = document.querySelector(".counter-numbers");
let count = localStorage.getItem("storageCounter");

if (count === null) {
  count = 0;
}

count++;

localStorage.setItem("storageCounter", count);

counter.innerHTML = count.toString().padStart(5, 0);
