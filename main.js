let lists = document.querySelectorAll("li");
let counter = 0;

var loop = setInterval(() => {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.background = "none";

  }
  lists[counter].style.background = "red";
  counter++;
  if (counter === 5) {
    counter = 0;
  }
}, 800);