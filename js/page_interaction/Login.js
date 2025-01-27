
import { transi } from './main.js';  // For default exports

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("register_button").addEventListener("click", () => {
    document.getElementById("login_form").style.display = "none";
    document.getElementById("registration_form").style.display = "flex";
});

document.getElementById("cancel_login").addEventListener("click", () => {
    document.getElementById("login_form").style.display = "none";
    document.getElementById("startbutton").disabled = false;
    document.getElementById("username_or_email").textContent = "";
    document.getElementById("password_login").textContent = "";
});

document.getElementById("return_login").addEventListener("click", () => {
    document.getElementById("login_form").style.display = "flex";
    document.getElementById("registration_form").style.display = "none";
    document.getElementById("username").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("password_register").textContent = "";
    document.getElementById("name").textContent = "";
});

document.getElementById("startbutton").addEventListener("click", () => {
    document.getElementById("login_form").style.display = "flex";
    document.getElementById("startbutton").disabled = true;
});

// Add event listeners for input validation
["username", "name", "email", "password_register"].forEach((id) => {
    document.getElementById(id).addEventListener("keydown", form_checker);
});

function form_checker() {
    // Dynamically fetch the input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password_register").value.trim();
    const Uname = document.getElementById("name").value.trim();

    // Validation flags
    let w = false,
        x = false,
        y = false,
        z = false;

    // Username validation
    //note: add if there are duplicate username in the database, produce error
    if (username.length > 0) {
        w = true;
        document.getElementById("username").style.border = "3px green solid";
    } else {
        w = false;
        document.getElementById("username").style.border = "3px red solid";
    }

    // Email validation
    //note: add if there are duplicate email in the database, produce error
    if (email.length > 0 && emailPattern.test(email)) {
        x = true;
        document.getElementById("email").style.border = "3px green solid";
    } else {
        x = false;
        document.getElementById("email").style.border = "3px red solid";
    }

    // Password validation
    if (password.length >= 6) {
        y = true;
        document.getElementById("password_register").style.border = "3px green solid";
    } else {
        y = false;
        document.getElementById("password_register").style.border = "3px red solid";
    }

    // Name validation
    //note: add if there are double name in the database, produce error
    if (Uname.length > 0) {
        z = true;
        document.getElementById("name").style.border = "3px green solid";
    } else {
        z = false;
        document.getElementById("name").style.border = "3px red solid";
    }

    // Enable or disable the submit button based on validation
    const submitButton = document.getElementById("submit_form").addEventListener('click', () => {
        // reserve for errors
        // if () { }
        document.getElementById("confirm_email").style.display = "flex";
        setTimeout(() => {
            document.getElementById("confirm_email").style.display = "none";
            document.getElementById("success").style.display = "flex";
        }, 2000)
        setTimeout(() => {
            document.getElementById("statAuth").textContent = "Click here to start";
            document.getElementById("success").style.display = "none";
            // document.getElementById("statAuth").removeEventListener();
            document.getElementById("startbutton").addEventListener('click', () => {
                transi();
                setTimeout(() => {
                    document.getElementById("login").style.display = "none";
                    document.getElementById("map").style.display = "flex";
                }, 4000)
            });
        }, 4000)
    });
    if (w && x && y && z) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}


document.getElementById('login_button').addEventListener("click", () => {
    const x = document.getElementById('username_or_email').value;
    const y = document.getElementById('password_login').value;

    if (x != "" && y != "") {
        document.getElementById("login_form").style.display = "none";
        document.getElementById("statAuth").textContent = "Click here to start";

        document.getElementById("startbutton").addEventListener('click', () => {
            document.getElementById("startbutton").disabled = false;
            document.getElementById("login_form").style.display = "none";

            setTimeout(() => {
                document.getElementById("login").style.display = "none";
                document.getElementById("map").style.display = "flex";
                document.getElementById("notice").style.display = "flex";
            }, 4000); // Notice appears after 4 seconds

            // Second timeout to hide the notice after 6 seconds
            setTimeout(() => {
                console.log("Notice disappearing");
                document.getElementById("notice").style.display = "none";
            }, 7000);

            transi();  // Transition function can run here, if needed
        });

        document.getElementById("startbutton").disabled = false;
        document.getElementById("username").textContent = "";
        document.getElementById("email").textContent = "";
        document.getElementById("password_register").textContent = "";
        document.getElementById("name").textContent = "";
    }

    if (x == "") {
        document.getElementById('username_or_email').style.border = "3px red solid";
    }
    if (y == "") {
        document.getElementById('password_login').style.border = "3px red solid";
    }
});
