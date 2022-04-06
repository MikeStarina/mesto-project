import {profileName, profileDescription, profileImg, profile} from './consts.js';
import {addCards} from './cards.js';



//Получение юзеринфо с сервера

export const getUser = () => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
    method: 'GET',
    headers: {
      authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29'
    }
  })
    .then(res => res.json())
    .then((result) => {
        
        profileName.textContent = result.name;
        profileDescription.textContent = result.about;
        profileImg.src = result.avatar;
        profile.id = result._id;
    })
    .catch(error => {
        console.error(error);
    })

} 




//получение юзер айди

export const getUserId = (ownerId) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
        method: 'GET',
        headers: {
          authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29'
        }
    })
    .then(result => result.json())

}



//Получение карточек с сервера

export const getCards = () => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
    method: 'GET',
    headers: {
      authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29'
    }
  })
    .then(res => res.json())
    .then((result) => {
        //console.log(result);
        addCards(result);
    })
    .catch(error => {
        console.error(error);
    })

}

//Загрузка данных пользователя на сервер


export const updateProfileInfo = (data) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
    method: 'PATCH',
    headers: {
        authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}


//Добавление карточек на сервер


export const sendNudes = (data) => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
    method: 'POST',
    headers: {
        authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}


//поставить лайк

export const likeOn = (cardId, likeCounter) => {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-8/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => {
            //console.log(res.likes);
            likeCounter.textContent = (res.likes.length);
            //console.log(likeCounter);
        })
        .catch(error => {
            console.error(error);
        })
    
}

//снфть лайк

export const likeDelete = (cardId, likeCounter) => {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-8/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => {
            //console.log(res.likes.length)
            likeCounter.textContent = res.likes.length;
        
        })
        .catch(error => {
            console.error(error);
        })
    
}


//обновление аватара

export const changeAvatar = (data) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me/avatar', {
    method: 'PATCH',
    headers: {
        authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}




