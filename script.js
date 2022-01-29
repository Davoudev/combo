let h = document.getElementById("h");
const message = document.querySelector(".message");
const gamearea = document.querySelector(".game");
const button = document.querySelector("button");
let gameplay = false;
let score = 0;

button.addEventListener("click", fun);
function fun() {
  if (!gameplay) {
    gameplay = true;
    maker();

    button.innerHTML = "check combo";

    score = 0;
  } else {
    score++;

    message.innerHTML = "guess" + score;

    const numbers = document.querySelectorAll(".numb");

    let wincondition = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";

        wincondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";

        numbers[i].style.backgroundColor = color;

        numbers[i].style.color = "black";
      }
      if (wincondition == numbers[i].length) {
    
      
      }
    }
  }
}

function maker() {
  for (let x = 0; x < 5; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "15vw";
    el.style.height = "5vh";
    el.classList.add("numb");
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    el.order = x;
    gamearea.appendChild(el);
  }
}