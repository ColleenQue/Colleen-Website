
(function ($) {
    //Let's start writing AJAX calls!
    //page load

    //corresponds to id

    var darkButton = $("#darkMode"),
        img = $("#resume-img"),
        element = document.body;

    function myFunction() {


        //set dark = true if contains class dark-mode
        element.classList.toggle("dark-mode");

        var x = document.getElementById("main-body").classList.contains("dark-mode")
        localStorage.setItem('dark', x);


        if (localStorage.getItem('dark') === "true") {

            img.attr("src", "/public/img/Resume.png");
        }

        else {
            img.attr("src", "/public/img/Resume.png");
        }



    }


    if (localStorage.getItem('dark') === "true") {

        element.classList.add("dark-mode");
        img.attr("src", "/public/img/image.png");


    }
    else {
        document.body.classList.remove('dark-mode');
        img.attr("src", "/public/img/Resume.png");
    }

    darkButton.click(function () {
        myFunction()
    })



})(window.jQuery);