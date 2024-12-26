function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("opp").value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers";
        return;
    }

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'product':
            result = num1 * num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        case 'quotient':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        case 'square':
            result = Math.pow(num1, 2);
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").textContent = result;
}
