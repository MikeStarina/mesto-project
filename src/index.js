import './index.css';

import * as consts from './components/consts.js';



//functions






//six basics cards


import {createCard} from './components/cards.js';


const addCards = (Cards) => {    
  Cards.forEach(function(item) {
      
      consts.elements.append(createCard(item.name, item.link));

  });

};

addCards(consts.initialCards);


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
    closePopup(consts.profilePopup);
});




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
