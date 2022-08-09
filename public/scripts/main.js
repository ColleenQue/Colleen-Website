
(function ($) {
    //Let's start writing AJAX calls!
    //page load

    //corresponds to id

    var darkButton = $("#darkMode"),
        body = $("#main-body"),
         element = document.body;

    function myFunction() {
 

        //set dark = true if contains class dark-mode
        element.classList.toggle("dark-mode");

        var x = document.getElementById("main-body").classList.contains("dark-mode")
        localStorage.setItem('dark', x);


    }


    if (localStorage.getItem('dark')==="true") {
        
        element.classList.add("dark-mode");

    }
    else {
        console.log(localStorage.getItem('dark'));
        document.body.classList.remove('dark-mode');
    }

    darkButton.click(function () {
        myFunction()
    })



})(window.jQuery);