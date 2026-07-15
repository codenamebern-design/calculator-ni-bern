// Get the display element
const display = document.getElementById("display");

ShowOnDisplay = (input) => {
  display.value += input;
};

calculate = () => {
  try {
    display.value = eval(display.value);
    display.style.color = "green";
  } catch (mali) {
    display.value = "Error";
    display.style.color = "red";
  }
};

clearDisplay = () => {
  display.value = "";
  display.style.color = "black";
};
