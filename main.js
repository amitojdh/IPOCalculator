// Wage Calculator

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let num1 = +document.getElementById("regularhr-in").value;
  let num2 = +document.getElementById("overtimehr-in").value;
  let num3 = +document.getElementById("rate-in").value;

  //Process
  let total = 1.5 * num3 * num2 + num1 * num3;
  //Output
  document.getElementById("output").innerHTML = total;
}
