// steps
const stepForm1 = document.querySelector('.step-1');
const stepForm2 = document.querySelector('.step-2');
const stepForm3 = document.querySelector('.step-3');
const formEl = document.getElementById('form');
const wholeFormEl = document.getElementById('whole-form');
const resultEl = document.getElementById('result');

// form elements to be validated
const firstNameEl = document.getElementById('first-name');
const secondNameEl = document.getElementById('last-name');
const nickNameEl = document.getElementById('nick-name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const cityEl = document.getElementById('city');
const countryEl = document.getElementById('country');
const postCodeEl = document.getElementById('post-code'); 
const errorInfoEl = document.getElementById('error-info');

// progress section
const progressEl = document.querySelector('.progress');
const roundElement1 = document.querySelector('.round-1');
const roundElement2 = document.querySelector('.round-2');
const roundElement3 = document.querySelector('.round-3');

// buttons
const nextBtn = document.getElementById('next-1');
const nextBtn2 = document.getElementById('next-2');
const submitBtn = document.getElementById('submit');
const previousBtn = document.getElementById('previous-1');
const previousBtn2 = document.getElementById('previous-2');
const infoEl = document.getElementById('info');
const refreshBtn = document.getElementById('refresh');

// result section
const username = document.getElementById('username');
const userlastname = document.getElementById('userlastname');
const usernickname = document.getElementById('usernickname');
const useremail = document.getElementById('useremail');
const userphonenumber = document.getElementById('userphonenumber');
const usercountry = document.getElementById('usercountry');
const usercity = document.getElementById('usercity');
const userpostcode = document.getElementById('userpostcode');

const user = {
    userName: '',
    userSecondName: '',
    userNickname: '',
    userEmail: '',
    userPhone: '',
    userCountry: '',
    userCity: '',
    userPostCode: '',
}

let errorMessages = [
    'Name is required, empty field not allowed',
    'Last Name is required, empty field not allowed',
    'Please, only letters',
    'Please, add your city',
    'Please, add four digits number',
];

const validateStep1 = () => {
    if (firstNameEl.value === '' || firstNameEl.value == null) {
        errorInfoEl.textContent = errorMessages[0];
    } else if (secondNameEl.value === '' || secondNameEl.value == null) {
        return errorInfoEl.textContent = errorMessages[1];
    } else {
        stepForm1.classList.remove('active');
        stepForm2.classList.add('active');
        roundElement2.classList.add('active-step');
        infoEl.innerHTML = ('<h2>Second step</h2>');
        user.userName = firstNameEl.value;
        user.userSecondName = secondNameEl.value;
        user.userNickname = nickNameEl.value;
    };
};

const validateStep2 = () => {
    if (phoneEl.value.length !== 10) {
        alert('Please add your phone (10 digits)');
    } else {
        stepForm2.classList.remove('active');
        stepForm3.classList.add('active');
        roundElement3.classList.add('active-step');
        infoEl.innerHTML = ('<h2>Almost done</h2>');
        user.userEmail = emailEl.value;
        user.userPhone = phoneEl.value;
    };
};

const validateStep3 = () => {
    if (cityEl.value === '' || cityEl.value === null) {
        alert(errorMessages[3]);
    }
    if (postCodeEl.value === '' || postCodeEl.value === null) {
        alert(errorMessages[4]);
    } else {
        alert('Thank you!')
    }
    user.userCountry = countryEl.value;
    user.userCity = cityEl.value;
    user.userPostCode = postCodeEl.value;
};

refreshBtn.addEventListener('click', () => {
    location.reload();
});

const submitWholeForm = (e) => {
    validateStep3();
    e.preventDefault();
    username.textContent = 'Your first name: ' + user.userName;
    userlastname.textContent = 'Your last name: ' + user.userSecondName;
    usernickname.textContent = 'Your Nickname: ' + user.userNickname;
    useremail.textContent = 'Your email: ' + user.userEmail;
    userphonenumber.textContent = 'Your phone number: ' + user.userPhone;
    usercountry.textContent = 'Your country: ' + user.userCountry;
    usercity.textContent = 'Your city: ' + user.userCity;
    userpostcode.textContent = 'Your city ostcode: ' + user.userPostCode;
    infoEl.innerHTML = ('<h2>Thank you! You submitted following info:</h2>');
    stepForm3.classList.remove('active');
    wholeFormEl.classList.add('step');
    progressEl.classList.add('step');
    resultEl.classList.remove('step');
    refreshBtn.classList.remove('step');
};

nextBtn.addEventListener('click', validateStep1);
nextBtn2.addEventListener('click', validateStep2);
submitBtn.addEventListener('click', submitWholeForm);

previousBtn.addEventListener('click', () => {
    stepForm2.classList.remove('active');
    stepForm1.classList.add('active');
    roundElement2.classList.remove('active-step');
    roundElement1.classList.add('active-step');
    infoEl.innerHTML = ('<h2>Please, create your account:</h2>');
});

previousBtn2.addEventListener('click', () => {
    stepForm3.classList.remove('active');
    stepForm2.classList.add('active');
    roundElement3.classList.remove('active-step');
    roundElement2.classList.add('active-step');
    infoEl.innerHTML = ('<h2>Second step</h2>');
});

