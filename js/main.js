//import app from './firebase/app.js'
import { subscribeToHellfireClub } from "./firebase/hellfire-club";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacters = document.getElementById('txtCharacters');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacters.value
    }

    subscribeToHellfireClub(subscription);
})