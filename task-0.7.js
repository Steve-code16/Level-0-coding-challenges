function convertToFahrenheit(num) {
    let fahrenheit = (num * 1.8) + 32;

    return num + " degree celsius is equal to " + fahrenheit + " degree fahrenheit.";
};

console.log(convertToFahrenheit(-5));

function convertToCelsius(num) {
    let celsius = (num - 32) / 1.8;

    return num + " degree fahrenheit is equal to " + celsius + " degree celsius.";
};

console.log(convertToCelsius(24));