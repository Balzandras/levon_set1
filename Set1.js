// 1. MAXIMUM ELEMENT JS
function findMax(arr) {
    return Math.max(...arr);
}

function displayMax() {
    // Get the input value and split it into an array
    const input = document.getElementById("maxArrayInput").value;
    const numArray = input.split(',').map(Number); // Convert string inputs to numbers

    // Find the maximum element
    const maxElement = findMax(numArray);

    // Display the result on the webpage
    document.getElementById("output1").innerText = "The maximum element is: " + maxElement;
}

// 2. Function to find indices of two numbers that add up to the target
function calculateTwoSum() {
    // Get the input values
    let arrayInput = document.getElementById("twoSumArrayInput").value.split(',').map(Number);
    let target = parseInt(document.getElementById("targetInput").value);
    let output = document.getElementById("output2");

    // Validate input
    if (arrayInput.some(isNaN) || isNaN(target)) {
        output.innerHTML = "Please enter valid numbers.";
        return;
    }

    // Create a map to store the indices of the numbers
    let numMap = new Map();

    // Loop through the array
    for (let i = 0; i < arrayInput.length; i++) {
        let complement = target - arrayInput[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // Display the result using template literals
            output.innerHTML = `Indices: [${numMap.get(complement)}, ${i}]`;
            return;
        }

        // Store the index of the current number in the map
        numMap.set(arrayInput[i], i);
    }

    // If no solution is found, display a message
    output.innerHTML = "No two numbers add up to the target.";
}

// 3. CALCULATOR JS
let chosenOperator = '';

function registerUser() {
    // Get user inputs
    const name = document.getElementById('name').value;
    chosenOperator = document.getElementById('operator').value;

    // Simple validation to check if fields are filled
    if (name && chosenOperator) {
        // Hide signup and show calculator
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('calculator-section').style.display = 'block';

        // Display the selected operation and user's name
        document.getElementById('userName').innerText = name;
        document.getElementById('chosenOperator').innerText = 
            chosenOperator === '+' ? 'Addition' : 
            chosenOperator === '-' ? 'Subtraction' : 'Multiplication';
    } else {
        alert("Please fill in all fields.");
    }
}

function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Perform the chosen operation
    if (chosenOperator === '+') {
        result = input1 + input2;
    } else if (chosenOperator === '-') {
        result = input1 - input2;
    } else if (chosenOperator === '*') {
        result = input1 * input2;
    }

    // Display the result
    document.getElementById('output3').value = result;
}
