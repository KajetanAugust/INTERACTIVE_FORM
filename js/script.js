///////////////
// VARIABLES //
///////////////

// Job Role option elements
const otherJobRole = document.getElementById('other-title');
otherJobRole.style.display ='none';
const jobRole = document.getElementById('title');

// T-shirt info option elements
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
shirtColor.parentNode.style.display = 'none';
const shirtColorOptions = document.querySelectorAll('#color option');



// Job Role "Other" text input display

jobRole.addEventListener('change', () =>{ //adding event listener to Job Role dropdown select
    const result =  jobRole.options[jobRole.selectedIndex].text; //getting select text value
    if(result.toLowerCase() === 'other') { //checking if he selected option value is exual to other
        otherJobRole.style.display ='initial'; // showing job role window
    }
});


// T-shirt options functionality

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



