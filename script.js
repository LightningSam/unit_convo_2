function convert() {
    // Get the input value
    const value = parseFloat(document.getElementById('inputValue').value);

    // Get the selected conversion type
    const conversionType = document.getElementById('conversionType').value;

    // Initialize the result variable
    let result = 0;

    // Perform the conversion based on the selected type
    if (conversionType === 'milesToKm') {
        result = value * 1.60934; // Convert miles to kilometers
    } else if (conversionType === 'kmToMiles') {
        result = value / 1.60934; // Convert kilometers to miles
    }

    // Display the result with 2 decimal places
    document.getElementById('result').textContent = result.toFixed(2);
}