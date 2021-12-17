let button = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let phName = document.getElementById('name');
let phDescription = document.getElementById('description');

let submit = document.querySelector('.profile-form__submit-button');


button.addEventListener('click', function() {
    popup.style.visibility = 'visible';
    phName.placeholder = profileName.textContent;
    phDescription.placeholder = profileDescription.textContent;
});

closeButton.addEventListener('click', function() {
    popup.style.visibility = 'hidden';
});

submit.addEventListener('click', function() {
    profileName.textContent = phName.value;
    profileDescription.textContent = phDescription.value;
    popup.style.visibility = 'hidden';
});