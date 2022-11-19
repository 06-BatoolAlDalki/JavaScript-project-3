function signin() {


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var flag = true;
    for (var i = 0; i < 10; i++) {
        if ((username == localStorage.getItem("firstname" + i)) && (password == localStorage.getItem("password" + i))) {

            //  we want username to display it in welcome page 
            var username = localStorage.setItem("username", username);

            location.href = "../Nouran/final.html";

            flag = false;
        }
        if (flag) {
            alert("your name or your password is wrong");
            break;
        }
    }
}