$(document).ready(function () {
    var yesTwentyOne = document.querySelector(".age-yes");
    var noTwentyOne = document.querySelector(".age-no");
    var yesDate = document.querySelector(".date-yes");
    var iAmTwentyOne = false;
    var iLikeDate = false;

    // scroll reveal stylings
    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };
    
    ScrollReveal().reveal('.card', slideUp);
    // event listener for the yes button when asked age
    yesTwentyOne.addEventListener("click", function () {
        iAmTwentyOne = true;
        // brings user to search page if both yes buttons were clicked
        if (iAmTwentyOne === true && iLikeDate === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });
    // event listener to send user to under21 page 
    noTwentyOne.addEventListener("click", function () {
        window.location.replace("./under21.html");
    });
    // event listener for the yes button when asked if they like animals
    yesDate.addEventListener("click", function () {
        iLikeDate = true;
        // brings user to search page if both yes buttons were clicked
        if (iAmTwentyOne === true && iLikeDate === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });
   
});