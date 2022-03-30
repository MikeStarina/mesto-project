//consts

const profileEditbutton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupNameInput = profilePopup.querySelector('#name-input');
const profilePopupDescriptionInput = profilePopup.querySelector('#description-input');
const profilePopupCLoseButton = profilePopup.querySelector('.popup__close-button');
const profilePopupForm = profilePopup.querySelector('.popup-form');


const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const addPlaceButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
const cardPopupForm = cardPopup.querySelector('.popup-form');
const cardPopupNameInput = cardPopup.querySelector('#place-title');
const cardPopupLinkInput = cardPopup.querySelector('#place-link');

const imagePopup = document.querySelector('.image-popup');
const imagePopupPic = imagePopup.querySelector('.image-popup__pic');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#cardstemplate');
const content = document.querySelector('.content');

const popupSection = Array.from(document.querySelectorAll('.popup'));


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

function openPopup(popup) {
    popup.classList.add('popup_is_opened');    
};

function closePopup(popup) {
    popup.classList.remove('popup_is_opened');
};

function createCard (name, link) {
    const card = cardTemplate.content.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDelete = card.querySelector('.card__delete');
    const cardLike = card.querySelector('.card__like');

    cardImage.setAttribute('src', link);   
    cardImage.setAttribute('alt', name);   
    cardTitle.textContent = name;

    cardDelete.addEventListener('click', function() {
        cardDelete.closest('.card').remove();
    });

    cardLike.addEventListener('click', function() {
        cardLike.classList.toggle('card__like_active');
    });

    cardImage.addEventListener('click', function() {
        openPopup(imagePopup)
        imagePopupPic.setAttribute('src', cardImage.getAttribute('src'));
        imagePopupPic.setAttribute('alt', cardImage.getAttribute('alt'));
        imagePopupCaption.textContent = cardImage.getAttribute('alt');

        
    });

   


    return card;
};


//six basics cards

initialCards.forEach(function(item) {
    
    elements.append(createCard(item.name, item.link));

});



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









// form validation

//функция валидации
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup-form'));
    formList.forEach((formElement) => {
      /*formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      }); */
      
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup-form__fieldset'));
  
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      }); 
   
    });
    
    
    
};

//сообщение об ошибке
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup-form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup-form__input-error_active');
};


//Проверка невалидности одного из инпутов

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
 
     return !inputElement.validity.valid;
   })
};

//Состояние кнопки сабмита

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup-form__submit-button_disabled');
    } else {
      buttonElement.classList.remove('popup-form__submit-button_disabled');
    }
};


//Убирает ошибку когда данные валидны

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup-form__input_type_error');
    errorElement.classList.remove('popup-form__input-error_active');
    errorElement.textContent = '';
  };


// проверка валидности инпутов
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

//Обработчики 

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup-form__input'));
    const buttonElement = formElement.querySelector('.popup-form__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
}; 




enableValidation();
