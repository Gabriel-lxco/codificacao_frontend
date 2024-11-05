function Cadastrar() {
    const nomePropio = document.getElementById("nome-proprio")
    const apelido = document.getElementById("apelido")
    const nascimento = document.getElementById("nascimento")
    const genero = document.querySelector("#genero")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const nomePropioValue = nomePropio.value
    const apelidoValue = apelido.value
    const nascimentValue = nascimento.value
    const generovallue = genero.value
    const emailValue = email.value
    const senhavalue = senha.value

    if(nomePropioValue === ""){
        nomePropio.style.borderColor = "red"
        return
    }
}