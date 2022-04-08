import {config} from './consts.js';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}


//Получение юзеринфо с сервера

export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {method: 'GET', headers: config.headers})
    .then(res => checkResponse(res))     //не работает с this :( 

} 





//Получение карточек с сервера

export const getCards = () => {
    return fetch(`${config.baseUrl}/cards`, {method: 'GET', headers: config.headers})
    .then(res => checkResponse(res))
} 


export const basicData = () => {
    return Promise.all([getUserData(), getCards()])
}


//Загрузка данных пользователя на сервер


export const updateProfileInfo = (data) => {
    return fetch(`${config.baseUrl}/users/me`, {method: 'PATCH', headers: config.headers, body: JSON.stringify(data)})
    .then(res => checkResponse(res))

} 


//Добавление карточек на сервер


export const sendCards = (data) => {
    return fetch(`${config.baseUrl}/cards`, {method: 'POST', headers: config.headers, body: JSON.stringify(data)})
    .then(res => checkResponse(res))

} 


//поставить лайк

export const likeOn = (cardId, likeCounter) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {method: 'PUT', headers: config.headers})
        .then(res => checkResponse(res))

        .then(res => {
            likeCounter.textContent = (res.likes.length);
        })
}

//снять лайк

export const likeDelete = (cardId, likeCounter) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {method: 'DELETE', headers: config.headers})
        .then(res => checkResponse(res))
        .then(res => {
            likeCounter.textContent = res.likes.length;
        
        })
        
    
}


//обновление аватара

export const changeAvatar = (data) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {method: 'PATCH', headers: config.headers, body: JSON.stringify(data)})
    .then(res => checkResponse(res))

} 









