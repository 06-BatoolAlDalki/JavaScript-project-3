

// localStorage.clear();
var i = 0;
var flag = true;
function signup() {

    var firstname = document.getElementById("firstname").value;
    for (let x = 0; x < 10; x++) {
        if (firstname == localStorage.getItem("firstname" + x)) {
            alert("you are aleady exit");
            flag = false;
            break;
        }
    }
    if (flag) {
        localStorage.setItem("firstname" + i, firstname);


        var lastname = document.getElementById("lastname").value;
        localStorage.setItem("lastname" + i, lastname);
        var email = document.getElementById("email").value;
        localStorage.setItem("email" + i, email);

        var password = document.getElementById("password").value;
        localStorage.setItem("password" + i, password);

        var confirmpassword = document.getElementById("confirmpassword").value;
        console.log(confirmpassword);
        localStorage.setItem("confirmpassword" + i, confirmpassword);
        i++
    }

}
