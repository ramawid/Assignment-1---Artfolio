const greeting = document.getElementById('greeting');

// Change text color on mouseover
greeting.addEventListener('mouseover', function handleMouseOver() {
  greeting.style.color = 'lightpink';

});

// Change text color back on mouseout
greeting.addEventListener('mouseout', function handleMouseOut() {
  greeting.style.color = 'black';
});

