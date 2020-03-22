///////////////
// VARIABLES //
///////////////

// Job Role options elements
const otherJobRole = document.getElementById('other-title');
otherJobRole.style.display ='none';
const jobRole = document.getElementById('title');

// T-shirt info options elements
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
shirtColor.parentNode.style.display = 'none';
const shirtColorOptions = document.querySelectorAll('#color option');

// Activities registration elements
let totalValue = document.getElementById('total-value');
const activity = document.querySelectorAll( '.activities input');
for(let i = 0; i < activity.length; i++) {
    activity[i].setAttribute('if-checked','false');
}
const activitiesSection = document.querySelector('.activities');
let addingValue = 0;

// Payment elements
const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
creditCard.style.display= 'none';
const paypal = document.getElementById('paypal');
paypal.style.display= 'none';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display= 'none';


////////////////////////////
// JOB ROLE FUNCTIONALITY //
////////////////////////////

jobRole.addEventListener('change', () =>{ //adding event listener to Job Role dropdown select
    const result =  jobRole.options[jobRole.selectedIndex].text; //getting select text value
    if(result.toLowerCase() === 'other') { //checking if he selected option value is exual to other
        otherJobRole.style.display ='initial'; //showing job role input
    } else {
        otherJobRole.style.display ='none'; //hiding job role input
    }
});

///////////////////////////
// T-SHIRT FUNCTIONALITY //
///////////////////////////

shirtDesign.addEventListener('change', () => { //adding event listener to Shirt Design dropdown select
    shirtColor.parentNode.style.display = 'initial'; //displaying shirt color select if shirt design option is selected
    for(let i = 0; i < shirtColorOptions.length; i++){ //looping through the color options
        if(shirtColorOptions[i].textContent.includes(shirtDesign.options[shirtDesign.selectedIndex].textContent.substr(8)) !== true){
            //if the selected design doesn't match available colors for this design the color option is disabled
            shirtColorOptions[i].setAttribute('disabled','')
        }else {
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

    if(targetState === 'false') { //checking if targetState is false
        addingValue = addingValue + parseInt(targetPrice); //adding value of target to addingValue variable
        target.setAttribute('if-checked', 'true'); //setting target attribute to true
    } else if(targetState === 'true') { //checking if targetState is true
        addingValue = addingValue - parseInt(targetPrice); //subtracting value of target to addingValue variable
        target.setAttribute('if-checked', 'false'); //setting target attribute to false
    }
    totalValue.innerText= `Total: ${addingValue}$`; // setting total value to addingValue
});


//disabling overlaping events //

activitiesSection.addEventListener('click', (e) => { //adding event listener to activities section
    const target = e.target; //selecting event target
    const targetTime = target.getAttribute('data-day-and-time'); //getting event time from target element

    for(let i = 0; i < activity.length; i++) { //looping through activity elements
         if (activity[i].getAttribute('disabled') === 'true' && activity[i].getAttribute('data-day-and-time') === targetTime){
             // checking if checkbox is disabled and if it's value matches value of target
             activity[i].removeAttribute('disabled'); // removing disabled attribute
             activity[i].parentNode.style= 'color:initial' //setting text color to initial
         } else if (targetTime === null) { //checking if target time is null
             break //breaking
         } else if (activity[i].getAttribute('data-day-and-time') === targetTime && activity[i] !== target) {
             // checking if checkbox value matches value of target and if activity is not a target
             activity[i].setAttribute('disabled','true'); // adding disabled attribute
             activity[i].parentNode.style= 'color:lightgray' //setting text color to lightgray
         }
    }
});

////////////////////////////////////
// PAYMENTS SECTION FUNCTIONALITY //
////////////////////////////////////

paymentMethod.addEventListener('change', () => { //adding event listener for payment section
    let paymentChoice = paymentMethod.options[paymentMethod.selectedIndex].value; //getting selected payment method
    const paymentTypes = document.querySelectorAll('fieldset:nth-of-type(4) > div'); //getting all the payment divs

    for( let i = 0; i <paymentTypes.length; i++){ //looping through all the payment divs
        paymentTypes[i].style.display = 'none'; //setting display to none
        if(paymentChoice === 'credit card'){ //checking if credit card is selected
            creditCard.style.display = ''; //showing credit card payment method
        } else if(paymentChoice === 'paypal') { //checking if paypal is selected
            paypal.style.display = ''; //showing paypal payment method
        } else if(paymentChoice === 'bitcoin') { //checking if bitcoin is selected
            bitcoin.style.display = ''; //showing bitcoin payment method
        }
    }
});