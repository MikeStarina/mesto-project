//consts

export const profileEditbutton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.profile-popup');
export const profilePopupNameInput = profilePopup.querySelector('#name-input');
export const profilePopupDescriptionInput = profilePopup.querySelector('#description-input');
export const profilePopupCLoseButton = profilePopup.querySelector('.popup__close-button');
export const profilePopupForm = profilePopup.querySelector('.popup-form');

export const profile = document.querySelector('.profile');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileImg = document.querySelector('.avatar');

export const avatarEditButton = document.querySelector('.avatar__edit-button');
export const avatarPopup = document.querySelector('.avatar-popup');
export const avatarPopupLinkInput = avatarPopup.querySelector('#avatar-link-input');
export const avatarPopupCLoseButton = avatarPopup.querySelector('.popup__close-button');
export const avatarPopupForm = avatarPopup.querySelector('.popup-form');

export const addPlaceButton = document.querySelector('.profile__add-button');
export const cardPopup = document.querySelector('.card-popup');
export const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
export const cardPopupForm = cardPopup.querySelector('.popup-form');
export const cardPopupNameInput = cardPopup.querySelector('#place-title-input');
export const cardPopupLinkInput = cardPopup.querySelector('#place-link-input');

export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPic = imagePopup.querySelector('.image-popup__pic');
export const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
export const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

export const elements = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#cardstemplate');
export const content = document.querySelector('.content');

export const popupSection = Array.from(document.querySelectorAll('.popup'));


export const validationSettings = {
  formSelector: '.popup-form',
  fieldsetSelector: '.popup-form__fieldset',
  inputSelector: '.popup-form__input',
  submitButtonSelector: '.popup-form__submit-button',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__input_type_error',
  errorClass: 'popup-form__input-error_active'
}; 
// Начальные карточки






