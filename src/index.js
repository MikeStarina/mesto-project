import '../node_modules/core-js/stable';
import '../node_modules/regenerator-runtime/runtime'

import './index.css';

import * as consts from './components/consts.js';

import { getUserData } from './components/api.js';
import { setProfileData } from './components/profile.js';
import { getCards } from './components/api.js';
import { updateProfileInfo } from './components/api.js';
import {createCard, addCards} from './components/cards.js';
import { sendCards } from './components/api.js';
import { changeAvatar } from './components/api.js';
import { basicData } from './components/api.js';

import {openPopup, closePopup} from './components/modals.js';

import {enableValidation} from './components/validation.js';




//Данные пользователя
/*
getUserData().then(result => {
    setProfileData(result.name, result.about, result.avatar);
})
.catch(error => {
    console.error(error);
});




//Загрузка начальных карточек

getCards().then(result => {

    addCards(result);
}).catch(error => {
    console.error(error);
});
*/

basicData().then(data => {
    console.log(data);
    addCards(data[1], data[0]._id);
    setProfileData(data[0].name, data[0].about, data[0].avatar);  
}).catch(err => {
    console.error(err);
})




//ожидание загрузки

const loading = (isLoading, submitbutton, buttonText) => {


    if (isLoading) {
        console.log(buttonText);
        submitbutton.textContent = buttonText;
    } else {
        console.log(buttonText);
        submitbutton.textContent = buttonText;
    }
}







//профайл попап

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
    const buttonText = consts.profilePopupForm.elements.submit.textContent;
    loading(true, consts.profilePopupForm.elements.submit, 'Сохранение...');

    const data = {
        'name': consts.profilePopupNameInput.value,
        'about': consts.profilePopupDescriptionInput.value
    }
    updateProfileInfo(data).then(res => {
        consts.profileName.textContent = res.name;
        consts.profileDescription.textContent = res.about;
        closePopup(consts.profilePopup);
    })
    .finally(res => {
        loading(false, consts.profilePopupForm.elements.submit, buttonText);
        
    })
    .catch(error => {
        console.error(error);
    });
   
});


//аватар попап

consts.avatarEditButton.addEventListener('click', function() {
    openPopup(consts.avatarPopup);
})

consts.avatarPopupCLoseButton.addEventListener('click', function() {
    closePopup(consts.avatarPopup);
});



consts.avatarPopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const buttonText = consts.avatarPopupForm.elements.submit.textContent;
    loading(true, consts.avatarPopupForm.elements.submit, 'Сохранение...');

    const data = {
        'avatar': consts.avatarPopupLinkInput.value
    }
    changeAvatar(data).then(res => {
        consts.profileImg.src = res.avatar;
        closePopup(consts.avatarPopup);
    })
    .finally(res => {
        loading(false, consts.avatarPopupForm.elements.submit, buttonText);
        consts.avatarPopupForm.reset();
    })
    .catch(error => {
        console.error(error);
    });
})




//попап добавления карточки



consts.addPlaceButton.addEventListener('click', function() {
    
    openPopup(consts.cardPopup);
});


consts.cardPopupCloseButton.addEventListener('click', function() {
    closePopup(consts.cardPopup);
});


consts.cardPopupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const buttonText = consts.cardPopupForm.elements.submit.textContent;
    loading(true, consts.cardPopupForm.elements.submit, 'Сохранение...');
    const data = {
        'name': consts.cardPopupNameInput.value,
        'link': consts.cardPopupLinkInput.value
    }
    
    sendCards(data).then(res => {
        consts.elements.prepend(createCard(data.name, data.link, res.likes, res.owner._id, res._id, res.owner._id));
        closePopup(consts.cardPopup);
    })
    .finally(res => {
        loading(false, consts.cardPopupForm.elements.submit, buttonText);
        
        consts.cardPopupForm.reset();
    })
    .catch(err => {console.log(err)});

});



consts.imagePopupCloseButton.addEventListener('click', function() {
    closePopup(consts.imagePopup);
});


//закрытие по клику на оверлей и по нажатию Esc
/*
consts.popupSection.forEach((popup) => {
    popup.addEventListener('click', function(evt){

            closePopup(evt.target);
    });

    document.addEventListener('keydown', function(evt){
      if (evt.key === 'Escape' && popup.classList.contains('popup_is_opened')) {
        closePopup(popup);
      }
    });
    

   
}); */







//валидация


enableValidation(consts.validationSettings);
