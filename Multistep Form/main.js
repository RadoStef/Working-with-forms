const stepForm1 = document.querySelector('.step-1');
const stepForm2 = document.querySelector('.step-2');
const stepForm3 = document.querySelector('.step-3');

// form elements to be validated
const firstNameEl = document.getElementById('first-name');
const secondNameEl = document.getElementById('last-name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const displayInfoEl = document.getElementById('display-info');

const roundElement1 = document.querySelector('.round-1')
const roundElement2 = document.querySelector('.round-2')
const roundElement3 = document.querySelector('.round-3')

const nextBtn = document.getElementById('next-1');
const nextBtn2 = document.getElementById('next-2');
const submitBtn = document.getElementById('submit');

const previousBtn = document.getElementById('previous-1');
const previousBtn2 = document.getElementById('previous-2');
const infoEl = document.getElementById('info');

nextBtn.addEventListener('click', () => {
    if (firstNameEl.value <= 0) {
        displayInfoEl.textContent = 'Please, fill your first name.';
    } else if (secondNameEl.value <= 0 ) {
        displayInfoEl.textContent = 'Please fill Last name.';
    } else {
        stepForm1.classList.remove('active');
        stepForm2.classList.add('active');
        roundElement2.classList.add('active-step');
        infoEl.innerHTML = ('<h2>Second step</h2>');
    }
});

nextBtn2.addEventListener('click', () => {
    if (phoneEl.value.length !== 10) {
        displayInfoEl.textContent = 'Please add your phone (10 int)';
    } else {
        stepForm2.classList.remove('active');
        stepForm3.classList.add('active');
        roundElement3.classList.add('active-step');
        infoEl.innerHTML = ('<h2>Almost done</h2>');
    }
});

previousBtn.addEventListener('click', () => {
    stepForm2.classList.remove('active');
    stepForm1.classList.add('active');
    roundElement2.classList.remove('active-step');
    roundElement1.classList.add('active-step');
    infoEl.innerHTML = ('<h2>Please, create your account:</h2>');
})

previousBtn2.addEventListener('click', () => {
    stepForm3.classList.remove('active');
    stepForm2.classList.add('active');
    roundElement3.classList.remove('active-step');
    roundElement2.classList.add('active-step');
    infoEl.innerHTML = ('<h2>Second step</h2>');
})