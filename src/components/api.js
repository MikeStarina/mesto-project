import {profileName, profileDescription, profileImg} from './consts.js';


export const getUser = () => {
    fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
    headers: {
      authorization: '50759d2c-ed17-4b18-a7b5-0eafaf69dc29'
    }
  })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
        profileName.textContent = result.name;
        profileDescription.textContent = result.about;
        profileImg.src = result.avatar;
    }); 

}