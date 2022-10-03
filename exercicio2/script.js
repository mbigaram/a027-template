const capturaValores = () =>{
    const nome = document.getElementById("nome")
    const endereco = document.getElementById("endereco")
    const email = document.getElementById("email")
    console.log(`
    ${nome.value},
    ${endereco.value},
    ${email.value}
    `)
    nome.value=""
    endereco.value=""
    email.value=""

}

const adicionaItem = () => {
    const item = document.getElementById("nome")
    const lista = document.getElementById("lista-de-tarefas")
    lista.innerHTML += `<p>${item.value}</p>`
    // item.value = ""
}