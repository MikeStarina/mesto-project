import '../node_modules/core-js/stable';
import '../node_modules/regenerator-runtime/runtime'

import './index.css';

import * as consts from './components/consts.js';

import { getUser } from './components/api.js';

getUser();



import { getCards } from './components/api.js';

getCards();

import { updateProfileInfo } from './components/api.js';



import {createCard} from './components/cards.js';


import { sendNudes } from './components/api.js';


import { changeAvatar } from './components/api.js';





//popups

import {openPopup, closePopup} from './components/modals.js';

//profile edit popup

consts.profileEditbutton.addEventListener('click', function() {
    consts.profilePopupNameInput.value = consts.profileName.textContent;
    consts.profilePopupDescriptionInput.value = consts.profileDescription.textContent;
    openPopup(consts.profilePopup);
});

    

consts.profilePopupCLoseButton.addEventListener('click', function() {
    closePopup(consts.profilePopup);
});


consts.profilePopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    consts.profileName.textContent = consts.profilePopupNameInput.value;
    consts.profileDescription.textContent =  consts.profilePopupDescriptionInput.value;
    const data = {
        'name': consts.profilePopupNameInput.value,
        'about': consts.profilePopupDescriptionInput.value
    }
    updateProfileInfo(data);
    closePopup(consts.profilePopup);
});


//avatar edit popup

consts.avatarEditButton.addEventListener('click', function() {
    openPopup(consts.avatarPopup);
})

consts.avatarPopupCLoseButton.addEventListener('click', function() {
    closePopup(consts.avatarPopup);
});



consts.avatarPopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    consts.profileImg.src = consts.avatarPopupLinkInput.value;

    const data = {
        'avatar': consts.avatarPopupLinkInput.value
    }
    changeAvatar(data);

    closePopup(consts.avatarPopup);
    consts.avatarPopupForm.reset();
})

//place add popup



consts.addPlaceButton.addEventListener('click', function() {
    
    openPopup(consts.cardPopup);
});


consts.cardPopupCloseButton.addEventListener('click', function() {
    closePopup(consts.cardPopup);
});


consts.cardPopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    consts.elements.prepend(createCard(consts.cardPopupNameInput.value, consts.cardPopupLinkInput.value));
    const data = {
        'name': consts.cardPopupNameInput.value,
        'link': consts.cardPopupLinkInput.value
    }

    sendNudes(data);
    closePopup(consts.cardPopup);
    consts.cardPopupForm.reset();
});



consts.imagePopupCloseButton.addEventListener('click', function() {
    closePopup(consts.imagePopup);
});


//закрытие по клику на оверлей и по нажатию Esc

consts.popupSection.forEach((popup) => {
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
enableValidation(consts.validationSettings);
