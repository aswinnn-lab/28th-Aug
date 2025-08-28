function convert() {
  let value = parseFloat(document.getElementById("inputValue").value);
  let type = document.getElementById("conversionType").value;
  let result = 0;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "⚠ Please enter a number!";
    return;
  }

  if (type === "milesToKm") {
    result = value * 1.60934; // 1 mile = 1.60934 km
  } else if (type === "kmToMiles") {
    result = value / 1.60934;
  }

  document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}
