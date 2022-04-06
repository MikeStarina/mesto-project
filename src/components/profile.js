import {profileName, profileDescription, profileImg} from './consts.js';




export const setProfileData = (name, about, avatar) => {
    profileName.textContent = name;
    profileDescription.textContent = about;
    profileImg.src = avatar;
}