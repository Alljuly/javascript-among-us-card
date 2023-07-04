const identify = document.getElementById('cardbtn')


const form = document.getElementById('content-form')
const card = document.getElementById('card')
const btnform = document.getElementById('formbtn')
const btncard = document.getElementById('cardbtn')
const btnver = document.getElementById('button')

identify.addEventListener("click", function(){

    const idcard = document.getElementById('nametop')
    const name = document.getElementById('name').value
    const bloodtype = document.getElementById('blood').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value

    const namecard = document.getElementById('namecard')
    const heightcard = document.getElementById('heightcard')
    const weightcard = document.getElementById('weightcard')
    const bloodcard = document.getElementById('bloodcard')

    const id = Math.floor(Math.random() * 100) + 999;

    
    const imgRandom = Math.floor(Math.random() * 6) + 1;

    const img = "/assets/among" +imgRandom+ ".jpg";


    document.querySelector(".among").setAttribute("src", img)


    idcard.innerHTML = `#${id}`
    namecard.innerHTML = name
    namecard.style.textAlign = "center"
    heightcard.innerHTML = "Altura - " + height
    weightcard.innerHTML = "Peso - " + weight
    bloodcard.innerHTML = "Tipo sanguineo - " + bloodtype

})

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('date')
    let res = document.getElementById('res')
    let name = document.getElementById('name').value

    console.log(name)

    if (nasc.value.length == 0 || nasc.value == 0 || Number(nasc.value) > ano || name == '') {
        window.alert('[ERRO] Verifique seus dados')
    } else {
        let idade = ano - Number(nasc.value)
        res.innerHTML = `${name}, jogador de ${idade} anos`
    }
}

function show(){

    btnform.style.visibility = "visible"
    card.style.visibility = "visible"

    btnver.style.visibility = "hidden"
    btncard.style.visibility = "hidden"
    form.style.visibility = "hidden"

}

function hide(){

    btnform.style.visibility = "hidden"
    card.style.visibility = "hidden"
    
    btnver.style.visibility = "visible"
    btncard.style.visibility = "visible"
    form.style.visibility = "visible"

}
