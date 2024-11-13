const checkbox = document.getElementById('checkbox');
const output = document.getElementById('output');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    function checkCheckbox() {
        if (checkbox.checked) {
            return true;
        } else {
            return false;
        }
    }

    const ageInput = document.getElementById('ageinput').value;

    let raceNumber = Math.floor(Math.random() * 1000);

    let registeredEarly = checkCheckbox();

    let runnerAge = ageInput;

    if (runnerAge > 18 && registeredEarly) {
        raceNumber += 1000;
    }

    if (runnerAge > 18 && registeredEarly) {
        output.innerHTML = 'Runner ' + raceNumber + ', your race will begin at 9:30 am.';
    } else if (runnerAge > 18 && !registeredEarly) {
        output.innerHTML = 'Late adults run at 11:00 am';
    } else if (runnerAge < 18) {
        output.innerHTML = 'Youth registrants run at 12:30 pm (regardless of registration)';
    } else if (runnerAge = 18) {
        output.innerHTML = 'See the registration desk';
    }

});
