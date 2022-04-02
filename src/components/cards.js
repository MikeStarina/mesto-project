import {cardTemplate, elements, imagePopup, imagePopupPic, imagePopupCaption} from '../index.js';
import {openPopup} from './modals.js';


    
  
    

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

const Cards = (Cards) => {    
    Cards.forEach(function(item) {
        
        elements.append(createCard(item.name, item.link));
  
    });

};

export {createCard, Cards};