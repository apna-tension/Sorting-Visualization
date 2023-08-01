// function validate() {
//     var userName = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (userName == "admin" && password == "user") {
//         alert("login successfully");
//         return true;
//     } else {
//         alert("login fali");
//     }
// }

var userName = document.getElementById("userName");
var password = document.getElementById("password");
var form = document.getElementById("form");
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages = [];
    if (userName.value == '' || userName.value == null) {
        messages.push('Name is Required');
    }

    if (password.length <= 6) {
        messages.push('password must be longer than 6 characters')
    }
    if (password.length >= 20) {
        messages.push('password must be less than 20 characters')
    }
    if (password.value == 'password') {
        messages.push('passowrd cannot be password')
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',')
    }
    
})

