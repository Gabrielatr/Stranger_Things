import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacters = document.getElementById('txtCharacters');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacters.value
    }

    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacters.value = '';
})