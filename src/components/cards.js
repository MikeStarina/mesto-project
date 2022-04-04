import {cardTemplate, imagePopup, imagePopupPic, imagePopupCaption} from './consts.js';
import {openPopup} from './modals.js';


    
  
    

function createCard (name, link) {


        const card = cardTemplate.content.cloneNode(true);
        const cardImage = card.querySelector('.card__image');
        const cardTitle = card.querySelector('.card__title');
        const cardDelete = card.querySelector('.card__delete');
        const cardLike = card.querySelector('.card__like');

        const removeCard = (el) => {
            el.closest('.card').remove();
        };

        const like = (el) => {
            el.classList.toggle('card__like_active');
        };

        const openImage = (el) => {
            imagePopupPic.src = el.src;
            imagePopupPic.alt = el.alt;
            imagePopupCaption.textContent = el.alt;
            openPopup(imagePopup);
        };

        cardImage.src = link;   
        cardImage.alt = name;   
        cardTitle.textContent = name;

        
        
        cardDelete.addEventListener('click', function() {
            removeCard(cardDelete);
        });

        cardLike.addEventListener('click', function() {
            like(cardLike);
        });

        cardImage.addEventListener('click', function() {
            openImage(cardImage);
            
        });

    


        return card;
};



export {createCard};