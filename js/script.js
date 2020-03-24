///////////////
// VARIABLES //
///////////////

// Job Role options elements
const otherJobRole = document.getElementById('other-title');
otherJobRole.style.display = 'none';
const jobRole = document.getElementById('title');

// T-shirt info options elements
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
shirtColor.parentNode.style.display = 'none';
const shirtColorOptions = document.querySelectorAll('#color option');

// Activities registration elements
let totalValue = document.getElementById('total-value');
const activity = document.querySelectorAll('.activities input');
for (let i = 0; i < activity.length; i++) {
    activity[i].setAttribute('if-checked', 'false');
}
const activitiesSection = document.querySelector('.activities');
let addingValue = 0;

// Payment elements
const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
paypal.style.display = 'none';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';

//Validation selectors
const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
const jobRoleSelect = document.getElementById('title');
const otherJobRoleField = document.getElementById('other-title');
const activitiesInputs = document.querySelectorAll('.activities input');
const paymentMethodSelect = document.getElementById('payment');
const creditCardNumberField = document.getElementById('cc-num');
const zipCodeField = document.getElementById('zip');
const cvvField = document.getElementById('cvv');
const registerButton = document.querySelector('button');

//validation errors

const nameError = `<p class='error' id='name-error'> Name field can't be empty!</p>`;
const nameWarning = `<p class='warning' id='name-warning'>Name field must contain at least 3 characters.</p>`;

const emailError = `<p class='error'>Email field can't be empty!</p>`;
const emailWarning = `<p class='warning'>This is not valid email address!</p>`;

const jobRoleError = `<p class='error'>Please enter your job role!</p>`;
const jobRoleWarning = `<p class='warning'>Job Role field must contain at least 4 characters.</p>`;

const activitiesError = `<p class='error'>At least one activity must be selected!</p>`;

const paymentError = `<p class='error'>Please select payment method!</p>`;

const creditCardError = `<p class='error'>Please enter your credit card number!</p>`;
const creditCardWarning = `<p class='warning'>Credit card number must be 13-16 digits long.</p>`;

const zipError = `<p class='error'>Please enter your zip code</p>`;
const zipWarning = `<p class='warning'>Zip Code field must contain 5 digits.</p>`;

const cvvError = `<p class='error'>Please enter your card cvv</p>`;
const cvvWarning = `<p class='warning'>CVV field must contain 3 digits.</p>`;

//error divs

const nameErrorDiv = document.getElementById('name-alert-div');
const emailErrorDiv = document.getElementById('email-alert-div');
const jobroleErrorDiv = document.getElementById('jobrole-alert-div');
const activitiesErrorDiv = document.getElementById('activities-alert-div');
const paymentErrorDiv = document.getElementById('payment-alert-div');
const cardErrorDiv = document.getElementById('creditcard-alert-div');
const zipErrorDiv = document.getElementById('zip-alert-div');
const cvvErrorDiv = document.getElementById('cvv-alert-div');


// regex codes

const nameRegex = /^[a-z]{3,}$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const jobRoleRegex = /\w{3,}/;
const creditCardRegex = /^\d{13,16}$/;
const cvvRegex = /^[0-9]{3}$/;
const zipRegex = /^[0-9]{5}$/;

//////////////////////////
// VALIDATION FUNCTIONS //
//////////////////////////

const validating = (name, regexCode) => { //function for RegEx validation
    return regexCode.test(name)
};

////////////////////////////////
// VALIDATION EVENT LISTENERS //
////////////////////////////////

//name

nameField.addEventListener('input', () => { //adding event listener for name field
    if (nameField.value === '') { //checking if field is empty
        nameErrorDiv.innerHTML = nameError; //displaying error message
    } else if (validating(nameField.value, nameRegex) === false) { //checking if RegEx validation is failed
        nameErrorDiv.innerHTML = nameWarning; //displaying warning message
    } else { //checking if validation is successful
        nameErrorDiv.innerHTML = ''; //hiding message
    }
});

//email

emailField.addEventListener('input', () => { //adding event listener for email field
    if (emailField.value === '') { //checking if field is empty
        emailErrorDiv.innerHTML = emailError; //displaying error message
    } else if (validating(emailField.value, emailRegex) === false) { //checking if RegEx validation is failed
        emailErrorDiv.innerHTML = emailWarning; //displaying warning message
    } else { //checking if validation is successful
        emailErrorDiv.innerHTML = ''; //hiding message
    }
});

//job role

