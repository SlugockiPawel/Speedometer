// get values from the UI
// start or controller function
function getValues() {
    let startValue = document.querySelector('#startValue').value;
    let endValue = document.querySelector('#endValue').value;

    if (validateValues(startValue, endValue)) {
        // call generateNumbers()
        let numbers = generateNumbers(startValue, endValue);

        // call displayNumbers()
        displayNumbers(numbers);
    } else {
        // clean results if incorrect values entered
        document.querySelector('#results').innerHTML = "";
    }
}

// validate input values
function validateValues(startValue, endValue) {
    // validate if input values are type of numbers
    if (Number.isNaN(startValue) || Number.isNaN(endValue)) {
        alert('You must enter a number');
    }

    // validate if ending value is greater than or equal to starting value
    if (startValue > endValue) {
        alert('Ending Value has to be greater than or equal to Starting Value');
    }

    return true;
}

// generate numbers from startValue to endValue
// logic function(s)
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // get all numbers from startValue till endValue
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

// display values to the UI
// display or view function(s)
function displayNumbers(numbers) {
    let templateRows = "";

    for (let number of numbers) {
        if (number % 2 === 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }
    }

    document.querySelector('#results').innerHTML = templateRows;
}