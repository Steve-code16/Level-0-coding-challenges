function convertToFahrenheit(num) {
    let fahrenheit = (num * 1.8) + 32;

    console.log(num + " degree celsius is equal to " + fahrenheit + " degree fahrenheit.");
}
convertToFahrenheit(-5);

function convertToCelsius(num) {
    let celsius = (num - 32) / 1.8;

    console.log(num + " degree fahrenheit is equal to " + celsius + " degree celsius.");
}
convertToCelsius(24);