jobRoleSelect.addEventListener('change', () => { //adding event listener for job role select
    if (jobRole.options[jobRole.selectedIndex].text.toLowerCase() === 'other') {
        otherJobRoleField.addEventListener('input', () => { //adding event listener for job role field
            if (validating(otherJobRoleField.value, jobRoleRegex) === false) { //if RegEx validation is failed
                jobroleErrorDiv.innerHTML = jobRoleError; //displaying error message
            } else { //checking if validation is successful
                jobroleErrorDiv.innerHTML = ''; //hiding message
            }
        });
    }
});

// payment


if (paymentMethodSelect.options[paymentMethodSelect.selectedIndex].value.toLowerCase() === 'credit card') {
    creditCardNumberField.addEventListener('keyup', () => { //adding event listener for credit card number field
        if (creditCardNumberField.value === '') { //checking if field is empty
            cardErrorDiv.innerHTML = creditCardError; //displaying error message
        } else if (validating(creditCardNumberField.value, creditCardRegex) === false) { //if RegEx validation is failed
            cardErrorDiv.innerHTML = creditCardWarning; //displaying warning message
        } else { //checking if validation is successful
            cardErrorDiv.innerHTML = ''; //hiding message
        }
    });


    zipCodeField.addEventListener('keyup', () => { //adding event listener for zip code field
        if (zipCodeField.value === '') { //checking if field is empty
            zipErrorDiv.innerHTML = zipError; //displaying error message
        } else if (validating(zipCodeField.value, zipRegex) === false) { //if RegEx validation is failed
            zipErrorDiv.innerHTML = zipWarning; //displaying warning message
        } else { //checking if validation is successful
            zipErrorDiv.innerHTML = ''; //hiding message
        }
    });

    cvvField.addEventListener('keyup', () => { //adding event listener for cvv code field
        if (cvvField.value === '') { //checking if field is empty
            cvvErrorDiv.innerHTML = cvvError; //displaying error message
        } else if (validating(cvvField.value, cvvRegex) === false) { //if RegEx validation is failed
            cvvErrorDiv.innerHTML = cvvWarning; //displaying warning message
        } else { //checking if validation is successful
            cvvErrorDiv.innerHTML = ''; //hiding message
        }
    });
}

//register button

registerButton.addEventListener('click', (e) => { //adding event listener for register button
    if (validating(nameField.value, nameRegex) === false) { //if RegEx validation is failed
        nameErrorDiv.innerHTML = nameError; //displaying error message
        e.preventDefault() //preventing form submission
    }

    if (validating(emailField.value, emailRegex) === false) { //if RegEx validation is failed
        emailErrorDiv.innerHTML = emailError; //displaying error message
        e.preventDefault() //preventing form submission
    }

    if (jobRole.options[jobRole.selectedIndex].text.toLowerCase() === 'other') {
        if (validating(otherJobRoleField.value, jobRoleRegex) === false) { //if RegEx validation is failed
            jobroleErrorDiv.innerHTML = jobRoleError; //displaying error message
            e.preventDefault() //preventing form submission
        }
    }

    let count = 0; //count variable for checking activities
    for (let i = 0; i < activitiesInputs.length; i++) { //looping through activities
        if (activitiesInputs[i].checked) { //checking if activity was checked
            count++; //adding one to the count variable
        }
    }
    if (count === 0) { //checking if count is equal 0
        activitiesErrorDiv.innerHTML = activitiesError; //displaying error message
        e.preventDefault() //preventing form submission
    } else { //checking if validation is successful
        activitiesErrorDiv.innerHTML = ''; //hiding message
    }

    if (paymentMethodSelect.options[paymentMethodSelect.selectedIndex].value.toLowerCase() === 'credit card') { //checking if credit card payment was chosen

        if (validating(creditCardNumberField.value, creditCardRegex) === false) { //if RegEx validation is failed
            cardErrorDiv.innerHTML = creditCardError; //displaying error message
            e.preventDefault() //preventing form submission
        }

        if (validating(zipCodeField.value, zipRegex) === false) { //if RegEx validation is failed
            zipErrorDiv.innerHTML = zipError; //displaying error message
            e.preventDefault() //preventing form submission
        }

        if (validating(cvvField.value, cvvRegex) === false) { //if RegEx validation is failed
            cvvErrorDiv.innerHTML = cvvError; //displaying error message
            e.preventDefault() //preventing form submission
        }
    } else if (paymentMethodSelect.options[paymentMethodSelect.selectedIndex].value.toLowerCase() === 'select method') { //checking if payment was chosen
        paymentErrorDiv.innerHTML = paymentError; //displaying error message
        e.preventDefault() //preventing form submission
    }

});

