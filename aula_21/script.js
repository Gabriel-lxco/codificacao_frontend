function Cadastrar() {
    const nomePropio = document.getElementById("nome-proprio")
    const apelido = document.getElementById("apelido")
    const nascimento = document.getElementById("nascimento")
    const genero = document.querySelector("#genero")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const nomePropioValue = nomePropio.value
    const apelidoValue = apelido.value
    const nascimentoValue = nascimento.value
    const generoValue = genero.value
    const emailValue = email.value
    const senhaValue = senha.value

    if(nomePropioValue === ""){
        nomePropio.classList.add("erro")
        return
    }else{
        nomePropioValue.classList.remove("erro")
    }

    if (apelidoValue === "") {
        apelido.classList.add("erro")
    } else {
        apelidoValue.classList.remove("erro")
    }

    if (nascimentoValue === "") {
        nascimento.classList.add("erro")
    } else {
        apelidoValue.classList.add("erro")
    }

    if (generoValue === "") {
        genero.classList.add("erro")
    } else {
        generoValue.classList.remove("erro")
    }

    if (emailValue === "") {
        email.classList.add("erro")
    } else {
        emailValue.classList.remove("erro")
    }

    if (senhaValue === "") {
        senha.classList.add("erro")
    } else {
        senhaValue.classList.remove("erro")
    }
    
}