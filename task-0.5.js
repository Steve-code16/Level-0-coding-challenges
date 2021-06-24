function areaOfTriangle(num1, num2, num3) {
    // Used Heron's formula
    let sides = (num1 + num2 + num3) / 2;

    let area = Math.sqrt(sides * ((sides - num1) * (sides - num2) * (sides - num3)));

    return area;
};

areaOfTriangle(3, 4, 5);
// Formula only works if we know the values of all the sides