////////////////////////////
// JOB ROLE FUNCTIONALITY //
////////////////////////////

jobRole.addEventListener('change', () => { //adding event listener to Job Role dropdown select
    const result = jobRole.options[jobRole.selectedIndex].text; //getting select text value
    if (result.toLowerCase() === 'other') { //checking if he selected option value is exual to other
        otherJobRole.style.display = 'initial'; //showing job role input
    } else {
        otherJobRole.style.display = 'none'; //hiding job role input
    }
});

///////////////////////////
// T-SHIRT FUNCTIONALITY //
///////////////////////////

shirtDesign.addEventListener('change', () => { //adding event listener to Shirt Design dropdown select
    shirtColor.parentNode.style.display = 'initial'; //displaying shirt color select if shirt design option is selected
    for (let i = 0; i < shirtColorOptions.length; i++) { //looping through the color options
        if (shirtColorOptions[i].textContent.includes(shirtDesign.options[shirtDesign.selectedIndex].textContent.substr(8)) !== true) {
            //if the selected design doesn't match available colors for this design the color option is disabled
            shirtColorOptions[i].setAttribute('disabled', '')
        } else {
            shirtColorOptions[i].removeAttribute('disabled');//else, the color option is active
        }
    }
});

//////////////////////////////////////
// ACTIVITIES SECTION FUNCTIONALITY //
//////////////////////////////////////

//adding total price //

activitiesSection.addEventListener('change', (e) => { //adding event listener to activities section

    const target = e.target; //selecting event target
    const targetPrice = target.getAttribute('data-cost'); //getting price from target element
    const targetState = target.getAttribute('if-checked'); //getting state of target element

    if (targetState === 'false') { //checking if targetState is false
        addingValue = addingValue + parseInt(targetPrice); //adding value of target to addingValue variable
        target.setAttribute('if-checked', 'true'); //setting target attribute to true
    } else if (targetState === 'true') { //checking if targetState is true
        addingValue = addingValue - parseInt(targetPrice); //subtracting value of target to addingValue variable
        target.setAttribute('if-checked', 'false'); //setting target attribute to false
    }
    totalValue.innerText = `Total: ${addingValue}$`; // setting total value to addingValue
});


//disabling overlaping events //

activitiesSection.addEventListener('click', (e) => { //adding event listener to activities section
    const target = e.target; //selecting event target
    const targetTime = target.getAttribute('data-day-and-time'); //getting event time from target element

    for (let i = 0; i < activity.length; i++) { //looping through activity elements
        if (activity[i].getAttribute('disabled') === 'true' && activity[i].getAttribute('data-day-and-time') === targetTime) {
            // checking if checkbox is disabled and if it's value matches value of target
            activity[i].removeAttribute('disabled'); // removing disabled attribute
            activity[i].parentNode.style = 'color:initial' //setting text color to initial
        } else if (targetTime === null) { //checking if target time is null
            break //breaking
        } else if (activity[i].getAttribute('data-day-and-time') === targetTime && activity[i] !== target) {
            // checking if checkbox value matches value of target and if activity is not a target
            activity[i].setAttribute('disabled', 'true'); // adding disabled attribute
            activity[i].parentNode.style = 'color:lightgray' //setting text color to lightgray
        }
    }
});

////////////////////////////////////
// PAYMENTS SECTION FUNCTIONALITY //
////////////////////////////////////

paymentMethod.addEventListener('change', () => { //adding event listener for payment section
    let paymentChoice = paymentMethod.options[paymentMethod.selectedIndex].value; //getting selected payment method
    const paymentTypes = document.querySelectorAll('fieldset:nth-of-type(4) > div'); //getting all the payment divs

    for (let i = 0; i < paymentTypes.length; i++) { //looping through all the payment divs
        paymentTypes[i].style.display = 'none'; //setting display to none
        if (paymentChoice === 'credit card') { //checking if credit card is selected
            creditCard.style.display = ''; //showing credit card payment method
        } else if (paymentChoice === 'paypal') { //checking if paypal is selected
            paypal.style.display = ''; //showing paypal payment method
            creditCard.style.display = 'none'
        } else if (paymentChoice === 'bitcoin') { //checking if bitcoin is selected
            bitcoin.style.display = ''; //showing bitcoin payment method
            creditCard.style.display = 'none'
        }
    }
});

