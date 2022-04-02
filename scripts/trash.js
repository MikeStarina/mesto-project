/*


// form validation

//функция валидации
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup-form'));
    console.log(formList);
    formList.forEach((formElement) => {
      //formElement.addEventListener('submit', function (evt) {
      //  evt.preventDefault();
      //}); 
      
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

*/