// get values from the UI
// start or controller function
function getValues() {
    // get values from UI
    let startValue = Number(document.querySelector('#startValue').value);
    let endValue = Number(document.querySelector('#endValue').value);

    // call generateNumbers()
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert('You must enter a number');
    }
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

