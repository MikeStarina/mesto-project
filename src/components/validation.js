

const enableValidation = (settings) => {


    /*
        const validationSettings = {
            formSelector: '.popup-form',
            fieldsetSelector: '.popup-form__fieldset',
            inputSelector: '.popup-form__input',
            submitButtonSelector: '.popup-form__submit-button',
            inactiveButtonClass: 'popup-form__submit-button_disabled',
            inputErrorClass: 'popup-form__input_type_error',
            errorClass: 'popup-form__input-error_active'
        }; 
    */

    //сообщение об ошибке
    const showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(settings.errorClass);
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
        buttonElement.classList.add(settings.inactiveButtonClass);
        } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        }
    };


    //Убирает ошибку когда данные валидны

    const hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(settings.inputErrorClass);
        errorElement.classList.remove(settings.errorClass);
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
        const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
        const buttonElement = formElement.querySelector(settings.submitButtonSelector);
        toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
        });
    }; 




        const formList = Array.from(document.querySelectorAll(settings.formSelector));
        formList.forEach((formElement) => {
        //formElement.addEventListener('submit', function (evt) {
        //  evt.preventDefault();
        //}); 
        
        const fieldsetList = Array.from(formElement.querySelectorAll(settings.fieldsetSelector)); 
    
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, settings);
        }); 
    
        });
    
    
    


};

export {enableValidation};