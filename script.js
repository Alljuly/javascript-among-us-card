import { setVisibility } from "./card_utils.js";

const formElements = {
    form: document.getElementById('content-form'),
    card: document.getElementById('card'),
    btnform: document.getElementById('formbtn'),
    btncard: document.getElementById('cardbtn'),
    btnver: document.getElementById('button')   ,
}

const user {
    name: document.getElementById('name').value,
    nasc: document.getElementById('date').value,
    res: document.getElementById('res'),
}

identify = document.getElementById('cardbtn')

identify.addEventListener("click", function(){
    
    const new_card = {
        "idcard": Math.floor(Math.random() * 100) + 999,
        "name": document.getElementById('name').value,
        "bloodtype": document.getElementById('blood').value,
        "height": document.getElementById('height').value,
        "weight": document.getElementById('weight').value
    };

    createCard(new_card)

})

function createCard(){

    const idcard = document.getElementById('idcard');
    const namecard = document.getElementById('namecard');
    const heightcard = document.getElementById('heightcard');
    const weightcard = document.getElementById('weightcard');
    const bloodcard = document.getElementById('bloodcard');

    idcard.innerHTML = `#${id}`
    namecard.innerHTML = name
    namecard.style.textAlign = "center"
    heightcard.innerHTML = "Altura - " + height
    weightcard.innerHTML = "Peso - " + weight
    bloodcard.innerHTML = "Tipo sanguineo - " + bloodtype
    generateImg()
}

function generateImg(){
    const imgRandom = Math.floor(Math.random() * 6) + 1;

    const img = "/assets/among" +imgRandom+ ".jpg";

    document.querySelector(".among").setAttribute("src", img)
}

function isUserValid() {
    let ano = new Date().getFullYear()

    if (user.nasc.length == 0 || user.nasc == 0 || Number(user.nasc) > ano || user.name == '') {
        window.alert('[ERRO] Verifique seus dados')
    } else {
        let idade = ano - Number(user.nasc)
        res.innerHTML = `${user.name}, jogador de ${idade} anos`
    }
}



function changeVisible() {
    setVisibility(true);
}

function changeHidden() {
    setVisibility(false);
}
