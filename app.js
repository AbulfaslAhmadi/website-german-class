const listOne = document.querySelectorAll(".three-list-main")

function handleClick(event) {
    const currentEl = event.currentTarget;
    currentEl.lastElementChild.classList.toggle("three-show");
    currentEl.firstElementChild.lastElementChild.classList.toggle("three-rotate")
}
  
for (const each of listOne) {
    each.addEventListener("click", handleClick);
}

const listTwo = document.querySelectorAll(".four-list-main")

function handleClick(event) {
    const currentEl = event.currentTarget;
    currentEl.lastElementChild.classList.toggle("four-show");
    currentEl.firstElementChild.lastElementChild.classList.toggle("four-rotate")
}
  
for (const each of listTwo) {
    each.addEventListener("click", handleClick);
}



const upBtn = document.querySelector(".up")
upBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

function toggleUpBtn() {
  const scrollPosition = window.scrollY;
  if (scrollPosition <= 1000) {
    upBtn.classList.add("up-none");
  } else {
    upBtn.classList.remove("up-none");
  }
}

window.addEventListener("scroll", toggleUpBtn);
