document.addEventListener("DOMContentLoaded", function(){
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let msg = document.getElementById("my-textarea");
    let iss = document.getElementById("Issue");
    let subm = document.getElementById("subm");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function ShowIfIsValid() {
        validateField(name);
        validateField(email, validateEmail);
        validateField(msg);
        validateField(iss);
        noSubmit();
    }

    function validateField(field, validator) {
        const value = field.value.trim();
        if (value === "") {
            field.classList.remove("is-valid");
            field.classList.remove("is-invalid");
        } else if (validator ? validator(value) : value !== "") {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
        } else {
            field.classList.remove("is-valid");
            field.classList.add("is-invalid");
        }
    }

    function noSubmit() {
        if (name.value.trim() === "" || 
            !validateEmail(email.value.trim()) || 
            msg.value.trim() === "" || 
            iss.value.trim() === "") {
            subm.disabled = true;
            subm.classList.add("no-click");
        } else {
            subm.disabled = false;
            subm.classList.remove("no-click");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!subm.disabled) {
            name.value = "";
            email.value = "";
            msg.value = "";
            iss.value = "";
            alert("Form submitted successfully!");
        }
    }

    name.addEventListener("input", ShowIfIsValid);
    email.addEventListener("input", ShowIfIsValid);
    msg.addEventListener("input", ShowIfIsValid);
    iss.addEventListener("input", ShowIfIsValid);

    document.getElementById("cmForm").addEventListener("submit", handleSubmit);

    ShowIfIsValid();
});
