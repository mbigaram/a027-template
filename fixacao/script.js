let novoPargrafo = ""
let conteudoInput = ""

const adicionar = () => {
    novoParagrafo = document.getElementById("paragrafo")
    conteudoInput = document.getElementById("texto");
    novoParagrafo.innerHTML += conteudoInput.value
    conteudoInput.value = ""

}

const valorAtualInput = () => {
    conteudoInput = document.getElementById("texto")
    console.log(conteudoInput.value)
}