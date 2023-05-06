// first greeting
const first = document.querySelector(".first-greeting")

function firstFunc() {
  first.classList.remove("greeting-remover")
  first.classList.remove("greeting-none")
  setTimeout(function() {
    first.classList.add("greeting-none")
    setTimeout(function() {
      first.classList.add("greeting-remover")
    }, 1000)
  }, 5000)
}

// second greeting 
const second = document.querySelector(".second-greeting")

function secondFunc() {
  second.classList.remove("greeting-remover")
  second.classList.remove("greeting-none")
  setTimeout(function() {
    second.classList.add("greeting-none")
    setTimeout(function() {
      second.classList.add("greeting-remover")
    }, 1000)
  }, 5000)
}

// cookies checker 
// Überprüfen, ob ein Cookie vorhanden ist
if (document.cookie.indexOf("besuchteSeite=true") >= 0) {
  secondFunc();
} else {
  firstFunc();
  // Setzen des Cookies mit einer Gültigkeit von einem Monat
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "besuchteSeite=true;" + expires + ";path=/";
}

// klapp func von sec three
const listOne = document.querySelectorAll(".three-list-main")

function handleClick(event) {
    const currentEl = event.currentTarget;
    currentEl.lastElementChild.classList.toggle("three-show");
    currentEl.firstElementChild.lastElementChild.classList.toggle("three-rotate")
}
  
for (const each of listOne) {
    each.addEventListener("click", handleClick);
}

// klapp func von sec four
const listTwo = document.querySelectorAll(".four-list-main")

function handleClick(event) {
    const currentEl = event.currentTarget;
    currentEl.lastElementChild.classList.toggle("four-show");
    currentEl.firstElementChild.lastElementChild.classList.toggle("four-rotate")
}
  
for (const each of listTwo) {
    each.addEventListener("click", handleClick);
}

// up 
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

// Ziate von den Quellen kopieren
const textElements = document.querySelectorAll(".four-ref-main-text");

for (const element of textElements) {
  element.addEventListener("click", function(event) {
    event.stopPropagation();
    const text = event.target.innerText;
    navigator.clipboard.writeText(text).then(function() {
      window.open(`${element.previousElementSibling['href']}`)
    }, function() {
    });
  });
}