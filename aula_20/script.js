function verificaDados(){
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const senha = document.querySelector("#senha").value;
    const resultado = document.querySelector(".resultado")
    
    resultado.innerHTML = `<p>Nome: ${nome} <p>
    <p> sobrenome: ${sobrenome} <p>
    <p> senha: ${senha} </p>`
    
    if(nome === ""){
        window.alert("O campo não pode estar vazio")
        document.querySelector("#nome").style.borderColor = "red"
        return
    }

    if(sobrenome === ""){
        window.alert("O campo não pode estar vazio")
        document.querySelector("#sobrenome").style.borderColor = "red"
        return
    }

    if(senha === ""){
        window.alert("O campo não pode estar vazio")
        document.querySelector("#senha").style.borderColor = "red"
        return
    }
}