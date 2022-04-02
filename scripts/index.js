//import './index.css';



//consts

export const profileEditbutton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.profile-popup');
export const profilePopupNameInput = profilePopup.querySelector('#name-input');
export const profilePopupDescriptionInput = profilePopup.querySelector('#description-input');
export const profilePopupCLoseButton = profilePopup.querySelector('.popup__close-button');
export const profilePopupForm = profilePopup.querySelector('.popup-form');


export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');

export const addPlaceButton = document.querySelector('.profile__add-button');
export const cardPopup = document.querySelector('.card-popup');
export const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
export const cardPopupForm = cardPopup.querySelector('.popup-form');
export const cardPopupNameInput = cardPopup.querySelector('#place-title');
export const cardPopupLinkInput = cardPopup.querySelector('#place-link');

export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPic = imagePopup.querySelector('.image-popup__pic');
export const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
export const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

export const elements = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#cardstemplate');
export const content = document.querySelector('.content');

export const popupSection = Array.from(document.querySelectorAll('.popup'));

const validationSettings = {
  formSelector: '.popup-form',
  fieldsetSelector: '.popup-form__fieldset',
  inputSelector: '.popup-form__input',
  submitButtonSelector: '.popup-form__submit-button',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__input_type_error',
  errorClass: 'popup-form__input-error_active'
}; 
// Начальные карточки

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];





//functions






//six basics cards


import {createCard, Cards} from './components/cards.js';


Cards(initialCards);


//popups

import {openPopup, closePopup} from './components/modals.js';

//profile edit popup

profileEditbutton.addEventListener('click', function() {
    profilePopupNameInput.value = profileName.textContent;
    profilePopupDescriptionInput.value = profileDescription.textContent;
    openPopup(profilePopup);
});

    

profilePopupCLoseButton.addEventListener('click', function() {
    closePopup(profilePopup);
});


profilePopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = profilePopupNameInput.value;
    profileDescription.textContent =  profilePopupDescriptionInput.value;
    closePopup(profilePopup);
});




//place add popup



addPlaceButton.addEventListener('click', function() {
    
    openPopup(cardPopup);
});


cardPopupCloseButton.addEventListener('click', function() {
    closePopup(cardPopup);
});


cardPopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    elements.prepend(createCard(cardPopupNameInput.value, cardPopupLinkInput.value));
    closePopup(cardPopup);
    cardPopupForm.reset();
});



imagePopupCloseButton.addEventListener('click', function() {
    closePopup(imagePopup);
});


//закрытие по клику на оверлей и по нажатию Esc

popupSection.forEach((popup) => {
    popup.addEventListener('click', function(evt){

            closePopup(evt.target);
    });

    document.addEventListener('keydown', function(evt){
      if (evt.key === 'Escape' && popup.classList.contains('popup_is_opened')) {
        closePopup(popup);
      }
    });
    

   
});







//валидация

import {enableValidation} from './components/validation.js';
enableValidation(validationSettings);
