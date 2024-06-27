document.addEventListener("DOMContentLoaded", function(){
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let msg = document.getElementById("my-textarea");
    let iss = document.getElementById("Issue");
    let subm = document.getElementById("subm");

    function submit(){
        name.value = "";
        email.value = "";
        msg.value = "";
        iss.value = "";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function ShowIfIsValid() {
        if (name.value !== "") {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
        } else {
            name.classList.remove("is-valid");
            name.classList.remove("is-invalid");
        }

        if (iss.value !== "") {
            iss.classList.add("is-valid");
            iss.classList.remove("is-invalid");
        } else {
            iss.classList.remove("is-valid");
            iss.classList.remove("is-invalid");
        }

        const emailValue = email.value.trim();
        if (emailValue === "") {
            email.classList.remove("is-valid");
            email.classList.remove("is-invalid");
        } else if (validateEmail(emailValue)) {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
        } else {
            email.classList.remove("is-valid");
            email.classList.add("is-invalid");
        }

        if (msg.value !== "") {
            msg.classList.add("is-valid");
            msg.classList.remove("is-invalid");
        } else {
            msg.classList.remove("is-valid");
            msg.classList.remove("is-invalid");
        }
    }

    function noSubmitEvent(){
        subm.disabled = true;
        subm.classList.add("no-click");
        subm.removeEventListener("click", submit);
        subm.addEventListener("click", function(e){
            e.preventDefault();
        });
    }

    function noSubmit(){
        if (msg.value === "" || email.value === "" || name.value === "" || name.value === "") {
            noSubmitEvent();
        } else {
            subm.disabled = false;
            subm.classList.remove("no-click");
            subm.addEventListener("click", submit);
        }
    }

    name.addEventListener("input", ShowIfIsValid);
    email.addEventListener("input", ShowIfIsValid);
    msg.addEventListener("input", ShowIfIsValid);
    iss.addEventListener("input", ShowIfIsValid);

    subm.addEventListener("click", noSubmit);

    noSubmit();
})
