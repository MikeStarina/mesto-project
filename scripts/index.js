
// Add first six cards


let elements = document.querySelector('.elements');
const templ = document.querySelector('#cardstemplate');




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



for (let i = 0; i < initialCards.length; i++) {
    let elem = templ.content.cloneNode(true);
    elem.querySelector('.card__image').setAttribute('src', initialCards[i].link);   
    elem.querySelector('.card__image').setAttribute('alt', initialCards[i].name);   
    elem.querySelector('.card__title').textContent = initialCards[i].name;
    elements.append(elem);

};



//popup constructor

const profileEditbutton = document.querySelector('.profile__edit-button');
const popupTemplate = document.querySelector('#popuptemplate');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');


const content = document.querySelector('.content');

//profile edit popup

profileEditbutton.addEventListener('click', function() {
    let popup = popupTemplate.content.cloneNode(true);
    popup.querySelector('.popup').style.visibility = 'visible';
    popup.querySelector('.popup__title').textContent = 'Редактировать профиль';
    popup.querySelector('#name').placeholder = profileName.textContent;
    popup.querySelector('#description').placeholder = profileDescription.textContent;

    content.prepend(popup)
    const activePopup = document.querySelector('.popup');
    activePopup.style.animation = 'opct .3s ease-out';

    const closeButton = document.querySelector('.popup__close-button');
    closeButton.addEventListener('click', function() {
        activePopup.remove();
    });

    const submitButton = activePopup.querySelector('.profile-form__submit-button');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const inputName = activePopup.querySelector('#name');
        const inputDescription = activePopup.querySelector('#description');
        if (inputName.value) {
            profileName.textContent = inputName.value;
            profileDescription.textContent = inputDescription.value;
            activePopup.remove();
        };
        
    });



});


//place add popup

const placeAddButton = document.querySelector('.profile__add-button');

placeAddButton.addEventListener('click', function() {
    let popup = popupTemplate.content.cloneNode(true); 
    popup.querySelector('.popup').style.visibility = 'visible';
    popup.querySelector('.popup__title').textContent = 'Новое место';
    popup.querySelector('#name').placeholder = 'Название';
    popup.querySelector('#description').placeholder = 'Ссылка на картинку';
    popup.querySelector('.profile-form__submit-button').textContent = 'Создать';

    content.prepend(popup)
    const activePopup = document.querySelector('.popup');
    activePopup.style.animation = 'opct .3s ease-out';
    const closeButton = document.querySelector('.popup__close-button');
    closeButton.addEventListener('click', function() {
        activePopup.remove();
    });

    const submitButton = activePopup.querySelector('.profile-form__submit-button');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const inputName = activePopup.querySelector('#name');
        const inputDescription = activePopup.querySelector('#description');

        let newCard = templ.content.cloneNode(true);
        if (inputName.value && inputDescription.value) {
            newCard.querySelector('.card__image').setAttribute('src', inputDescription.value);   
            newCard.querySelector('.card__image').setAttribute('alt', inputName.value);   
            newCard.querySelector('.card__title').textContent = inputName.value;
            
            console.log(newCard);
            elements.append(newCard);
            activePopup.remove();
            
            
        }
    });
});

//Like button logic


elements.addEventListener('click', function(event) {
    const like = event.target;
    if (event.target.classList.contains('card__like') && !event.target.classList.contains('card__like_active')) {
        like.style.backgroundImage = 'url(../../../images/like-icon-active.svg)';
        like.classList.add('card__like_active');
    } else if (event.target.classList.contains('card__like') && event.target.classList.contains('card__like_active')) {
        like.style.backgroundImage = 'url(../../../images/like-icon.svg)';
        like.classList.remove('card__like_active');
    };
});


//delete card logic
elements.addEventListener('click', function(event) {
    const deleteButton = event.target;
    if (deleteButton.classList.contains('card__delete')) {
        deleteButton.parentElement.remove();

    }
});

//image popup



elements.addEventListener('click', function (event) {
    const activeImage = event.target;

    if (activeImage.classList.contains('card__image')) {
        const imagePopup = document.querySelector('#image-popup-template').content.cloneNode(true);
        imagePopup.querySelector('.image-popup__pic').setAttribute('src', activeImage.getAttribute('src'));
        imagePopup.querySelector('.image-popup__pic').setAttribute('alt', activeImage.getAttribute('alt'));
        imagePopup.querySelector('.image-popup__caption').textContent = activeImage.getAttribute('alt');
        elements.prepend(imagePopup);

        const activeImagePopup = document.querySelector('.image-popup');
        activeImagePopup.style.animation = 'opct .3s ease-out';

        const imagePopupCloseButton = document.querySelector('.image-popup__close-button');
    
        imagePopupCloseButton.addEventListener('click', function(){
            activeImagePopup.remove();
        });
    };
});







