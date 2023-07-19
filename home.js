function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const scaleSelect = document.getElementById('scaleSelect').value;
    let result;
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid temperature!');
      return;
    }
  
    if (scaleSelect === 'celsius') {
      // Convert Celsius to Fahrenheit
      result = (temperatureInput * 9/5) + 32;
    } else if (scaleSelect === 'fahrenheit') {
      // Convert Fahrenheit to Celsius
      result = (temperatureInput - 32) * 5/9;
    }
  
    // Display the result on the web page
    document.getElementById('result').innerText = `${result.toFixed(2)} °${scaleSelect === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
  }
  