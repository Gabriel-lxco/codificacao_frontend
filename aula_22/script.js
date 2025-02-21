function contactUs(){
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const btn = document.querySelector(".btn");

    const firstNameValue = document.querySelector("#firstName").value
    const lastNameValue = document.querySelector("#lastName").value
    const emailValue = document.querySelector("#email").value
    const messageValue = document.querySelector("#message").value

    //Começo de código com inteligência artifical
    const generalEnquiry = document.querySelector("#general-enquiry");
    const supportRequest = document.querySelector("#support-request");
    const queryTypeBox = document.querySelectorAll(".box-querytype");

    if (!generalEnquiry.checked && !supportRequest.checked) {
        queryTypeBox.forEach(box => box.classList.add("erro"));
    } else {
        queryTypeBox.forEach(box => box.classList.remove("erro"));
    }
    //Fim de código feito com inteligência artificial

    if (firstNameValue === "") {
        firstName.classList.add("erro")
    } else {
        firstName.classList.remove("erro")
    }

    if (lastNameValue === "") {
        lastName.classList.add("erro")
    } else {
        lastName.classList.remove("erro")
    }

    if (emailValue === "") {
        email.classList.add("erro")
    } else {
        email.classList.remove("erro")
    }

    if (messageValue === "") {
        message.classList.add("erro")
    } else {
        message.classList.remove("erro")
    }
}