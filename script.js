// Get the modal
let modal1 = document.getElementById("modal-1");

let modal2 = document.getElementById("modal-2");

let modal3 = document.getElementById("modal-3");

let modal4 = document.getElementById("modal-4");

// Get the button that opens the modal
let btn1 = document.getElementById("img-1");

let btn2 = document.getElementById("img-2");

let btn3 = document.getElementById("img-3");

let btn4 = document.getElementById("img-4");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "flex";
}

btn2.onclick = function() {
  modal2.style.display = "flex";
}

btn3.onclick = function() {
  modal3.style.display = "flex";
}

btn4.onclick = function() {
  modal4.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
function span1() {
  modal1.style.display = "none";
}

function span2() {
  modal2.style.display = "none";
}

function span3() {
  modal3.style.display = "none";
}

function span4() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});

window.addEventListener('click', function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

window.addEventListener('click', function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});

window.addEventListener('click', function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
});



window.addEventListener('resize', () => { 
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
})