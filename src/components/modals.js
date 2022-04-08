    const closeByEsc = (evt) => {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_is_opened');
            closePopup(openedPopup);
            document.removeEventListener('keydown', closeByEsc);
        };
    }




    function openPopup(popup) {
        popup.classList.add('popup_is_opened');  

        popup.addEventListener('mousedown', function(evt){
            if (evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__window'))
                closePopup(popup);
        });  
        document.addEventListener('keydown', closeByEsc);
    };

    function closePopup(popup) {
        popup.classList.remove('popup_is_opened');
    };



    export {openPopup, closePopup};






