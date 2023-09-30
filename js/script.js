$(document).ready(function() {
    if (!sessionStorage.getItem('assignment6')) {
        window.location.href = "login.html";
    }

    $("#logout").click(function(e) {
        e.preventDefault(); 

        sessionStorage.removeItem('assignment6');

        window.location.href = "login.html";
    });

    var user = sessionStorage.getItem('assignment6');
    if (user) {
        $("#user").text("Welcome, " + user);
    }
});
