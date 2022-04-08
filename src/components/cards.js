import {cardTemplate, imagePopup, imagePopupPic, imagePopupCaption, elements} from './consts.js';
import {openPopup} from './modals.js';
import {likeOn, likeDelete, getUserData} from './api.js'
  
    

function createCard (name, link, likes, ownerId, cardId, userId) {

        
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
       
        const liked = likes.some((el) => {

            return el._id === userId;
            
        });   
        
    
       
        if (liked) {
            cardLike.classList.add('card__like_active');
        }
        
    

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
       
        if (userId === ownerId) {
            cardDelete.addEventListener('click', function() {
                removeCard(cardDelete);
            });
        } else {
            cardDelete.classList.add('card__delete_inactive'); 
        }
       
       
        
        

        cardLike.addEventListener('click', function() {
            if (cardLike.classList.contains('card__like_active')) {
              
                likeDelete(cardId, cardLikeCounter)
                .then(res => {
                    like(cardLike);
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
               
                likeOn(cardId, cardLikeCounter)
                .then(res => {
                    like(cardLike);
                })
                .catch(error => {
                    console.error(error);
                });
            }
        });

        cardImage.addEventListener('click', function() {
            openImage(cardImage);
            
            
        });

    


        return card;
};

const addCards = (Cards, userId) => {    
    Cards.forEach(function(item) {
        elements.append(createCard(item.name, item.link, item.likes, item.owner._id, item._id, userId));
  
    });
  
  };


export {createCard, addCards};