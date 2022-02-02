// Геннадий, спасибо за оперативное и чуткое ревью. Постарался исправить все указанные вами комментарии

//consts

const profileEditbutton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const addPlaceButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');

const imagePopup = document.querySelector('.image-popup');

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#cardstemplate');
const content = document.querySelector('.content');
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
    popup.classList.remove('popup_is_closed');
    
};

function closePopup(popup) {
    popup.classList.add('popup_is_closed');
    popup.classList.remove('popup_is_opened');
};

function createCard (name, link) {
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector('.card__image').setAttribute('src', link);   
        card.querySelector('.card__image').setAttribute('alt', name);   
        card.querySelector('.card__title').textContent = name;
        return card;
};


//six basics cards

for (let i = initialCards.length - 1; i >= 0; i--) {
    
    elements.append(createCard(initialCards[i].name, initialCards[i].link));

};



//profile edit popup

profileEditbutton.addEventListener('click', function() {

    openPopup(profilePopup);
});

    profilePopup.querySelector('#name').value = profileName.textContent;
    profilePopup.querySelector('#description').value = profileDescription.textContent;

    profilePopup.addEventListener('click', function(event) {
        
        if (event.target.classList.contains('popup__close-button')) {
            closePopup(profilePopup);

        } else if (event.target.classList.contains('popup-form__submit-button')) {
            event.preventDefault();
            profileName.textContent = profilePopup.querySelector('#name').value;
            profileDescription.textContent =  profilePopup.querySelector('#description').value;
            closePopup(profilePopup);
        };
    });

 






//place add popup



addPlaceButton.addEventListener('click', function() {
    openPopup(cardPopup);
});

    //const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
    //const cardPopupSubmitButton = cardPopup.querySelector('.popup-form__submit-button');

cardPopup.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup__close-button')) {
        closePopup(cardPopup);
    };
    if (event.target.classList.contains('popup-form__submit-button')) {
            event.preventDefault();
            const name = cardPopup.querySelector('#place-title').value;
            const link = cardPopup.querySelector('#place-link').value;
            elements.prepend(createCard(name, link));
            closePopup(cardPopup);
    };

    
}); 

//image popup



elements.addEventListener('click', function (event) {
    const activeImage = event.target;

    if (activeImage.classList.contains('card__image')) {
        openPopup(imagePopup)
        imagePopup.querySelector('.image-popup__pic').setAttribute('src', activeImage.getAttribute('src'));
        imagePopup.querySelector('.image-popup__pic').setAttribute('alt', activeImage.getAttribute('alt'));
        imagePopup.querySelector('.image-popup__caption').textContent = activeImage.getAttribute('alt');

       
        
    };
    imagePopup.addEventListener('click', function(event) {
        if(event.target.classList.contains('popup__close-button')) {
            closePopup(imagePopup);
        }
    });
    
});


//Like button logic


elements.addEventListener('click', function(event) {
    const like = event.target;
    if (event.target.classList.contains('card__like') && !event.target.classList.contains('card__like_active')) {
        like.style.backgroundImage = 'url(images/like-icon-active.svg)';
        console.log(like.style.backgroundImage);
        like.classList.add('card__like_active');
    } else if (event.target.classList.contains('card__like') && event.target.classList.contains('card__like_active')) {
        like.style.backgroundImage = 'url(images/like-icon.svg)';
        console.log(like.style.backgroundImage);
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









