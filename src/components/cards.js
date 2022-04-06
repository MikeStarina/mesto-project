import {cardTemplate, imagePopup, imagePopupPic, imagePopupCaption, elements} from './consts.js';
import {openPopup} from './modals.js';
import {likeOn, likeDelete, getUserData} from './api.js'
  
    

function createCard (name, link, likes, ownerId, cardId) {

        
        const card = cardTemplate.content.cloneNode(true);
        
        const cardImage = card.querySelector('.card__image');
        const cardTitle = card.querySelector('.card__title');
        const cardDelete = card.querySelector('.card__delete');
        const cardLike = card.querySelector('.card__like');
        const cardLikeCounter = card.querySelector('.card__like-counter');

        
        cardImage.src = link;   
        cardImage.alt = name;   
        cardTitle.textContent = name;
        cardLikeCounter.textContent = likes.length;



        //проверка собственных лайков
        getUserData().then(res => {
            const liked = likes.some((el) => {

                return el._id === res._id;
            })

            return liked
        })
        .then(res => {
            if (res) {
                cardLike.classList.add('card__like_active');
            }
        })
        .catch(err => {console.log(err)});

        //удаление карточку
        const removeCard = (el) => {
            el.closest('.card').remove();
        };



        //лайк карточки
        const like = (el) => {
            
                el.classList.toggle('card__like_active');
                
           
        };


        //попап
        const openImage = (el) => {
            imagePopupPic.src = el.src;
            imagePopupPic.alt = el.alt;
            imagePopupCaption.textContent = el.alt;
            openPopup(imagePopup);
        };

        

        //удаляем только свои карточки
        getUserData().then(res => {
            if (res._id === ownerId) {
                cardDelete.addEventListener('click', function() {
                    removeCard(cardDelete);
                });
            } else {
                cardDelete.classList.add('card__delete_inactive'); 
            }
        })
       .catch(err => {console.log(err)});       
       
        
        

        cardLike.addEventListener('click', function() {
            if (cardLike.classList.contains('card__like_active')) {
                like(cardLike);
                likeDelete(cardId, cardLikeCounter);
            } else {
                like(cardLike);
                likeOn(cardId, cardLikeCounter);
            }
        });

        cardImage.addEventListener('click', function() {
            openImage(cardImage);
            
            
        });

    


        return card;
};

const addCards = (Cards) => {    
    Cards.forEach(function(item) {
        elements.append(createCard(item.name, item.link, item.likes, item.owner._id, item._id));
  
    });
  
  };


export {createCard, addCards};