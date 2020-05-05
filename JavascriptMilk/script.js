const grid = document.querySelector("#context");
const squares = document.querySelectorAll('.square');



function changeOpacity(event) {
  if (event.target.id == 'square1') {
  if (event.target.className == 'square') {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundImage = "url('media/cartooncow.gif')";
      squares[i].style.backgroundPosition = "top";
    }
    event.target.style.opacity = '0';
    event.target.addEventListener('mouseout', resetOpacity, false);
  }
  event.stopPropagation();
}

if (event.target.id == 'square2') {
if (event.target.className == 'square') {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundImage = "url('media/cowhair.gif')";
    squares[i].style.backgroundPosition = "center";
  }
  event.target.style.opacity = '0';
  event.target.addEventListener('mouseout', resetOpacity, false);
}
event.stopPropagation();
}

if (event.target.id == 'square3') {
if (event.target.className == 'square') {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundImage = "url('media/milkliquid.gif')";
  }
  event.target.style.opacity = '0';
  event.target.addEventListener('mouseout', resetOpacity, false);
}
event.stopPropagation();
}
}

function resetOpacity() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.opacity = '1';
  }
}

grid.addEventListener('mouseover', changeOpacity, false);
