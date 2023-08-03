const incrementing = document.getElementById("plus");
const decrementing = document.getElementById("minus");
const reset = document.getElementById("reset");
let value = 0;
document.getElementById("value").innerHTML = `${value}`;
const increment = 1;
const decrement = -1;


incrementing.addEventListener('click', function() {
    value += increment;
    document.getElementById("value").innerHTML = `${value}`;
});

decrementing.addEventListener('click', function() {
    value += decrement;
    document.getElementById("value").innerHTML = `${value}`;
});

reset.addEventListener("click", function () {
  value = 0;
  document.getElementById("value").innerHTML = `${value}`;
});
