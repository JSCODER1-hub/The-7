let controls = document.querySelectorAll(".recent .cho a");
let items = document.querySelectorAll(".recent .container .box div");

let burger = document.querySelector(".container .burger-icon");
let list = document.querySelector(".container ul.links");

list.classList.opacity = "0";
controls.forEach((control) => {
  control.onclick = function () {
    controls.forEach((control) => {
      control.classList.remove("active");
    });

    control.classList.add("active");

    items.forEach((item) => {
      if (!item.dataset.cat.includes(control.dataset.attr)) {
        item.style.opacity = "0";
        setTimeout(() => (item.style.display = "none"), 300);
      } else {
        item.style.display = "block";
        setTimeout(() => (item.style.opacity = "100"), 300);
      }
    });
  };
});

// Burger Icon Logic
burger.addEventListener("click", () => {
  // display list
  if (list.classList.contains("active")) {
    setTimeout(() => (list.style.opacity = "0"), 10);
    setTimeout(() => {
      list.classList.toggle("active");
      list.style.opacity = "1";
    }, 300);
  } else {
    list.classList.toggle("active");
    setTimeout(() => (list.style.opacity = "1"), 10);
  }
});
