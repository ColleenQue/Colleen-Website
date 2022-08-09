
(function ($) {
    // Let's start writing AJAX calls!
    //page load

    //corresponds to id

    var darkButton = $("#darkButton")

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }


    darkButton.click(function () {
        console.log("clicked");
        myFunction();
        darkButton.hide();
    }

    )



})