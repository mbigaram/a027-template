
const corrigeTexto = () => {
const sapo = document.getElementById("sapo");
sapo.innerHTML = "O sapo não lava o pé";

const poema = document.getElementById("poema")
poema.innerHTML += " evidencias";

const sabedoria = document.getElementById("sabedoria")
sabedoria.innerHTML = sabedoria.innerHTML + "<span> voando</span>"

const borboleta = document.getElementsByClassName("borboleta")
borboleta[0].innerHTML 
+= "pica-pau"

const roberto = document.getElementById("roberto")
roberto.innerHTML += "vivi"
}

const elemento = document.getElementsByTagName("p")
console.log (elemento)